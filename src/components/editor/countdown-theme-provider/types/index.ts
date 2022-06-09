import { TimerContextData } from "./timer";
import TitleContextData from "./title";

export type CountdownThemeContextData = CountdownThemeStateData &
  CountdownThemeStateSetter;

/** This inteface is shared with the Editor */
export interface CountdownThemeStateData {
  /** All the properties related to the customization of title */
  title: TitleContextData;
  /** All the properties related to the customization of timer */
  timer: TimerContextData;
}

/** This inteface is shared with the Editor */
export interface CountdownThemeStateSetter {
  setTitle: (title: TitleContextData) => void;
  setTimer: (timer: TimerContextData) => void;
}
