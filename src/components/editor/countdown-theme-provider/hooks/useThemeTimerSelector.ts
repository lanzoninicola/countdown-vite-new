import { useContextSelector } from "use-context-selector";
import { CountdownThemeContext } from "../context/countdown-theme-context";

export default function useThemeTimerSelector() {
  const timer = useContextSelector(CountdownThemeContext, (ctx) => ctx?.timer);

  const unitsShown = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.unitsShown
  );

  const digitFontFamily = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.digitFontFamily
  );

  const digitFontWeight = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.digitFontWeight
  );

  const digitFontSize = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.digitFontSize
  );

  const digitFontColor = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.digitFontColor
  );

  const lastDigitColor = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.lastDigitColor
  );

  const setTimer = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.setTimer
  );

  function setUnitsShown(unitsShown: string[]) {
    setTimer({ ...timer, unitsShown });
  }

  function setDigitFontFamily(digitFontFamily: string) {
    setTimer({ ...timer, digitFontFamily });
  }

  function setDigitFontWeight(digitFontWeight: string) {
    setTimer({ ...timer, digitFontWeight });
  }

  function setDigitFontSize(digitFontSize: number) {
    setTimer({ ...timer, digitFontSize });
  }

  function setDigitFontColor(digitFontColor: string) {
    setTimer({ ...timer, digitFontColor });
  }

  function setLastDigitColor(lastDigitColor: string) {
    setTimer({ ...timer, lastDigitColor });
  }

  return {
    unitsShown,
    digitFontFamily,
    digitFontWeight,
    digitFontSize,
    digitFontColor,
    lastDigitColor,
    setUnitsShown,
    setDigitFontFamily,
    setDigitFontWeight,
    setDigitFontSize,
    setDigitFontColor,
    setLastDigitColor,
  };
}
