import { VStack, Text } from "@chakra-ui/react";
import useCounterSelector from "../../../../countdown-provider/hooks/useCounterSelector";
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
  const { digitFontSize, digitFontFamily, digitFontColor, lastDigitColor } =
    useCounterSelector();

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
