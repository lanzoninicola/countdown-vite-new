import { Flex, Text } from "@chakra-ui/react";

import CenterContent from "../layout/center-content/center-content";
import LeftSidebar from "../layout/left-sidebar/left-sidebar";
import RightSidebar from "../layout/right-sidebar/right-sidebar";
import { CountdownTimerProvider } from "./countdown-provider/countdown-provider";
import Countdown from "./countdown/countdown";
import useEditorSettings from "./countdown/hooks/useEditorSettings";
import PropertyEditor from "./property-editor/PropertyEditor";

// TODO: check if the isMockMode flag could be handled with npm scripts

export default function Editor() {
  const { editorSettings, isError, isLoading } = useEditorSettings({
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
    <CountdownTimerProvider editorSettings={editorSettings}>
      <Flex id="editor-wrapper" h="100%" w="100%">
        <LeftSidebar>
          <PropertyEditor />
        </LeftSidebar>
        <CenterContent>
          <Text>This is the top side</Text>
          <Countdown />
        </CenterContent>
        <RightSidebar>
          <Text>This is the countdown theme area</Text>
        </RightSidebar>
      </Flex>
    </CountdownTimerProvider>
  );
}
