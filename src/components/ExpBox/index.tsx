import Typography from '@mui/material/Typography';
import { getXpDifference } from '../../lib';

import { inRange } from '../../lib/utils';

import type { Skill } from '../../types/skills';

interface ExpBoxProps {
  className: string;
  range: [number, number];
  skill: Skill;
}

export function ExpBox(props: ExpBoxProps) {
  const { range, skill, className } = props;

  let xpDifference = 0;
  if (
    skill
    && range
    && range.length === 2
    && inRange(range[0], 0, 200)
    && inRange(range[1], 0, 200)
  ) {
    xpDifference = getXpDifference(range[0], range[1], skill);
  }

  return (
    <Typography className={className}>
      {`${xpDifference.toLocaleString()}xp`}
    </Typography>
  );
}
export default ExpBox;
