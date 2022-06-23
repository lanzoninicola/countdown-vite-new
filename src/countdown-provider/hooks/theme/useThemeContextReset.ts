import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import THEME_INITIAL_STATE from "../../constants/theme/initial-state";
import { CountdownContext } from "../../context/countdown-context";

/**
 *
 * Hook that let works with the macro-groups of Theme state.
 *
 */
export default function useThemeContextReset() {
  const setTimer = useContextSelector(
    CountdownContext,
    (state) => state.theme.setTimer
  );

  const setTitle = useContextSelector(
    CountdownContext,
    (state) => state.theme.setTitle
  );

  const resetThemeContext = () => {
    const { timer, title } = THEME_INITIAL_STATE;

    setTimer(timer);
    setTitle(title);
  };

  useEffect(() => {
    if (setTimer === undefined) {
      console.error(
        "useThemeReset hook must be used within a CountdownProvider"
      );
    }
  }, [setTimer]);

  return {
    resetThemeContext,
  };
}
