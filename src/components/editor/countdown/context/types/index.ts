import {
  PropertyEditorSettingsStateData,
  PropertyEditorSettingsStateSetter,
} from "../../../types";

/** Extended the interfaces let me syncronize the shape between two packages: the countdown and the property-editor */

export interface CountdownTimerStateData
  extends PropertyEditorSettingsStateData {
  /** Flag that tell us if the timer is expired */
  timerExpired: boolean;
}

export interface CountdownTimerStateSetter
  extends PropertyEditorSettingsStateSetter {
  setTimerExpired: (timerExpired: boolean) => void;
}

export type CountdownTimerContextData = CountdownTimerStateData &
  CountdownTimerStateSetter;
