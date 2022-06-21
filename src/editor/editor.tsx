import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

import CenterContent from "./layout/center-content/center-content";
import LeftSidebar from "./layout/left-sidebar/left-sidebar";
import RightSidebar from "./layout/right-sidebar/right-sidebar";
import TargetDate from "./editor-properties/components/target-date/target-date";
import Timezone from "./editor-properties/components/timezone/timezone";
import EditorProperties from "./editor-properties/editor-properties";
import pattern from "./assets/imgs/tiny-checkers.svg";
import CountdownWidgetProvider from "../countdown-widget-provider/countdown-widget-provider";
import CountdownWidgetThemeProvider from "../countdown-widget-theme-provider/countdown-widget-theme-provider";
import CountdownWidget from "../countdown-widget/countdown-widget";
import useEditorSettings from "../countdown-widget/hooks/useEditorSettings";
// TODO: check if the isMockMode flag could be handled with npm scripts

export default function Editor() {
  const { settings, theme, isError, isLoading } = useEditorSettings({
    isMockMode: false,
    current: null,
  });

  // TODO: Error component
  // TODO: Handling errors
  if (isError) {
    return <div>failed to load</div>;
  }

  // TODO: Loading component
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <CountdownWidgetProvider settings={settings}>
      <CountdownWidgetThemeProvider theme={theme}>
        <Box
          id="editor-wrapper"
          w="100%"
          h="calc(100% - 32px)"
          position={"relative"}
          css={`
            & > * {
              height: 100%;
            }
          `}
        >
          <LeftSidebar>
            <EditorProperties />
          </LeftSidebar>
          <CenterContent>
            <HStack
              spacing={2}
              bg="white"
              borderRadius={"lg"}
              boxShadow={"lg"}
              p=".5rem"
              mt="1rem"
            >
              <TargetDate size="lg" />
              <Timezone size="lg" />
            </HStack>
            <VStack h="100%" justifyContent={"center"}>
              <Box
                bgImage={`url(${pattern})`}
                bgSize={"20px 20px"}
                bgColor={"gray.50"}
                p="5rem"
                borderRadius={"xl"}
                boxShadow={"sm"}
              >
                <Box
                  border={"1px solid black"}
                  borderColor="gray.300"
                  borderStyle={"dotted"}
                >
                  <CountdownWidget />
                </Box>
              </Box>
            </VStack>
          </CenterContent>
          <RightSidebar>
            <Text>This is the countdown theme area</Text>
          </RightSidebar>
        </Box>
      </CountdownWidgetThemeProvider>
    </CountdownWidgetProvider>
  );
}
