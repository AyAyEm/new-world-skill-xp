import Typography from '@mui/material/Typography';
import { getXpDifference } from '../../lib';

import type { Skill } from '../../types/skills';

interface ExpBoxProps {
  className?: string;
  range: [number, number];
  skill: Skill;
}

export function ExpBox(props: ExpBoxProps) {
  const { range, skill } = props;

  const xpDifference = getXpDifference(range[0], range[1], skill).toLocaleString();
  return (
    <Typography className={props.className ? props.className : ''}>
      {`${xpDifference}xp`}
    </Typography>
  )
}