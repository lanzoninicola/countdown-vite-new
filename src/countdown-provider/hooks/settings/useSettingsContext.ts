import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";
import { SettingsContext } from "../../types/settings";

export default function useSettingsContext(): SettingsContext {
  const settingsContext = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings
  );

  const { targetDate, targetTimezone, setTargetDate, setTargetTimezone } =
    settingsContext;

  return {
    targetDate,
    setTargetDate,
    targetTimezone,
    setTargetTimezone,
  };
}
