import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 *
 * @param {string} targetDate the date to count down to.
 * @param {string} timezone the timezone of the target date
 * @returns
 *
 * Note: The "targetDate" format is "YYYY-MM-DDTHH:mm" produced by the <input type="datetime-local"> element
 */
export function getRemainingTime(targetDate: string, timezone: string) {
  /**
   * convert the given target date/time
   * from the given timezone to the local user timezone
   **/
  const targetDateLocalTime = dayjs.tz(targetDate, timezone);
  /* get the current date/time in the local user timezone */
  const nowDayjs = dayjs().utc();

  console.log({
    timzone: timezone,
    now: nowDayjs.toDate(),
    // nowTZ: nowDayjsTZ.toISOString(),
    target: targetDateLocalTime.toISOString(),
  });
  if (targetDateLocalTime.isBefore(nowDayjs)) {
    return {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    };
  }
  return {
    seconds: getRemainingSeconds(nowDayjs, targetDateLocalTime),
    minutes: getRemainingMinutes(nowDayjs, targetDateLocalTime),
    hours: getRemainingHours(nowDayjs, targetDateLocalTime),
    days: getRemainingDays(nowDayjs, targetDateLocalTime),
  };
}

function getRemainingSeconds(
  nowDayjs: dayjs.Dayjs,
  targetDateLocalTime: dayjs.Dayjs
): number {
  return targetDateLocalTime.diff(nowDayjs, "seconds") % 60;
}

function getRemainingMinutes(
  nowDayjs: dayjs.Dayjs,
  targetDateLocalTime: dayjs.Dayjs
): number {
  return targetDateLocalTime.diff(nowDayjs, "minutes") % 60;
}

function getRemainingHours(
  nowDayjs: dayjs.Dayjs,
  targetDateLocalTime: dayjs.Dayjs
): number {
  return targetDateLocalTime.diff(nowDayjs, "hours") % 24;
}

function getRemainingDays(
  nowDayjs: dayjs.Dayjs,
  targetDateLocalTime: dayjs.Dayjs
): number {
  return targetDateLocalTime.diff(nowDayjs, "days");
}
