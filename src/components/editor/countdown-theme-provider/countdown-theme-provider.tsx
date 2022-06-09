import { useState } from "react";
import { CountdownThemeContext } from "./context/countdown-theme-context";
import { CountdownThemeStateData } from "./types";

const initState: CountdownThemeStateData = {
  title: {
    text: "Countdown to New Year",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 24,
    fontColor: "#000000",
  },
  timer: {
    unitsShown: ["dd", "hh", "mm", "ss"],
    digitFontFamily: "Inter",
    digitFontWeight: "400",
    digitFontSize: 48,
    digitFontColor: "#000000",
    lastDigitColor: "#e10b0b",
  },
};

interface CountdownThemeProviderProps {
  children: React.ReactNode;
  theme: CountdownThemeStateData | undefined;
}

// TODO: set the editor setting for the other properties
export function CountdownThemeProvider({
  children,
  theme,
}: CountdownThemeProviderProps) {
  const [title, setTitle] = useState(theme?.title || initState.title);
  const [timer, setTimer] = useState(theme?.timer || initState.timer);

  return (
    <CountdownThemeContext.Provider
      value={{
        title,
        setTitle,
        timer,
        setTimer,
      }}
    >
      {children}
    </CountdownThemeContext.Provider>
  );
}
