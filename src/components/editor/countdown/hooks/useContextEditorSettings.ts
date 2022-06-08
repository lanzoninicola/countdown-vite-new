import usePropertyEditorContextDataSelector from "../../property-editor/context/hooks/usePropertyEditorContextDataSelector";

export default function useContextEditorSettings() {
  const editorSettings = usePropertyEditorContextDataSelector();

  return {
    editorSettings: editorSettings,
    isLoading: undefined,
    isError: undefined,
  };
}
