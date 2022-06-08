import dayjs from "dayjs";
import { Milliseconds } from "../types";

export function getRemainingTimeUntilMsTimestamp(targetDateMs: Milliseconds) {
  const targetDateDayjs = dayjs(targetDateMs);
  const nowDayjs = dayjs();
  if (targetDateDayjs.isBefore(nowDayjs)) {
    return {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    };
  }
  return {
    seconds: getRemainingSeconds(nowDayjs, targetDateDayjs),
    minutes: getRemainingMinutes(nowDayjs, targetDateDayjs),
    hours: getRemainingHours(nowDayjs, targetDateDayjs),
    days: getRemainingDays(nowDayjs, targetDateDayjs),
  };
}

function getRemainingSeconds(
  nowDayjs: dayjs.Dayjs,
  targetDateDayjs: dayjs.Dayjs
): number {
  return targetDateDayjs.diff(nowDayjs, "seconds") % 60;
}

function getRemainingMinutes(
  nowDayjs: dayjs.Dayjs,
  targetDateDayjs: dayjs.Dayjs
): number {
  return targetDateDayjs.diff(nowDayjs, "minutes") % 60;
}

function getRemainingHours(
  nowDayjs: dayjs.Dayjs,
  targetDateDayjs: dayjs.Dayjs
): number {
  return targetDateDayjs.diff(nowDayjs, "hours") % 24;
}

function getRemainingDays(
  nowDayjs: dayjs.Dayjs,
  targetDateDayjs: dayjs.Dayjs
): number {
  return targetDateDayjs.diff(nowDayjs, "days");
}
