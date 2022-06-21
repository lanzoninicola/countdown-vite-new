import { CountdownWidgetSettingsStateData } from "../../countdown-widget-provider/types";
import { CountdownWidgetThemeStateData } from "../../countdown-widget-theme-provider/types";

export interface APIResponse<T = undefined> {
  code: "error" | "success" | "warning";
  message: string;
  data: { status: number; payload?: T };
}

export type EditorSettingsPayload = CountdownWidgetThemeStateData &
  CountdownWidgetSettingsStateData;
