import React from 'react';
import { Box } from '@mui/material';

import { SkillSelect, ExpBox } from '#components';
import { skillsGroups } from '#lib';

import type { Skill } from '#types/skills';

import './Trade.scss';

export function Trade() {
  const [skill, setSkill] = React.useState<Skill>('Weaponsmithing');

  return (
    <Box className="trade-skills">
      <SkillSelect onChange={setSkill} skill={skill} skillsGroups={skillsGroups} />
      <ExpBox className="exp-box" skill={skill} />
    </Box>
  );
}
