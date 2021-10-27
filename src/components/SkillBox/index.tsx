import React from 'react';
import { ToggleButton, Skeleton } from '@mui/material';

import type { ToggleButtonProps } from '@mui/material';
import { SkillImgs } from '#assets/img/skills';

import './SkillBox.scss';

import type { Skill } from '#types/skills';

export interface SkillBoxProps extends ToggleButtonProps {
  value: Skill;
}

export function SkillBox(props: SkillBoxProps) {
  const { value } = props;
  const [loading, setLoading] = React.useState(true);
  const imageStyle = loading ? { display: 'none' } : {};

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ToggleButton aria-label={value} {...props}>
      <div className="skill-box">
        {loading ? <Skeleton /> : ''}
        <img
          src={SkillImgs[value]}
          alt={`${value} icon`}
          style={imageStyle}
          onLoad={() => setLoading(false)}
        />
        <p>{value}</p>
      </div>
    </ToggleButton>
  );
}
