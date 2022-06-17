import { useState } from "react";

import { Countdown } from "../../types";
import { AppContext } from "./context";
import { AppStateData } from "./types";

const initState: AppStateData = {
  currentCountdown: null,
};

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [currentCountdown, setCurrentCountdown] = useState<Countdown | null>(
    initState.currentCountdown
  );

  return (
    <AppContext.Provider
      value={{
        currentCountdown,
        setCurrentCountdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
