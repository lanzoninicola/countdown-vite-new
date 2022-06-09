import { useState } from "react";
import { CountdownContext } from "./context/countdown-context";
import { CountdownSettingsStateData, CountdownStateData } from "./types";

const initState: CountdownStateData = {
  timerExpired: false,
  targetDate: "2022-11-09T01:00",
  userTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
};

interface CountdownProviderProps {
  children: React.ReactNode;
  settings: CountdownSettingsStateData | undefined;
}

// TODO: set the editor setting for the other properties
export function CountdownProvider({
  children,
  settings,
}: CountdownProviderProps) {
  const [timerExpired, setTimerExpired] = useState(initState.timerExpired);
  const [targetDate, setTargetDate] = useState(
    settings?.targetDate || initState.targetDate
  );
  const [userTimezone, setTargetTimezone] = useState(
    settings?.userTimezone || initState.userTimezone
  );

  return (
    <CountdownContext.Provider
      value={{
        timerExpired,
        setTimerExpired,
        targetDate,
        setTargetDate,
        userTimezone,
        setTargetTimezone,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
