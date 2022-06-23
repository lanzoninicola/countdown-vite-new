import { SettingsStateData } from "../../countdown-provider/types";
import { ThemeStateData } from "../../countdown-provider/types/theme";

export interface APIResponse<T> {
  code: "error" | "success" | "warning";
  message: string;
  data: { status: number; payload?: T };
}

export interface EditorSettingsPayload {
  /** The JSON stringified of all settings saved a database */
  settings: string;
}

export type EditorSettings = SettingsStateData &
  Omit<ThemeStateData, "currentToken">;
