import { Countdown } from "../../../types";

export type AppContextData = AppStateData & AppStateSetter;

export interface AppStateData {
  currentCountdown: Countdown | null;
}

export interface AppStateSetter {
  setCurrentCountdown: (countdown: Countdown) => void;
}
