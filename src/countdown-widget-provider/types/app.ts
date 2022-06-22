import { Countdown } from "../../countdown-widget/types";
import { SettingsStateData, SettingsStateSetter } from "./settings";

/**
 * This is the shape of the data used for the logic of app.
 */
export interface AppStateData extends SettingsStateData {
  /** The current countdown rendered to the DOM by data-id attribute */
  currentCountdown: Countdown["id"] | null;
  /** Flag that tell us if the timer is expired */
  timerExpired: boolean;
  /** Flag that tell us if the app run the countdown editor */
  isEditorMode: boolean;
}

export interface AppStateSetter extends SettingsStateSetter {
  setCurrentCountdown: (countdown: Countdown["id"] | null) => void;
  setTimerExpired: (timerExpired: boolean) => void;
  setIsEditorMode: (isEditorMode: boolean) => void;
}
