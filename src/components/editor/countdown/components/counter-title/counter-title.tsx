import { Heading } from "@chakra-ui/react";
import useTitleSelector from "../../../countdown-provider/hooks/useTitleSelector";

// TODO: custom unit size for the fontSize

export default function CounterTitle() {
  const { text, fontColor, fontFamily, fontSize, fontWeight } =
    useTitleSelector();

  return (
    <Heading
      as="h2"
      fontFamily={fontFamily}
      fontSize={`${fontSize}px`}
      color={fontColor}
      fontWeight={fontWeight}
    >
      {text}
    </Heading>
  );
}
