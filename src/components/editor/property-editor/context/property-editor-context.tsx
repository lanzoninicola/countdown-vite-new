import { useState } from "react";
import { createContext } from "use-context-selector";
import {
  PropertyEditorContextData,
  PropertyEditorSettingsStateData,
} from "../../types";

const initState: PropertyEditorSettingsStateData = {
  targetDate: "2022-11-09T01:00",
  userTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
  titleText: "Countdown to New Year",
  titleFontFamily: "Inter",
  titleFontSize: 16,
  titleFontColor: "#000000",
  unitsShown: ["dd", "hh", "mm", "ss"],
  digitFontFamily: "Inter",
  digitFontSize: 48,
  digitFontColor: "#000000",
  lastDigitColor: "#e10b0b",
};

export const PropertyEditorContext = createContext<PropertyEditorContextData>(
  {} as PropertyEditorContextData
);

interface PropertyEditorProviderProps {
  children: React.ReactNode;
}

export function PropertyEditorProvider({
  children,
}: PropertyEditorProviderProps) {
  const [targetDate, setTargetDate] = useState(initState.targetDate);
  const [userTimezone, setTargetTimezone] = useState(initState.userTimezone);
  const [titleText, setTitleText] = useState(initState.titleText);
  const [titleFontFamily, setTitleFontFamily] = useState(
    initState.titleFontFamily
  );
  const [titleFontSize, setTitleFontSize] = useState(initState.titleFontSize);
  const [titleFontColor, setTitleFontColor] = useState(
    initState.titleFontColor
  );
  const [unitsShown, setUnitsShown] = useState(initState.unitsShown);
  const [digitFontFamily, setDigitFontFamily] = useState(
    initState.digitFontFamily
  );
  const [digitFontSize, setDigitFontSize] = useState(initState.digitFontSize);
  const [digitFontColor, setDigitFontColor] = useState(
    initState.digitFontColor
  );
  const [lastDigitColor, setLastDigitColor] = useState(
    initState.lastDigitColor
  );

  return (
    <PropertyEditorContext.Provider
      value={{
        targetDate,
        setTargetDate,
        userTimezone,
        setTargetTimezone,
        titleText,
        setTitleText,
        titleFontFamily,
        setTitleFontFamily,
        titleFontSize,
        setTitleFontSize,
        titleFontColor,
        setTitleFontColor,
        unitsShown,
        setUnitsShown,
        digitFontFamily,
        setDigitFontFamily,
        digitFontSize,
        setDigitFontSize,
        digitFontColor,
        setDigitFontColor,
        lastDigitColor,
        setLastDigitColor,
      }}
    >
      {children}
    </PropertyEditorContext.Provider>
  );
}
