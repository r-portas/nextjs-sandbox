/**
 * Sleep for a given amount of time
 *
 * @param ms - The time to sleep in milliseconds
 * @returns A promise that resolves after the given time
 */
export default async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
