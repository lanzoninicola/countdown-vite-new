import { CountdownWidgetStateData } from "../types";

// TODO: Review the state structure with this subgroup: app / settings / theme

const COUNTDOWN_WIDGET_INITIAL_STATE: CountdownWidgetStateData = {
  currentCountdown: null,
  timerExpired: false,
  targetDate: "2022-12-31T23:00",
  targetTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
};

export default COUNTDOWN_WIDGET_INITIAL_STATE;
