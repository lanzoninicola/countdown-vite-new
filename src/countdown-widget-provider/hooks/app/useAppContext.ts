import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";

import { CountdownWidgetContext } from "../../context/countdown-widget-context";

export default function useAppContext() {
  const currentCountdown = useContextSelector(
    CountdownWidgetContext,
    (state) => state.currentCountdown
  );

  const setCurrentCountdown = useContextSelector(
    CountdownWidgetContext,
    (state) => state.setCurrentCountdown
  );

  const isEditorMode = useContextSelector(
    CountdownWidgetContext,
    (state) => state.isEditorMode
  );

  const setIsEditorMode = useContextSelector(
    CountdownWidgetContext,
    (state) => state.setIsEditorMode
  );

  const timerExpired = useContextSelector(
    CountdownWidgetContext,
    (state) => state.timerExpired
  );

  const setTimerExpired = useContextSelector(
    CountdownWidgetContext,
    (state) => state.setTimerExpired
  );

  useEffect(() => {
    if (currentCountdown === undefined) {
      console.error(
        "useAppContext hook must be used within a CountdownWidgetProvider"
      );
    }
  }, [currentCountdown]);

  return {
    currentCountdown,
    setCurrentCountdown,
    isEditorMode,
    setIsEditorMode,
    timerExpired,
    setTimerExpired,
  };
}
