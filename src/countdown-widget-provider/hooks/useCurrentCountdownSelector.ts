import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { Countdown } from "../../countdown-widget/types";
import { CountdownWidgetContext } from "../context/countdown-widget-context";

interface UseCurrentCountdownSelector {
  currentCountdown: Countdown | Countdown["id"] | null;
  setCurrentCountdown: (countdown: Countdown | Countdown["id"] | null) => void;
}

export default function useCurrentCountdownSelector(): UseCurrentCountdownSelector {
  const currentCountdown = useContextSelector(
    CountdownWidgetContext,
    (state) => state.currentCountdown
  );

  const setCurrentCountdown = useContextSelector(
    CountdownWidgetContext,
    (state) => state.setCurrentCountdown
  );

  useEffect(() => {
    if (currentCountdown === undefined) {
      console.error(
        "useCurrentCountdownSelector hook must be used within a CountdownWidgetProvider"
      );
    }
  }, [currentCountdown]);

  return { currentCountdown, setCurrentCountdown };
}
