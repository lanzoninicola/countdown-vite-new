import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useCountdownSelector from "../../countdown-widget-provider/hooks/useCountdownSelector";

import useCurrentCountdownSelector from "../../countdown-widget-provider/hooks/useCurrentCountdownSelector";
import { findById } from "../../countdown-widget-rest-api/services/find-by-id";
import useThemeSelector from "../../countdown-widget-theme-provider/hooks/useThemeSelector";
import CountdownWidget from "../../countdown-widget/countdown-widget";
import useEditorSettings from "../../countdown-widget/hooks/useEditorSettings";
import { Countdown } from "../../countdown-widget/types";
import pattern from "../assets/imgs/tiny-checkers.svg";
import TargetDate from "../editor-properties/components/target-date/target-date";
import TimezonePicker from "../editor-properties/components/timezone/timezone-picker";
import EditorProperties from "../editor-properties/editor-properties";
import CenterContent from "../layout/center-content/center-content";
import LeftSidebar from "../layout/left-sidebar/left-sidebar";
import RightSidebar from "../layout/right-sidebar/right-sidebar";

// TODO: check if the isMockMode flag could be handled with npm scripts

interface EditorPageProps {
  currentCountdown?: Countdown["id"];
}

export default function EditorPage({ currentCountdown }: EditorPageProps) {
  const { isError, isLoading } = useEditorSettings({
    current: currentCountdown,
  });

  return (
    <>
      {isError ? (
        <div>Error</div>
      ) : isLoading ? (
        <div>Loading</div>
      ) : (
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
              bg={"gray.200"}
              borderRadius={"lg"}
              boxShadow={"lg"}
              p=".5rem"
              mt="1rem"
              maxW="650px"
            >
              <TargetDate size="sm" />
              <TimezonePicker size="sm" />
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
          {/* <RightSidebar>
        <Text>This is the countdown theme area</Text>
      </RightSidebar> */}
        </Box>
      )}
    </>
  );
}
