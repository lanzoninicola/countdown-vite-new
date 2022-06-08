import { useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { PropertyEditorSettingsStateData } from "../../types";

import { CountdownTimerContextData, CountdownTimerStateData } from "./types";

const initState: CountdownTimerStateData = {
  timerExpired: false,
  targetDate: "2022-11-09T01:00",
  userTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
  titleText: "Countdown to New Year",
  titleFontFamily: "Inter",
  titleFontSize: 24,
  titleFontColor: "#000000",
  unitsShown: ["dd", "hh", "mm", "ss"],
  digitFontFamily: "Inter",
  digitFontSize: 48,
  digitFontColor: "#000000",
  lastDigitColor: "#e10b0b",
};

export const CountdownTimerContext = createContext<CountdownTimerContextData>(
  {} as CountdownTimerContextData
);

interface CountdownTimerContextProps {
  children: React.ReactNode;
  editorSettings: PropertyEditorSettingsStateData | undefined;
}

// TODO: set the editor setting for the other properties
export function CountdownTimerProvider({
  children,
  editorSettings,
}: CountdownTimerContextProps) {
  const [timerExpired, setTimerExpired] = useState(initState.timerExpired);
  const [targetDate, setTargetDate] = useState(
    editorSettings?.targetDate || initState.targetDate
  );
  const [userTimezone, setTargetTimezone] = useState(initState.userTimezone);
  const [titleText, setTitleText] = useState(initState.titleText);
  const [titleFontFamily, setTitleFontFamily] = useState(
    initState.titleFontFamily
  );
  const [titleFontSize, setTitleFontSize] = useState(
    editorSettings?.titleFontSize || initState.titleFontSize
  );
  const [titleFontColor, setTitleFontColor] = useState(
    initState.titleFontColor
  );
  const [unitsShown, setUnitsShown] = useState(initState.unitsShown);
  const [digitFontFamily, setDigitFontFamily] = useState(
    initState.digitFontFamily
  );
  const [digitFontSize, setDigitFontSize] = useState(initState.digitFontSize);
  const [digitFontColor, setDigitFontColor] = useState(
    initState.digitFontColor
  );
  const [lastDigitColor, setLastDigitColor] = useState(
    initState.lastDigitColor
  );

  useEffect(() => {
    console.log("CountdownTimerProvider");
  }, [editorSettings]);

  return (
    <CountdownTimerContext.Provider
      value={{
        timerExpired,
        setTimerExpired,
        targetDate,
        setTargetDate,
        userTimezone,
        setTargetTimezone,
        titleText,
        setTitleText,
        titleFontFamily,
        setTitleFontFamily,
        titleFontSize,
        setTitleFontSize,
        titleFontColor,
        setTitleFontColor,
        unitsShown,
        setUnitsShown,
        digitFontFamily,
        setDigitFontFamily,
        digitFontSize,
        setDigitFontSize,
        digitFontColor,
        setDigitFontColor,
        lastDigitColor,
        setLastDigitColor,
      }}
    >
      {children}
    </CountdownTimerContext.Provider>
  );
}
