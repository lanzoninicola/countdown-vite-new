import { Flex, Text } from "@chakra-ui/react";

import CenterContent from "../layout/center-content/center-content";
import LeftSidebar from "../layout/left-sidebar/left-sidebar";
import RightSidebar from "../layout/right-sidebar/right-sidebar";
import Countdown from "./countdown/countdown";
import { PropertyEditorProvider } from "./property-editor/context/property-editor-context";
import PropertyEditor from "./property-editor/PropertyEditor";

export default function Editor() {
  return (
    <PropertyEditorProvider>
      <Flex id="editor-wrapper" h="100%" w="100%">
        <LeftSidebar>
          <PropertyEditor />
        </LeftSidebar>
        <CenterContent>
          <Text>This is the top side</Text>
          <Countdown isEditorMode />
        </CenterContent>
        <RightSidebar>
          <Text>This is the countdown theme area</Text>
        </RightSidebar>
      </Flex>
    </PropertyEditorProvider>
  );
}
