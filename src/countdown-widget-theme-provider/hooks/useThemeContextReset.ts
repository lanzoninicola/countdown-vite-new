import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import COUNTDOWN_WIDGET_THEME_INITIAL_STATE from "../constants/initial-state";
import { CountdownWidgetThemeContext } from "../context/countdown-theme-context";

/**
 *
 * Hook that let works with the macro-groups of Theme state.
 *
 */
export default function useThemeContextReset() {
  const setCurrentToken = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.setCurrentToken
  );

  const setTimer = useContextSelector(
    CountdownWidgetThemeContext,
    (state) => state.setTimer
  );

  const setTitle = useContextSelector(
    CountdownWidgetThemeContext,
    (state) => state.setTitle
  );

  const resetState = () => {
    const { currentToken, timer, title } = COUNTDOWN_WIDGET_THEME_INITIAL_STATE;

    setCurrentToken(currentToken);
    setTimer(timer);
    setTitle(title);
  };

  useEffect(() => {
    if (setCurrentToken === undefined) {
      console.error(
        "useThemeReset hook must be used within a CountdownWidgetProvider"
      );
    }
  }, [setCurrentToken]);

  return {
    resetState,
  };
}
