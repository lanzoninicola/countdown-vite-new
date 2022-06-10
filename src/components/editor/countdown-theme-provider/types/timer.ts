export interface ThemeTimerContextData {
  /** The unit visible in the timer ['dd', 'hh', 'mm', 'ss'] */
  unitsShown: string[];
  /** Show the separator */
  showSeparator: boolean;
  /** The separator character */
  separatorChar: string;
  /** The font family of the digit text */
  digitFontFamily: string;
  /** The font weight of the digit text */
  digitFontWeight: string;
  /** The font size of the digit text */
  digitFontSize: number;
  /** The font color of the digit text */
  digitFontColor: string;
  /** The font family of the last unit of timer text */
  lastDigitColor: string;
  /** The font family of the digit label */
  labelFontFamily: string;
  /** The font weight of the digit label */
  labelFontWeight: string;
  /** The font size of the digit label */
  labelFontSize: number;
  /** The font color of the digit label */
  labelFontColor: string;
}
