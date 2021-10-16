import { ap, toSkillRangeXp } from './utils';

import type { Skill, SkillRangeXp } from '../types';

export const skillRange: Record<Skill, SkillRangeXp[]> = {
  Weaponsmithing: toSkillRangeXp([5, 50, 186, 620], [100, 500, 3534, 12400]),
  Armoring: toSkillRangeXp([5, 50, 186, 620], [100, 500, 3534, 12400]),
  Engineering: toSkillRangeXp([5, 50, 186, 620], [100, 500, 3534, 12400]),
  Jewelcrafting: toSkillRangeXp([5, 50, 186, 620], [100, 500, 3534, 12400]),
  Arcana: toSkillRangeXp([5, 50, 186, 620], [100, 500, 3534, 12400]),
  Cooking: toSkillRangeXp([2, 14, 60, 150], [20, 144, 900, 4200]),
  Furnishing: toSkillRangeXp([15, 80, 480, 2560], [100, 1200, 9600, 70400]),
};

export function getTotalXp(toCheckLvl: number, skill: Skill): number {
  const lvl = toCheckLvl < 0 || toCheckLvl > 200 
    ? toCheckLvl < 0 
      ? 0 
      : 200 
    : toCheckLvl;

  const skillRangeXp = skillRange[skill];

  let lvlRange = Math.floor(lvl / 50);
  lvlRange = lvlRange > 3 ? 3 : lvlRange;

  let previousExp = 0;
  if (lvlRange > 0) {
    const lastRange = lvlRange - 1;
    previousExp = getTotalXp(50 * lvlRange - 1, skill);
    previousExp += ap(skillRangeXp[lastRange].start, 49, skillRangeXp[lastRange].difference);
  }

  console.log(skill, lvl);
  const levelDifference = skillRangeXp[lvlRange].difference;
  const startLelvel = skillRangeXp[lvlRange].start;
  return Array
    .from({ length: lvl - lvlRange * 50 }, (_, i) => ap(startLelvel, i + 1, levelDifference))
    .reduce((acc, curr) => acc + curr, 0) + previousExp;
}

export function getXpDifference(a: number, b: number, skill: Skill): number {
  return getTotalXp(b, skill) - getTotalXp(a, skill);
}