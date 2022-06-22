import { useState } from "react";

import COUNTDOWN_WIDGET_THEME_INITIAL_STATE from "./constants/initial-state";
import { CountdownWidgetThemeContext } from "./context/countdown-theme-context";

interface CountdownWidgetThemeProviderProps {
  children: React.ReactNode;
}

// TODO: set the editor setting for the other properties
export default function CountdownWidgetThemeProvider({
  children,
}: CountdownWidgetThemeProviderProps) {
  const [currentToken, setCurrentToken] = useState(
    COUNTDOWN_WIDGET_THEME_INITIAL_STATE.currentToken
  );
  const [title, setTitle] = useState(
    COUNTDOWN_WIDGET_THEME_INITIAL_STATE.title
  );
  const [timer, setTimer] = useState(
    COUNTDOWN_WIDGET_THEME_INITIAL_STATE.timer
  );

  return (
    <CountdownWidgetThemeContext.Provider
      value={{
        currentToken,
        setCurrentToken,
        title,
        setTitle,
        timer,
        setTimer,
      }}
    >
      {children}
    </CountdownWidgetThemeContext.Provider>
  );
}
