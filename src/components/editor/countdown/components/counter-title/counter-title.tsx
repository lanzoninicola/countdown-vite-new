import { Heading } from "@chakra-ui/react";
import useThemeTitleSelector from "../../../countdown-theme-provider/hooks/useThemeTitleSelector";

// TODO: custom unit size for the fontSize

export default function CounterTitle() {
  const { text, fontColor, fontFamily, fontSize, fontWeight } =
    useThemeTitleSelector();

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
