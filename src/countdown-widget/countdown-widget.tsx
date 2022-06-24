import { VStack } from "@chakra-ui/react";
import useThemeTimerSelector from "../countdown-provider/hooks/theme/useThemeTimerSelector";
import useThemeTitleSelector from "../countdown-provider/hooks/theme/useThemeTitleSelector";
import { GoogleFontsLinkTag } from "../countdown-widget-typography/countdown-widget-typography";
import CountdownTimer from "./components/countdown-timer/countdown-timer";
import CounterTitle from "./components/counter-title/counter-title";

export default function CountdownWidget() {
  const { digitFontFamily, digitFontWeight, labelFontFamily, labelFontWeight } =
    useThemeTimerSelector();
  const { fontFamily: titleFontFamily, fontWeight: titleFontWeight } =
    useThemeTitleSelector();

  return (
    <>
      <GoogleFontsLinkTag
        googleFonts={[
          { fontFamily: digitFontFamily, fontWeight: digitFontWeight },
          { fontFamily: labelFontFamily, fontWeight: labelFontWeight },
          { fontFamily: titleFontFamily, fontWeight: titleFontWeight },
        ]}
      />
      <VStack className="countdown" p="1rem" bg="white" w={"max-content"}>
        <CounterTitle />
        <CountdownTimer />
      </VStack>
    </>
  );
}
