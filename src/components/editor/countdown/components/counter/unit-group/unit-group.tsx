import useThemeTimer from "../../../../countdown-theme-provider/hooks/useThemeTimer";
import { StringOrNumber } from "../../../types";
import Digit from "./digit/digit";
import UnitGroupWrapper from "./unit-group-wrapper/unit-group-wrapper";
import UnitLabel from "./unit-label/unit-label";
import UnitSeparator from "./unit-separator/unit-separator";

interface UnitGroupProps {
  label: string;
  value: StringOrNumber;
  isDanger?: boolean;
  isLastDigit?: boolean;
}

export default function UnitGroup({
  label,
  value,
  isDanger,
  isLastDigit,
}: UnitGroupProps) {
  const digitTheme = useThemeTimer("unit-digit");
  const labelTheme = useThemeTimer("unit-label");
  const separatorTheme = useThemeTimer("unit-separator");

  return (
    <UnitGroupWrapper>
      <Digit
        value={value}
        isDanger={isDanger}
        isLastDigit={isLastDigit}
        gridArea={"digit"}
        theme={digitTheme}
      />
      <UnitLabel
        label={label}
        isLastDigit={isLastDigit}
        gridArea={"label"}
        theme={labelTheme}
      />
      {!isLastDigit && separatorTheme.showSeparator && (
        <UnitSeparator gridArea={"separator"}>
          {separatorTheme.separatorChar}
        </UnitSeparator>
      )}
    </UnitGroupWrapper>
  );
}
