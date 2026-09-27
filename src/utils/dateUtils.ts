// Configured program start date (e.g. September 1, 2026)
export const PROGRAM_START_DATE = new Date('2026-09-01T00:00:00');

/**
 * Calculates the current program day (1 to 90) based on today's calendar date.
 * If today is before PROGRAM_START_DATE, returns Day 1.
 * If today is after Day 90, returns Day 90.
 */
export function calculateAutomaticProgramDay(nowDate: Date = new Date()): number {
  const startMs = PROGRAM_START_DATE.getTime();
  const currentMs = nowDate.getTime();

  if (currentMs < startMs) {
    return 1;
  }

  const diffTime = currentMs - startMs;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

  if (diffDays > 90) {
    return 90;
  }

  return Math.max(1, diffDays);
}
