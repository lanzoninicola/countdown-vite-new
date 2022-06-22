import { CountdownWidgetSettingsStateData } from "../../countdown-widget-provider/types";
import { CountdownWidgetThemeStateData } from "../../countdown-widget-theme-provider/types";

export interface APIResponse<T> {
  code: "error" | "success" | "warning";
  message: string;
  data: { status: number; payload?: T };
}

export interface EditorSettingsPayload {
  /** The JSON stringified of all settings saved a database */
  settings: string;
}

export type EditorSettings = CountdownWidgetSettingsStateData &
  Omit<CountdownWidgetThemeStateData, "currentToken">;
