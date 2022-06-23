import { SettingsStateData } from "../../countdown-provider/types";
import { ThemeStateData } from "../../countdown-provider/types/theme";

export interface APIResponse<T = undefined> {
  code: "error" | "success" | "warning";
  message: string;
  data: { status: number; payload?: T };
}

export type EditorSettingsPayload = ThemeStateData & SettingsStateData;
