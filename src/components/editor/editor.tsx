import { Flex, Text } from "@chakra-ui/react";

import CenterContent from "../layout/center-content/center-content";
import LeftSidebar from "../layout/left-sidebar/left-sidebar";
import RightSidebar from "../layout/right-sidebar/right-sidebar";
import { CountdownProvider } from "./countdown-provider/countdown-provider";
import { CountdownThemeProvider } from "./countdown-theme-provider/countdown-theme-provider";
import Countdown from "./countdown/countdown";
import useEditorSettings from "./countdown/hooks/useEditorSettings";
import PropertyEditor from "./property-editor/PropertyEditor";

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
      </CountdownThemeProvider>
    </CountdownProvider>
  );
}
