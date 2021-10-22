import React from 'react';

import Typography from '@mui/material/Typography';

import { LevelSlider } from '#components/LevelSlider';
import { getXpDifference, inRange } from '#lib';

import './ExpBox.scss';

import type { Skill } from '#types/skills';

interface ExpBoxProps {
  className: string;
  skill: Skill;
}

export function ExpBox(props: ExpBoxProps) {
  const { skill, className } = props;
  const [sliderRange, setSliderRange] = React.useState<[number, number]>([0, 200]);

  let xpDifference = 0;
  if (
    skill
    && sliderRange
    && sliderRange.length === 2
    && inRange(sliderRange[0], 0, 200)
    && inRange(sliderRange[1], 0, 200)
  ) {
    xpDifference = getXpDifference(sliderRange[0], sliderRange[1], skill);
  }

  return (
    <div className={className}>
      <Typography>
        {`${xpDifference.toLocaleString()}xp`}
      </Typography>
      <LevelSlider value={sliderRange} onChange={setSliderRange} />
    </div>
  );
}
export default ExpBox;
