import { VStack, Text } from "@chakra-ui/react";
import useThemeTimerSelector from "../../../../../countdown-theme-provider/hooks/useThemeTimerSelector";
import { StringOrNumber } from "../../../../types";

interface DigitProps {
  value: StringOrNumber;
  isDanger?: boolean;
  isLastDigit?: boolean;
}

export default function Digit({ value, isDanger, isLastDigit }: DigitProps) {
  const {
    digitFontSize,
    digitFontFamily,
    digitFontWeight,
    digitFontColor,
    lastDigitColor,
  } = useThemeTimerSelector();

  return (
    <Text
      as="span"
      style={{
        fontSize: digitFontSize,
        fontWeight: digitFontWeight,
        fontFamily: digitFontFamily,
        color: isLastDigit ? lastDigitColor : digitFontColor,
      }}
    >
      {value}
    </Text>
  );
}
