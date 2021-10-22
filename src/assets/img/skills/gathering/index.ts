import Logging from './Logging.png';
import Mining from './Mining.png';
import Fishing from './Fishing.png';
import Harvesting from './Harvesting.png';
import TrackingAndSkinning from './TrackingAndSkinning.png';

import type { GatheringSkill } from '#types/skills';

export const GatheringImgs: Record<GatheringSkill, string> = {
  Logging,
  Mining,
  Fishing,
  Harvesting,
  'Tracking & Skinning': TrackingAndSkinning,
};
export default GatheringImgs;
