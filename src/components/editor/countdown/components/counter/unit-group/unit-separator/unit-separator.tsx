import { Text } from "@chakra-ui/react";

interface UnitSeparatorProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export default function UnitSeparator({
  children,
  ...props
}: UnitSeparatorProps) {
  return (
    <Text as="span" {...props}>
      {children}
    </Text>
  );
}
