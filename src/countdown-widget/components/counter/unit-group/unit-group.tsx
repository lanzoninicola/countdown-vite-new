import useThemeTimer from "../../../../countdown-provider/hooks/theme/useThemeTimer";
import { withUnit } from "../../../../countdown-widget-typography/countdown-widget-typography";
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
        gridArea={"digit"}
        value={value}
        isDanger={isDanger}
        isLastDigit={isLastDigit}
        theme={digitTheme}
      />
      <UnitLabel
        gridArea={"label"}
        label={label}
        isLastDigit={isLastDigit}
        theme={labelTheme}
      />
      {!isLastDigit && separatorTheme.showSeparator && (
        <UnitSeparator gridArea={"separator"} theme={digitTheme}>
          {separatorTheme.separatorChar}
        </UnitSeparator>
      )}
    </UnitGroupWrapper>
  );
}
