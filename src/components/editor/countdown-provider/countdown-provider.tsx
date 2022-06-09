import { useState } from "react";
import { CountdownTimerContext } from "./context/countdown-timer-context";
import {
  CountdownTimerEditorStateData,
  CountdownTimerStateData,
} from "./types";

const initState: CountdownTimerStateData = {
  timerExpired: false,
  targetDate: "2022-11-09T01:00",
  userTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
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

interface CountdownTimerProviderProps {
  children: React.ReactNode;
  editorSettings: CountdownTimerEditorStateData | undefined;
}

// TODO: set the editor setting for the other properties
export function CountdownTimerProvider({
  children,
  editorSettings,
}: CountdownTimerProviderProps) {
  const [timerExpired, setTimerExpired] = useState(initState.timerExpired);
  const [targetDate, setTargetDate] = useState(
    editorSettings?.targetDate || initState.targetDate
  );
  const [userTimezone, setTargetTimezone] = useState(
    editorSettings?.userTimezone || initState.userTimezone
  );
  const [title, setTitle] = useState(editorSettings?.title || initState.title);
  const [timer, setTimer] = useState(editorSettings?.timer || initState.timer);

  return (
    <CountdownTimerContext.Provider
      value={{
        timerExpired,
        setTimerExpired,
        targetDate,
        setTargetDate,
        userTimezone,
        setTargetTimezone,
        title,
        setTitle,
        timer,
        setTimer,
      }}
    >
      {children}
    </CountdownTimerContext.Provider>
  );
}
