import { Box, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import useEditorSettings from "../../countdown-widget/hooks/useEditorSettings";
import { Countdown } from "../../countdown-widget/types";
import EditorPreview from "../editor-preview/editor-preview";
import TargetDate from "../editor-properties/components/target-date/target-date";
import TimezonePicker from "../editor-properties/components/timezone/timezone-picker";
import EditorProperties from "../editor-properties/editor-properties";
import BoxRadiusLg from "../layout/box-radius-lg/box-radius-lg";
import CenterContent from "../layout/center-content/center-content";
import LeftSidebar from "../layout/left-sidebar/left-sidebar";

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
          h="calc(100% - 50px)"
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
            <BoxRadiusLg bg={"gray.200"}>
              <TargetDate size="sm" />
              <TimezonePicker size="sm" />
            </BoxRadiusLg>
            <EditorPreview />
          </CenterContent>
          {/* <RightSidebar>
        <Text>This is the countdown theme area</Text>
      </RightSidebar> */}
        </Box>
      )}
    </>
  );
}