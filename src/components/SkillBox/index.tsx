import skillImgs from '#assets/img/skills';

import './SkillBox.scss';

import type { Skill } from '../../types/skills';

export interface SkillBoxProps {
  skill: Skill;
}

export function SkillBox(props: SkillBoxProps) {
  const { skill } = props;

  return (
    <div className="SkillBox">
      <p>{skill}</p>
      <img src={skillImgs[skill]} alt={`${skill} icon`} />
    </div>
  );
}
export default SkillBox;
