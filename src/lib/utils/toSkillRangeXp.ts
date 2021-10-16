import type { SkillRangeXp } from '../../types';

export function toSkillRangeXp(difference: number[], start: number[]): SkillRangeXp[] {
  return difference.map((d, i) => ({ difference: d, start: start[i] }));
}