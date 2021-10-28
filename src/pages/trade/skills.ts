import type { CraftingSkill, RefiningSkill, GatheringSkill } from '#types';

export interface SkillsGroups {
  craftingSkills: CraftingSkill[],
  refiningSkills: RefiningSkill[],
  gatheringSkills: GatheringSkill[],
}

export const skillsGroups: SkillsGroups = {
  craftingSkills: [
    'Weaponsmithing',
    'Armoring',
    'Engineering',
    'Jewelcrafting',
    'Arcana',
    'Cooking',
    'Furnishing',
  ],
  refiningSkills: [
    'Smelting',
    'Woodworking',
    'Leatherworking',
    'Weaving',
    'Stonecutting',
  ],
  gatheringSkills: [
    'Logging',
    'Mining',
    'Fishing',
    'Harvesting',
    'Tracking & Skinning',
  ],
};
