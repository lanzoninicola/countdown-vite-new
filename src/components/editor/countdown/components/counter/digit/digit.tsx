import { VStack, Text } from "@chakra-ui/react";
import useTimerSelector from "../../../../countdown-provider/hooks/useTimerSelector";
import { StringOrNumber } from "../../../types";

interface DigitProps {
  value: StringOrNumber;
  label: string;
  isDanger: boolean;
  isLastDigit?: boolean;
}

export default function Digit({
  value,
  label,
  isDanger,
  isLastDigit,
}: DigitProps) {
  const {
    digitFontSize,
    digitFontFamily,
    digitFontWeight,
    digitFontColor,
    lastDigitColor,
  } = useTimerSelector();

  return (
    <VStack>
      // TODO: based on configuration the last digit might have a different
      style
      <Text
        as="span"
        style={{
          fontSize: digitFontSize,
          fontFamily: digitFontFamily,
          color: isLastDigit ? lastDigitColor : digitFontColor,
        }}
      >
        {value}
      </Text>
      // TODO: based on configuration the label might be hide
      <Text
        as="span"
        style={{
          fontSize: digitFontSize,
          fontFamily: digitFontFamily,
          color: isLastDigit ? lastDigitColor : digitFontColor,
        }}
      >
        {label}
      </Text>
    </VStack>
  );
}
