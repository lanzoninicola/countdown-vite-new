import { useContextSelector } from "use-context-selector";
import { CountdownTimerContext } from "../context/countdown-timer-context";

export default function useTimerSelector() {
  const timer = useContextSelector(CountdownTimerContext, (ctx) => ctx?.timer);

  const unitsShown = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.timer.unitsShown
  );

  const digitFontFamily = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.timer.digitFontFamily
  );

  const digitFontWeight = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.timer.digitFontWeight
  );

  const digitFontSize = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.timer.digitFontSize
  );

  const digitFontColor = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.timer.digitFontColor
  );

  const lastDigitColor = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.timer.lastDigitColor
  );

  const setTimer = useContextSelector(
    CountdownTimerContext,
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
