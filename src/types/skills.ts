export type CraftingSkill = 'Weaponsmithing'
| 'Armoring'
| 'Engineering'
| 'Jewelcrafting'
| 'Arcana'
| 'Cooking'
| 'Furnishing';

export type RefiningSkill = 'Smelting'
| 'Woodworking'
| 'Leatherworking'
| 'Weaving'
| 'Stonecutting';

export type GatheringSkill = 'Logging'
| 'Mining'
| 'Fishing'
| 'Harvesting'
| 'Tracking & Skinning';

export type Skill = CraftingSkill | RefiningSkill | GatheringSkill;
