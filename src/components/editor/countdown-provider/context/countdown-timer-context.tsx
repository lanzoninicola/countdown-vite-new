import { createContext } from "use-context-selector";
import { CountdownTimerContextData } from "../types";

export const CountdownTimerContext = createContext<CountdownTimerContextData>(
  {} as CountdownTimerContextData
);
