/**
 * Inclusive range value comparison.
 */
export function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}
export default inRange;
