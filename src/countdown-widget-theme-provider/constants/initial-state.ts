// TODO: define the props in PRO licensing e verify if they are used. But HOW?. Limit client hacking.

import { CountdownWidgetThemeStateData } from "../types";

const COUNTDOWN_WIDGET_THEME_INITIAL_STATE: CountdownWidgetThemeStateData = {
  currentToken: "lg",
  title: {
    text: "Countdown to New Year",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
    },
    fontColor: "#000000",
  },
  timer: {
    unitsShown: ["dd", "hh", "mm", "ss"],
    showSeparator: true,
    separatorChar: ":",
    digitFontFamily: "Inter",
    digitFontWeight: "400",
    digitFontSize: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
    },
    digitFontColor: "#000000",
    lastUnitColor: "#e10b0b",
    labelFontFamily: "Inter",
    labelFontWeight: "400",
    labelFontSize: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
    },
    labelFontColor: "#000000",
  },
};

export default COUNTDOWN_WIDGET_THEME_INITIAL_STATE;
