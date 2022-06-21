import { CountdownSettingsStateData } from "../countdown-provider/types";
import { CountdownThemeStateData } from "../countdown-theme-provider/types";

export type EditorSettings = CountdownThemeStateData &
  CountdownSettingsStateData;
