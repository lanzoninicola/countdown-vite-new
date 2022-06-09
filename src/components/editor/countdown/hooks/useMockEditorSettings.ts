import useSWR from "swr";
import { CountdownTimerEditorStateData } from "../../countdown-provider/types";
import mockData from "../mock-data/data.json";

interface useMockEditorSettings {
  editorSettings: CountdownTimerEditorStateData | undefined;
  isLoading: boolean;
  isError: any;
}

/**
 * Hook used to returns the editor settings from a local json file.
 * This is used in development mode to load the mock data.
 */
export default function useMockEditorSettings(): useMockEditorSettings {
  const fetcher = async () => mockData;
  let { data, error } = useSWR<CountdownTimerEditorStateData | undefined>(
    "editor-mockData",
    fetcher
  );

  return {
    editorSettings: data,
    isLoading: !error && !data,
    isError: error,
  };
}
