import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { SkillBox } from '../SkillBox';

import './SkillSelect.scss';

import type { Skill } from '../../types/skills';

export interface SkillSelectProps {
  onChange: (skill: Skill) => void,
  skill: Skill,
}

export function SkillSelect(props: SkillSelectProps) {
  const { skill, onChange } = props;

  return (
    <ToggleButtonGroup
      value={skill}
      exclusive
      onChange={(_e, s) => onChange(s)}
      aria-label="text alignment"
      color="info"
    >
      <ToggleButton value="Weaponsmithing" aria-label="Weaponsmithing">
        <SkillBox skill="Weaponsmithing" />
      </ToggleButton>
      <ToggleButton value="Armoring" aria-label="Armoring">
        <SkillBox skill="Armoring" />
      </ToggleButton>
      <ToggleButton value="Engineering" aria-label="Engineering">
        <SkillBox skill="Engineering" />
      </ToggleButton>
      <ToggleButton value="Jewelcrafting" aria-label="Jewelcrafting">
        <SkillBox skill="Jewelcrafting" />
      </ToggleButton>
      <ToggleButton value="Arcana" aria-label="Arcana">
        <SkillBox skill="Arcana" />
      </ToggleButton>
      <ToggleButton value="Cooking" aria-label="Cooking">
        <SkillBox skill="Cooking" />
      </ToggleButton>
      <ToggleButton value="Furnishing" aria-label="Furnishing">
        <SkillBox skill="Furnishing" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
export default SkillSelect;
