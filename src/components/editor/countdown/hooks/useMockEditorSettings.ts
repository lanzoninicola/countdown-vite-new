import useSWR from "swr";
import { PropertyEditorSettingsStateData } from "../../types";
import mockData from "../mock-data/data.json";

interface useMockEditorSettings {
  editorSettings: PropertyEditorSettingsStateData | undefined;
  isLoading: boolean;
  isError: any;
}

/**
 * Hook used to returns the editor settings from a local json file.
 * This is used in development mode to load the mock data.
 */
export default function useMockEditorSettings(): useMockEditorSettings {
  const fetcher = async () => mockData;
  let { data, error } = useSWR<PropertyEditorSettingsStateData | undefined>(
    "editor-mockData",
    fetcher
  );

  return {
    editorSettings: data,
    isLoading: !error && !data,
    isError: error,
  };
}
