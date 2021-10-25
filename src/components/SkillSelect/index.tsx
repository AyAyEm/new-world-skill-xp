import { paramCase } from 'change-case';

import { SkillGroup } from '#components/SkillGroup';

import './SkillSelect.scss';

import type { Skill } from '../../types/skills';

export interface SkillSelectProps<S extends Skill, K extends string> {
  onChange: (skill: S) => void;
  skill: S;
  skillsGroups: Record<K, S[]>;
}

export function SkillSelect<S extends Skill, K extends string>(props: SkillSelectProps<S, K>) {
  const { skill, onChange, skillsGroups } = props;

  return (
    <div className="skill-select">
      {Object.entries<S[]>(skillsGroups).map(([name, skills]) => (
        <SkillGroup
          key={name}
          value={skill}
          onChange={(_e, s: S) => onChange(s)}
          skills={skills}
          className={paramCase(name)}
        />
      ))}
    </div>
  );
}
export default SkillSelect;
