import { Text } from "@chakra-ui/react";
import { ThemeUnitDigit } from "../../../../../countdown-widget-theme-provider/types/timer";

interface UnitSeparatorProps {
  children?: React.ReactNode;
  theme: ThemeUnitDigit;
  [key: string]: any;
}

export default function UnitSeparator({
  children,
  theme,
  ...props
}: UnitSeparatorProps) {
  return (
    <Text as="span" {...props} marginInline="1rem">
      {children}
    </Text>
  );
}
