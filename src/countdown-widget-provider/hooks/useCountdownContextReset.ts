import { useContextSelector } from "use-context-selector";
import COUNTDOWN_WIDGET_INITIAL_STATE from "../constants/initial-state";
import { CountdownWidgetContext } from "../context/countdown-widget-context";

export default function useCountdownContextReset() {
  const setTargetDate = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.setTargetDate
  );

  const setTargetTimezone = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.setTargetTimezone
  );

  const setTimerExpired = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.setTimerExpired
  );

  const setCurrentCountdown = useContextSelector(
    CountdownWidgetContext,
    (state) => state.setCurrentCountdown
  );

  const resetState = () => {
    const { currentCountdown, targetDate, targetTimezone, timerExpired } =
      COUNTDOWN_WIDGET_INITIAL_STATE;

    setCurrentCountdown(currentCountdown);
    setTargetDate(targetDate);
    setTargetTimezone(targetTimezone);
    setTimerExpired(timerExpired);
  };

  return {
    resetState,
  };
}
