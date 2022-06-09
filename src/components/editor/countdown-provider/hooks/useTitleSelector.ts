import { useContextSelector } from "use-context-selector";
import { CountdownTimerContext } from "../context/countdown-timer-context";

export default function useTitleSelector() {
  const title = useContextSelector(CountdownTimerContext, (ctx) => ctx?.title);

  const text = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.title.text
  );

  const fontFamily = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.title.fontFamily
  );

  const fontWeight = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.title.fontWeight
  );

  const fontSize = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.title.fontSize
  );

  const fontColor = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.title.fontColor
  );

  const setTitle = useContextSelector(
    CountdownTimerContext,
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

  function setFontSize(fontSize: number) {
    setTitle({ ...title, fontSize });
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
