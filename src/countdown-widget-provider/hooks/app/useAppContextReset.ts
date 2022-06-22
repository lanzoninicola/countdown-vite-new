import { useContextSelector } from "use-context-selector";
import COUNTDOWN_WIDGET_INITIAL_STATE from "../../constants/initial-state";
import { CountdownWidgetContext } from "../../context/countdown-widget-context";

export default function useAppContextReset() {
  const setCurrentCountdown = useContextSelector(
    CountdownWidgetContext,
    (state) => state.setCurrentCountdown
  );

  const setIsEditorMode = useContextSelector(
    CountdownWidgetContext,
    (state) => state.setIsEditorMode
  );

  const setTimerExpired = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.setTimerExpired
  );

  const resetState = () => {
    const { currentCountdown, isEditorMode, timerExpired } =
      COUNTDOWN_WIDGET_INITIAL_STATE;

    setCurrentCountdown(currentCountdown);
    setIsEditorMode(isEditorMode);
    setTimerExpired(timerExpired);
  };

  return {
    resetState,
  };
}
