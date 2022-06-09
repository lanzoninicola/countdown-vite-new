import { TimerContextData } from "./timer";
import TitleContextData from "../../countdown-theme-provider/types/title";

export type CountdownTimerContextData = CountdownTimerStateData &
  CountdownTimerStateSetter;

export interface CountdownTimerStateData extends CountdownTimerEditorStateData {
  /** Flag that tell us if the timer is expired */
  timerExpired: boolean;
}

export interface CountdownTimerStateSetter
  extends CountdownTimerEditorStateSetter {
  setTimerExpired: (timerExpired: boolean) => void;
}

/** This inteface is shared with the Editor (Properties and Themes) */
export interface CountdownTimerEditorStateData {
  /** The date in the future, it is used for the timer calculation */
  /** format: 'YYYY-MM-DDTHH:MM' */
  targetDate: string;
  /** The timezone to which the target date refers  */
  userTimezone: string;
  /** All the properties related to the customization of title */
  title: TitleContextData;
  /** All the properties related to the customization of timer */
  timer: TimerContextData;
}

/** This inteface is shared with the Editor (Properties and Themes) */
export interface CountdownTimerEditorStateSetter {
  setTargetDate: (date: string) => void;
  setTargetTimezone: (timezone: string) => void;
  setTitle: (title: TitleContextData) => void;
  setTimer: (timer: TimerContextData) => void;
}
