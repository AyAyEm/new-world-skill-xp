import { paramCase } from 'change-case';

import { skillsGroups } from '#lib';
import { SkillGroup } from '#components/SkillGroup';

import './SkillSelect.scss';

import type { Skill } from '../../types/skills';

export interface SkillSelectProps {
  onChange: (skill: Skill) => void,
  skill: Skill,
}

export function SkillSelect(props: SkillSelectProps) {
  const { skill, onChange } = props;

  return (
    <div className="skill-select">
      {Object.entries(skillsGroups).map(([name, skills]) => (
        <SkillGroup
          key={name}
          value={skill}
          onChange={(_e, s: Skill) => onChange(s)}
          skills={skills}
          className={paramCase(name)}
        />
      ))}
    </div>
  );
}
export default SkillSelect;
