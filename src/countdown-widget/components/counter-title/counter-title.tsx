import { Heading } from "@chakra-ui/react";

import useAppContext from "../../../countdown-widget-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../countdown-widget-theme-provider/hooks/useCurrentTokenSelector";
import useThemeTitleSelector from "../../../countdown-widget-theme-provider/hooks/useThemeTitleSelector";
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
      <GoogleFontsLinkTag
        googleFonts={[
          {
            fontFamily,
            fontWeight,
          },
        ]}
      />
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
