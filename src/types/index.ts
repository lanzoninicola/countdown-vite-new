import { CountdownWidgetSettingsStateData } from "../countdown-widget-provider/types";
import { CountdownWidgetThemeStateData } from "../countdown-widget-theme-provider/types";

export type EditorSettings = CountdownWidgetThemeStateData &
  CountdownWidgetSettingsStateData;
