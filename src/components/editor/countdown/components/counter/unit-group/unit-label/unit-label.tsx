import { Text, VStack } from "@chakra-ui/react";

import useThemeTimerSelector from "../../../../../countdown-theme-provider/hooks/useThemeTimerSelector";

interface UnitLabelProps {
  label: string;
  isDanger?: boolean;
  isLastDigit?: boolean;
}

export default function UnitLabel({ label, isLastDigit }: UnitLabelProps) {
  const {
    labelFontSize,
    labelFontFamily,
    labelFontWeight,
    labelFontColor,
    lastDigitColor,
  } = useThemeTimerSelector();

  return (
    <Text
      as="span"
      style={{
        fontSize: labelFontSize,
        fontFamily: labelFontFamily,
        fontWeight: labelFontWeight,
        color: isLastDigit ? lastDigitColor : labelFontColor,
      }}
    >
      {label}
    </Text>
  );
}
