import React from 'react';
import { ToggleButtonGroup, Typography } from '@mui/material';
import { paramCase, pascalCase } from 'change-case';

import type { ToggleButtonGroupProps } from '@mui/material';

import { SkillBox } from '#components/SkillBox';
import './SkillGroup.scss';

import type { Skill } from '#types';

export interface SkillGroupProps extends ToggleButtonGroupProps {
  skills: Skill[];
  className: string;
}

export function SkillGroup(props: SkillGroupProps) {
  const { className, skills, value, onChange } = props;

  return (
    <div className={`skill-group ${className ? paramCase(className) : ''}`}>
      <Typography variant="subtitle2">
        {pascalCase(className.split('-')[0])}
      </Typography>
      <hr />
      <ToggleButtonGroup
        className={className}
        value={value}
        onChange={onChange}
        color="info"
        size="small"
        exclusive
        style={{ display: 'grid' }}
      >
        {React.Children.map(skills, (s) => (
          <SkillBox value={s} />
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
