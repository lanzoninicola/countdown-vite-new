import { Tokens } from "./responsive";
import { ThemeTimerContextData } from "./timer";
import ThemeTitleContextData from "./title";

export type CountdownWidgetThemeContextData = CountdownWidgetThemeStateData &
  CountdownWidgetThemeStateSetter;

/**
 * This describes the shape of data coming from the Editor related to the theme customization.
 * This is used in the Editor component to maintain syncrhronized between them.
 */
export interface CountdownWidgetThemeStateData {
  /** The timer related to the theme customization */
  currentToken: Tokens;
  /** All the properties related to the customization of title */
  title: ThemeTitleContextData;
  /** All the properties related to the customization of timer */
  timer: ThemeTimerContextData;
}

/** This inteface is shared with the Editor */
export interface CountdownWidgetThemeStateSetter {
  /** Set the current token */
  setCurrentToken: (token: Tokens) => void;
  /** Set the title properties */
  setTitle: (title: ThemeTitleContextData) => void;
  /** Set the timer properties */
  setTimer: (timer: ThemeTimerContextData) => void;
}
