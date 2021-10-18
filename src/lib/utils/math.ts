/**
 * Arithmetic progression.
 * @see https://en.wikipedia.org/wiki/Arithmetic_progression
*/
export const ap = (start: number, n: number, diff: number): number => start + (n - 1) * diff;

/**
 * Sum of n terms for an arithmetic progression.
 * @see https://byjus.com/maths/sum-of-n-terms
 */
export const apSumOfNTerms = (start: number, n: number, diff: number) => n / 2 * (2 * start + (n - 1) * diff);

export default ap;
