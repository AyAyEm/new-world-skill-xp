import icons from './icons';

import './SkillBox.css';

import type { Skill } from '../../types/skills';

export interface SkillBoxProps {
  skill: Skill;
}

export function SkillBox(props: SkillBoxProps) {
  return (
    <div className="SkillBox">
      <p>{props.skill}</p>
      <img src={icons[props.skill]} alt={`${props.skill} icon`} />
    </div>
  );
}