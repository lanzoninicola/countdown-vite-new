import { AppStateData, AppStateSetter } from "./app";

/**
 * This describes the shape of the context data used in the components logic.
 * This is used to pass data between the components.
 *
 * This contains part of the information coming from the editor and other from the logic of components.
 */
export type CountdownWidgetContextData = AppStateData & AppStateSetter;
