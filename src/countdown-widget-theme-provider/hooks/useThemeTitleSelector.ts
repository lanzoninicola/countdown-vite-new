import { useContextSelector } from "use-context-selector";

import { withUnit } from "../../countdown-widget-typography/countdown-widget-typography";
import { CountdownWidgetThemeContext } from "../context/countdown-theme-context";
import { ChackraUIResponsiveValuesWithUnit } from "../types/responsive";
import useCurrentTokenSelector from "./useCurrentTokenSelector";

/**
 * Hook that let works with the single item of the "Title" state.
 */
export default function useThemeTitleSelector() {
  const { currentToken } = useCurrentTokenSelector();

  const title = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.title
  );

  const text = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.title.text
  );

  const fontFamily = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.title.fontFamily
  );

  const fontWeight = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.title.fontWeight
  );

  const contextFontSize = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.title.fontSize
  );

  const fontSize: ChackraUIResponsiveValuesWithUnit =
    Object.values(contextFontSize);

  const fontColor = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.title.fontColor
  );

  const setTitle = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.setTitle
  );

  function setText(text: string) {
    setTitle({ ...title, text });
  }

  function setFontFamily(fontFamily: string) {
    setTitle({ ...title, fontFamily });
  }

  function setFontWeight(fontWeight: string) {
    setTitle({ ...title, fontWeight });
  }

  function setFontSize(size: number) {
    const nextState = { ...title, contextFontSize };

    nextState.fontSize[currentToken] = withUnit(size);
    setTitle(nextState);
  }

  function setFontColor(fontColor: string) {
    setTitle({ ...title, fontColor });
  }

  return {
    text,
    fontFamily,
    fontWeight,
    fontSize,
    fontColor,
    setText,
    setFontFamily,
    setFontWeight,
    setFontSize,
    setFontColor,
  };
}
