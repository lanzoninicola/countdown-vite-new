import { useState, useEffect } from "react";
import { Milliseconds, RemainingTime } from "../types";
import { getRemainingTimeUntilMsTimestamp } from "../utils/countdown-timer";
import padWithZeros from "../utils/padWithZeros";

interface UseCountdownProps {
  /** the target date in milliseconds */
  targetDateMs: Milliseconds;
  /** flag that indicates if need to add 0 to the digits. It depends on the editor settings */
  withZeros?: boolean;
}

const defaultRemainingTime = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
};

export default function useCountdown({
  targetDateMs,
  withZeros,
}: UseCountdownProps): RemainingTime {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   updateRemainingTime(targetDateMs);
    // }, 1000);
    // return () => clearInterval(intervalId);
  }, [targetDateMs]);

  function updateRemainingTime(countdown: Milliseconds) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  function shouldPadWithZeros(number: number, digits: number = 2) {
    if (withZeros) {
      return padWithZeros(number, digits);
    }

    return number;
  }

  return {
    days: shouldPadWithZeros(remainingTime.days),
    hours: shouldPadWithZeros(remainingTime.hours),
    minutes: shouldPadWithZeros(remainingTime.minutes),
    seconds: shouldPadWithZeros(remainingTime.seconds),
  };
}
