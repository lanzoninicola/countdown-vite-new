import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";

import { CountdownWidgetThemeContext } from "../context/countdown-theme-context";

/**
 *
 * Hook that let works with the macro-groups of Theme state.
 *
 */
export default function useThemeSelector() {
  const currentToken = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.currentToken
  );

  const setCurrentToken = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.setCurrentToken
  );

  const timer = useContextSelector(
    CountdownWidgetThemeContext,
    (state) => state.timer
  );

  const title = useContextSelector(
    CountdownWidgetThemeContext,
    (state) => state.title
  );

  const setTimer = useContextSelector(
    CountdownWidgetThemeContext,
    (state) => state.setTimer
  );

  const setTitle = useContextSelector(
    CountdownWidgetThemeContext,
    (state) => state.setTitle
  );

  useEffect(() => {
    if (timer === undefined || title === undefined) {
      console.error(
        "useThemeSelector hook must be used within a CountdownWidgetProvider"
      );
    }
  }, [timer]);

  return {
    currentToken,
    setCurrentToken,
    timer,
    setTimer,
    title,
    setTitle,
  };
}