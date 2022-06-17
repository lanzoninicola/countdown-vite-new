import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

import CenterContent from "../layout/center-content/center-content";
import LeftSidebar from "../layout/left-sidebar/left-sidebar";
import RightSidebar from "../layout/right-sidebar/right-sidebar";
import { CountdownProvider } from "./countdown-provider/countdown-provider";
import { CountdownThemeProvider } from "./countdown-theme-provider/countdown-theme-provider";
import Countdown from "./countdown/countdown";
import useEditorSettings from "./countdown/hooks/useEditorSettings";
import TargetDate from "./property-editor/properties/target-date/target-date";
import Timezone from "./property-editor/properties/timezone/timezone";
import PropertyEditor from "./property-editor/PropertyEditor";
import pattern from "../../assets/imgs/tiny-checkers.svg";
// TODO: check if the isMockMode flag could be handled with npm scripts

export default function Editor() {
  const { settings, theme, isError, isLoading } = useEditorSettings({
    isMockMode: false,
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
    <CountdownProvider settings={settings}>
      <CountdownThemeProvider theme={theme}>
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
            <PropertyEditor />
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
                  <Countdown />
                </Box>
              </Box>
            </VStack>
          </CenterContent>
          <RightSidebar>
            <Text>This is the countdown theme area</Text>
          </RightSidebar>
        </Box>
      </CountdownThemeProvider>
    </CountdownProvider>
  );
}
