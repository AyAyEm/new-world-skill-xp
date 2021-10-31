import React from 'react';
import { Box, Typography } from '@mui/material';

import { SkillSelect, LevelBox } from '#components';
import { getXpDifference } from './xpDifference';
import { skillsGroups } from './skills';

import type { Skill } from '#types/skills';

import './Trade.scss';

export function Trade() {
  const [skill, setSkill] = React.useState<Skill>('Weaponsmithing');
  const [values, setValues] = React.useState<[number, number]>([0, 200]);

  const difference = skill && values.every((v) => v >= 0 && v <= 200)
    ? getXpDifference(values[0], values[1], skill)
    : 0;

  return (
    <Box className="trade-skills">
      {React.useMemo(() => (
        <SkillSelect onChange={setSkill} skill={skill} skillsGroups={skillsGroups} />
      ), [skill])}
      <LevelBox min={0} max={200} onChange={setValues} values={values}>
        <Typography>
          {`${difference.toLocaleString()} xp`}
        </Typography>
      </LevelBox>
    </Box>
  );
}
export default Trade;
