import { useEffect, useState } from "react";

import useCountdownSelector from "../../countdown-provider/hooks/useCountdownSelector";
import { RemainingTime } from "../types";
import { getRemainingTime } from "../utils/countdown-timer";
import padWithZeros from "../utils/padWithZeros";

interface UseCountdownProps {
  /** flag that indicates if need to add 0 to the digits. It depends on the editor settings */
  withZeros?: boolean;
}

// TODO: stopping the interval when the timer is expired

const defaultRemainingTime = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
};

export default function useCountdown(
  { withZeros }: UseCountdownProps = { withZeros: false }
): RemainingTime {
  const { targetDate, targetTimezone } = useCountdownSelector();
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  function updateRemainingTime() {
    setRemainingTime(getRemainingTime(targetDate, targetTimezone));
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
