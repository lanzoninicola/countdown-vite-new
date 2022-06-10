import { Text } from "@chakra-ui/react";

interface UnitSeparatorProps {
  value?: string;
}

export default function UnitSeparator({ value }: UnitSeparatorProps) {
  return <Text as="span">{value}</Text>;
}
