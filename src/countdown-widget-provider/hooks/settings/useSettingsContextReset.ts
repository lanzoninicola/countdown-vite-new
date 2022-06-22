import { useContextSelector } from "use-context-selector";
import COUNTDOWN_WIDGET_INITIAL_STATE from "../../constants/initial-state";
import { CountdownWidgetContext } from "../../context/countdown-widget-context";

export default function useSettingsContextReset() {
  const setTargetDate = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.setTargetDate
  );

  const setTargetTimezone = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.setTargetTimezone
  );


  const resetState = () => {
    const { targetDate, targetTimezone } =
      COUNTDOWN_WIDGET_INITIAL_STATE;

    setTargetDate(targetDate);
    setTargetTimezone(targetTimezone);
  };

  return {
    resetState,
  };
}
