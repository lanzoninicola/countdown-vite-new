import { ThemeTimerContextData } from "./timer";
import TitleContextData from "./title";

export type CountdownThemeContextData = CountdownThemeStateData &
  CountdownThemeStateSetter;

/**
 * This describes the shape of data coming from the Editor related to the theme customization.
 * This is used in the Editor component to maintain syncrhronized between them.
 */
export interface CountdownThemeStateData {
  /** All the properties related to the customization of title */
  title: TitleContextData;
  /** All the properties related to the customization of timer */
  timer: ThemeTimerContextData;
}

/** This inteface is shared with the Editor */
export interface CountdownThemeStateSetter {
  setTitle: (title: TitleContextData) => void;
  setTimer: (timer: ThemeTimerContextData) => void;
}
