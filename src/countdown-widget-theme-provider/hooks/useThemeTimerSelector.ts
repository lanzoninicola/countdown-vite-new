import { useContextSelector } from "use-context-selector";
import { withUnit } from "../../countdown-widget-typography/countdown-widget-typography";

import { CountdownWidgetThemeContext } from "../context/countdown-theme-context";
import { ChackraUIResponsiveValuesWithUnit } from "../types/responsive";
import useCurrentTokenSelector from "./useCurrentTokenSelector";

/**
 * Hook that let works with the single item of the "Timer" state.
 */
export default function useThemeTimerSelector() {
  const { currentToken } = useCurrentTokenSelector();
  const timer = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer
  );

  const unitsShown = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.unitsShown
  );

  const showSeparator = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.showSeparator
  );

  const separatorChar = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.separatorChar
  );

  const digitFontFamily = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.digitFontFamily
  );

  const digitFontWeight = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.digitFontWeight
  );

  const digitFontSize = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.digitFontSize
  );

  const digitFontSizeChackraUI: ChackraUIResponsiveValuesWithUnit =
    Object.values(digitFontSize);

  const digitFontColor = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.digitFontColor
  );

  const lastUnitColor = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.lastUnitColor
  );

  const labelFontFamily = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.labelFontFamily
  );

  const labelFontWeight = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.labelFontWeight
  );

  const labelFontSize = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.labelFontSize
  );

  const labelFontSizeChackraUI: ChackraUIResponsiveValuesWithUnit =
    Object.values(labelFontSize);

  const labelFontColor = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.timer.labelFontColor
  );

  const setTimer = useContextSelector(
    CountdownWidgetThemeContext,
    (ctx) => ctx?.setTimer
  );

  function setUnitsShown(unitsShown: string[]) {
    setTimer({ ...timer, unitsShown });
  }

  function setShowSeparator(showSeparator: boolean) {
    setTimer({ ...timer, showSeparator });
  }

  function setSeparatorChar(separatorChar: string) {
    setTimer({ ...timer, separatorChar });
  }

  function setDigitFontFamily(digitFontFamily: string) {
    setTimer({ ...timer, digitFontFamily });
  }

  function setDigitFontWeight(digitFontWeight: string) {
    setTimer({ ...timer, digitFontWeight });
  }

  function setDigitFontSize(size: number) {
    const nextState = { ...timer, digitFontSize };

    nextState.digitFontSize[currentToken] = withUnit(size);
    setTimer(nextState);
  }

  function setDigitFontColor(digitFontColor: string) {
    setTimer({ ...timer, digitFontColor });
  }

  function setLastUnitColor(lastUnitColor: string) {
    setTimer({ ...timer, lastUnitColor });
  }

  function setLabelFontFamily(labelFontFamily: string) {
    setTimer({ ...timer, labelFontFamily });
  }

  function setLabelFontWeight(labelFontWeight: string) {
    setTimer({ ...timer, labelFontWeight });
  }

  function setLabelFontSize(size: number) {
    const nextState = { ...timer, labelFontSize };

    nextState.labelFontSize[currentToken] = withUnit(size);
    setTimer(nextState);
  }

  function setLabelFontColor(labelFontColor: string) {
    setTimer({ ...timer, labelFontColor });
  }

  return {
    unitsShown,
    showSeparator,
    separatorChar,
    digitFontFamily,
    digitFontWeight,
    digitFontSize,
    digitFontSizeChackraUI,
    digitFontColor,
    lastUnitColor,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelFontSizeChackraUI,
    labelFontColor,
    setUnitsShown,
    setShowSeparator,
    setSeparatorChar,
    setDigitFontFamily,
    setDigitFontWeight,
    setDigitFontSize,
    setDigitFontColor,
    setLastUnitColor,
    setLabelFontFamily,
    setLabelFontWeight,
    setLabelFontSize,
    setLabelFontColor,
  };
}
