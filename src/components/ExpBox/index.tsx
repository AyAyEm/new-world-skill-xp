import React from 'react';
import { Typography, Box, InputLabel } from '@mui/material';

import { LevelSlider } from '#components/LevelSlider';
import { getXpDifference, inRange } from '#lib';

import './ExpBox.scss';

import type { Skill } from '#types/skills';

interface ExpBoxProps {
  className: string;
  skill: Skill;
  unit?: string;
}

export function ExpBox(props: ExpBoxProps) {
  const { skill, className, unit } = props;
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
      <Box>
        <InputLabel htmlFor="min-input">Min </InputLabel>
        <Typography>
          {`${xpDifference.toLocaleString()} ${unit}`}
        </Typography>
        <InputLabel htmlFor="max-input">Max </InputLabel>
      </Box>
      <LevelSlider value={sliderRange} onChange={setSliderRange} />
    </div>
  );
}

ExpBox.defaultProps = {
  unit: 'xp',
};

export default ExpBox;
