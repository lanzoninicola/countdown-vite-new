import { useContextSelector } from "use-context-selector";
import { CountdownWidgetThemeContext } from "../context/countdown-theme-context";

/** This returns the current token ("sm", "md", "lg", "xl", "xxl") selected by the user in the editor */
export default function useCurrentTokenSelector() {
  const currentToken = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.currentToken
  );

  const setCurrentToken = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.setCurrentToken
  );

  return {
    currentToken,
    setCurrentToken,
  };
}
