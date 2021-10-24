import { ap, apSumOfNTerms } from './utils';

import type { Skill, SkillRangeXp } from '../types';

export const skillRange: Record<Skill, SkillRangeXp> = {
  Weaponsmithing: {
    apDifferences: [5, 50, 186, 620],
    startLevels: [100, 500, 3534, 12400],
  },
  Armoring: {
    apDifferences: [5, 50, 186, 620],
    startLevels: [100, 500, 3534, 12400],
  },
  Engineering: {
    apDifferences: [5, 50, 186, 620],
    startLevels: [100, 500, 3534, 12400],
  },
  Jewelcrafting: {
    apDifferences: [5, 50, 186, 620],
    startLevels: [100, 500, 3534, 12400],
  },
  Arcana: {
    apDifferences: [5, 50, 186, 620],
    startLevels: [100, 500, 3534, 12400],
  },
  Cooking: {
    apDifferences: [2.693877551020408, 14.383673469387755, 60, 150],
    startLevels: [3, 144, 900, 4200],
  },
  Furnishing: {
    apDifferences: [15, 80, 480, 2560],
    startLevels: [100, 1200, 9600, 70400],
  },
  Smelting: {
    startLevels: [6.583673469387755, 33, 142.48979591836735, 1875],
    apDifferences: [120, 2250, 20250, 150000],
  },
  Woodworking: {
    apDifferences: [6.583673469387755, 33, 142.48979591836735, 1875],
    startLevels: [120, 2250, 20250, 150000],
  },
  Leatherworking: {
    apDifferences: [6.583673469387755, 33, 142.48979591836735, 1875],
    startLevels: [120, 2250, 20250, 150000],
  },
  Weaving: {
    apDifferences: [6.583673469387755, 33, 142.48979591836735, 1875],
    startLevels: [120, 2250, 20250, 150000],
  },
  Stonecutting: {
    apDifferences: [6.583673469387755, 33, 142.48979591836735, 1875],
    startLevels: [120, 2250, 20250, 150000],
  },
  Logging: {
    apDifferences: [
      12.319183673469388,
      51.969795918367346,
      91.46204081632654,
      82.5804081632653,
    ],
    startLevels: [100, 970, 3984, 8627],
  },
  Mining: {
    apDifferences: [
      8.234285714285715,
      24.297142857142855,
      34.414693877551024,
      27.568163265306122,
    ],
    startLevels: [100, 634, 1976, 3680],
  },
  Fishing: {
    apDifferences: [49.02040816326531, 10, 5, 5],
    startLevels: [100, 2000, 2500, 2750],
  },
  Harvesting: {
    apDifferences: [
      8.536326530612245,
      25.935510204081634,
      37.414693877551024,
      30.33469387755102,
    ],
    startLevels: [100, 657, 2096, 3953],
  },
  'Tracking & Skinning': {
    apDifferences: [10, 10.026122448979592, 5, 5.02204081632653],
    startLevels: [100, 600, 1100, 1350],
  },
};

export function getTotalXp(toCheckLvl: number, skill: Skill): number {
  let lvl: number;
  if (toCheckLvl < 0 || toCheckLvl > 200) {
    if (toCheckLvl < 0) {
      lvl = 0;
    } else {
      lvl = 200;
    }
  } else {
    lvl = toCheckLvl;
  }

  const skillRangeXp = skillRange[skill];

  let lvlRange = Math.floor(lvl / 50);
  lvlRange = lvlRange > 3 ? 3 : lvlRange;

  let previousExp = 0;
  if (lvlRange > 0) {
    const lastRange = lvlRange - 1;
    previousExp = getTotalXp(50 * lvlRange - 1, skill);
    previousExp += ap(
      skillRangeXp.startLevels[lastRange],
      49,
      skillRangeXp.apDifferences[lastRange],
    );
  }

  const levelDifference = skillRangeXp.apDifferences[lvlRange];
  const startLelvel = skillRangeXp.startLevels[lvlRange];

  return apSumOfNTerms(startLelvel, lvl - lvlRange * 50, levelDifference) + previousExp;
}

export function getXpDifference(a: number, b: number, skill: Skill): number {
  return Math.round(getTotalXp(b, skill) - getTotalXp(a, skill));
}
