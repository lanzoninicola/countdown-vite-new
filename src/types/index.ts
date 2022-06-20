import { CountdownSettingsStateData } from "../components/editor/countdown-provider/types";
import { CountdownThemeStateData } from "../components/editor/countdown-theme-provider/types";

export type EditorSettings = CountdownThemeStateData &
  CountdownSettingsStateData;
