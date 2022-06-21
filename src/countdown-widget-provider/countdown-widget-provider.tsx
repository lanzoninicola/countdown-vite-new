import { useState } from "react";
import { Countdown } from "../countdown-widget/types";
import { CountdownWidgetContext } from "./context/countdown-widget-context";
import {
  CountdownWidgetSettingsStateData,
  CountdownWidgetStateData,
} from "./types";

const initState: CountdownWidgetStateData = {
  currentCountdown: null,
  timerExpired: false,
  targetDate: "2022-12-31T23:00",
  targetTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
};

interface CountdownWidgetProviderProps {
  children: React.ReactNode;
  settings: CountdownWidgetSettingsStateData | undefined;
  current?: Countdown | Countdown["id"] | null;
}

/**
 * This provides the state of the countdown widget that contains the following informations:
 *  1. the basic settings of the countdown widget (target date, timezone). Data are provided by calling the REST API.
 *  2. the current countdown value is provided in different ways depending on the context.:
 *
 *     *** WHEN WORKING WITH THE EDITOR ***
 *    - it is the countdown that is currently being edited.
 *    - it is updated when the user choose a countdown to edit from the list of countdowns.
 *
 *    *** WHEN WORKING WITH THE COUNTDOWN WIDGET ***
 *    - it is the countdown that is currently being displayed, isolated on the front-end pages.
 *    - it is provided by the [data-id] attribute when is rendered to the DOM when the user add the shortcode with the id attribute in the page.
 *
 * @param settings - the basic settings of the countdown widget
 * @param current  - the current countdown is currently being edited/displayed
 *
 * @returns
 */
export default function CountdownWidgetProvider({
  children,
  settings,
  current,
}: CountdownWidgetProviderProps) {
  const [currentCountdown, setCurrentCountdown] = useState<
    Countdown | Countdown["id"] | null
  >(current || initState.currentCountdown);
  const [timerExpired, setTimerExpired] = useState(initState.timerExpired);
  const [targetDate, setTargetDate] = useState(
    settings?.targetDate || initState.targetDate
  );
  const [targetTimezone, setTargetTimezone] = useState(
    settings?.targetTimezone || initState.targetTimezone
  );

  return (
    <CountdownWidgetContext.Provider
      value={{
        currentCountdown,
        setCurrentCountdown,
        timerExpired,
        setTimerExpired,
        targetDate,
        setTargetDate,
        targetTimezone,
        setTargetTimezone,
      }}
    >
      {children}
    </CountdownWidgetContext.Provider>
  );
}
