import { useContextSelector } from "use-context-selector";
import { PropertyEditorContext } from "../property-editor-context";

export default function useTitleStyleSelector() {
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

  const setTitleFontSize = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.setTitleFontSize
  );

  const titleFontColor = useContextSelector(
    PropertyEditorContext,
    (ctx) => ctx?.titleFontColor
  );

  return {
    titleText,
    titleFontFamily,
    titleFontSize,
    setTitleFontSize,
    titleFontColor,
  };
}
