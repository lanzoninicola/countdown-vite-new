import { useContextSelector } from "use-context-selector";
import { CountdownTimerContext } from "../countdow-timer-context";

export default function useTitleSelector() {
  const titleText = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.titleText
  );

  const titleFontFamily = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.titleFontFamily
  );

  const titleFontSize = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.titleFontSize
  );

  const setTitleFontSize = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.setTitleFontSize
  );

  const titleFontColor = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.titleFontColor
  );

  console.log(titleFontSize);

  return {
    titleText,
    titleFontFamily,
    titleFontSize,
    setTitleFontSize,
    titleFontColor,
  };
}
