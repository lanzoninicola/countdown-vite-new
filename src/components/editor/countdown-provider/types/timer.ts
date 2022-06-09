export interface TimerContextData {
  /** The unit visible in the timer ['dd', 'hh', 'mm', 'ss'] */
  unitsShown: string[];
  /** The font family of the timer text */
  digitFontFamily: string;
  /** The font weight of the timer text */
  digitFontWeight: string;
  /** The font size of the timer text */
  digitFontSize: number;
  /** The font color of the timer text */
  digitFontColor: string;
  /** The font family of the last unit of timer text */
  lastDigitColor: string;
}
