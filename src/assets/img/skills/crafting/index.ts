import Weaponsmithing from './weaponsmithing.png';
import Armoring from './armoring.png';
import Engineering from './engineering.png';
import Jewelcrafting from './jewelcrafting.png';
import Arcana from './arcana.png';
import Cooking from './cooking.png';
import Furnishing from './furnishing.png';

import type { CraftingSkill } from '#types/skills';

export const CraftingImgs: Record<CraftingSkill, string> = {
  Weaponsmithing,
  Armoring,
  Engineering,
  Jewelcrafting,
  Arcana,
  Cooking,
  Furnishing,
};
export default CraftingImgs;
