import { Box, Flex, HStack } from "@chakra-ui/react";

import useCurrentTokenSelector from "../../countdown-widget-theme-provider/hooks/useCurrentTokenSelector";
import { Tokens } from "../../countdown-widget-theme-provider/types/responsive";
import CountdownWidget from "../../countdown-widget/countdown-widget";
import useCustomScrollbar from "../../hooks/useCustomScrollbar";
import pattern from "./assets/imgs/tiny-checkers.svg";
import BreakpointsBar from "./components/breakpoints-bar/breakpoints-bar";
import DEFAULT_BREAKPOINTS from "./constants/default-breakpoints";

export default function EditorPreview() {
  const scrollbar = useCustomScrollbar();
  const { currentToken, setCurrentToken } = useCurrentTokenSelector();

  const countdownWrapperWidth = (token: Tokens) => {
    switch (token) {
      case "sm":
        return DEFAULT_BREAKPOINTS[token];
      case "md":
        return DEFAULT_BREAKPOINTS[token];
      case "lg":
        return DEFAULT_BREAKPOINTS[token];
      default:
        return "100%";
    }
  };

  return (
    <>
      <Box
        bgImage={`url(${pattern})`}
        bgSize={"20px 20px"}
        bgColor={"gray.50"}
        p="5rem"
        borderRadius={"xl"}
        boxShadow={"sm"}
      >
        <Flex
          id="countdown-wrapper"
          border={"1px solid black"}
          borderColor="gray.300"
          borderStyle={"dotted"}
          justifyContent={"center"}
          w={countdownWrapperWidth(currentToken)}
          overflowX={"auto"}
          css={scrollbar}
        >
          <CountdownWidget />
        </Flex>
      </Box>
      <HStack
        spacing={2}
        borderRadius={"lg"}
        boxShadow={"lg"}
        paddingBlock=".5rem"
        paddingInline={"1rem"}
        mt="1rem"
        maxW="650px"
      >
        <BreakpointsBar
          onClickDesktop={() => setCurrentToken("lg")}
          onClickMobile={() => setCurrentToken("sm")}
          onClickTablet={() => setCurrentToken("md")}
        />
      </HStack>
    </>
  );
}
