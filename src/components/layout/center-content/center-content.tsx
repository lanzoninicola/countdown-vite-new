import { VStack } from "@chakra-ui/react";

interface CenterContentProps {
  children: React.ReactNode;
}

export default function CenterContent({ children }: CenterContentProps) {
  return (
    <VStack
      bg="gray.50"
      // bg="linear-gradient(0deg, rgba(237,242,247,1) 50%, rgba(247,250,252,1) 100%)"
    >
      {children}
    </VStack>
  );
}
