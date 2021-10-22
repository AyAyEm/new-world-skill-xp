import type { Skill } from '#types';

import { CraftingImgs } from './crafting';
import { RefiningImgs } from './refining';
import { GatheringImgs } from './gathering';

export const SkillImgs: Record<Skill, string> = {
  ...CraftingImgs,
  ...RefiningImgs,
  ...GatheringImgs,
};
