import { Heading } from "@chakra-ui/react";
import useAppContext from "../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useThemeTitleSelector from "../../../countdown-provider/hooks/theme/useThemeTitleSelector";

import { GoogleFontsLinkTag } from "../../../countdown-widget-typography/countdown-widget-typography";

// TODO: custom unit size for the fontSize

export default function CounterTitle() {
  const {
    text,
    fontColor,
    fontFamily,
    fontSize,
    fontSizeChackraUI,
    fontWeight,
  } = useThemeTitleSelector();

  const { isEditorMode } = useAppContext();
  const { currentToken } = useCurrentTokenSelector();

  return (
    <>
      <Heading
        as="h2"
        fontFamily={fontFamily}
        fontSize={isEditorMode ? fontSize[currentToken] : fontSizeChackraUI}
        color={fontColor}
        fontWeight={fontWeight}
      >
        {text}
      </Heading>
    </>
  );
}
