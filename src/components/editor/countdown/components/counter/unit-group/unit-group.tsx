import { Box, HStack, VStack } from "@chakra-ui/react";
import { StringOrNumber } from "../../../types";
import Digit from "./digit/digit";
import UnitLabel from "./unit-label/unit-label";
import UnitSeparator from "./unit-separator/unit-separator";

interface UnitGroupProps {
  label: string;
  value: StringOrNumber;
  isDanger?: boolean;
  isLastDigit?: boolean;
  showSeparator?: boolean;
  separatorChar?: string;
}

export default function UnitGroup({
  label,
  value,
  isDanger,
  isLastDigit,
  showSeparator,
  separatorChar,
}: UnitGroupProps) {
  return (
    <HStack spacing={1}>
      <VStack>
        <Digit value={value} isDanger={isDanger} isLastDigit={isLastDigit} />
        <UnitLabel label={label} isLastDigit={isLastDigit} />
      </VStack>
      {!isLastDigit && showSeparator && <UnitSeparator value={separatorChar} />}
    </HStack>
  );
}
