import { Heading } from "@chakra-ui/react";
import useTitleSelector from "../../context/hooks/useTitleSelector";

// TODO: custom unit size for the fontSize

export default function CounterTitle() {
  const { titleText, titleFontFamily, titleFontSize, titleFontColor } =
    useTitleSelector();

  console.log("counter-title", titleFontSize);

  return (
    <Heading
      as="h2"
      fontFamily={titleFontFamily}
      fontSize={`${titleFontSize}px`}
      color={titleFontColor}
    >
      {titleText}
    </Heading>
  );
}
