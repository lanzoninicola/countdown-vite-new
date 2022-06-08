import { useContextSelector } from "use-context-selector";
import { PropertyEditorContext } from "../property-editor-context";

export default function usePropertyEditorContextDataSelector() {
  const targetDate = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.targetDate
  );

  const userTimezone = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.userTimezone
  );

  const titleText = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.titleText
  );

  const titleFontFamily = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.titleFontFamily
  );

  const titleFontSize = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.titleFontSize
  );

  const titleFontColor = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.titleFontColor
  );

  const unitsShown = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.unitsShown
  );

  const digitFontFamily = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.digitFontFamily
  );
  const digitFontSize = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.digitFontSize
  );
  const digitFontColor = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.digitFontColor
  );
  const lastDigitColor = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.lastDigitColor
  );

  return {
    targetDate,
    userTimezone,
    titleText,
    titleFontFamily,
    titleFontSize,
    titleFontColor,
    unitsShown,
    digitFontFamily,
    digitFontSize,
    digitFontColor,
    lastDigitColor,
  };
}
