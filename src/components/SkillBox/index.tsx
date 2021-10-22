import ToggleButton from '@mui/material/ToggleButton';

import type { ToggleButtonProps } from '@mui/material';

import { SkillImgs } from '#assets/img/skills';

import './SkillBox.scss';

import type { Skill } from '../../types/skills';

export interface SkillBoxProps extends ToggleButtonProps {
  value: Skill;
}

export function SkillBox(props: SkillBoxProps) {
  const { value } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ToggleButton aria-label={value} {...props}>
      <div className="SkillBox">
        <img src={SkillImgs[value]} alt={`${value} icon`} />
        <p>{value}</p>
      </div>
    </ToggleButton>
  );
}
