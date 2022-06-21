import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import CountdownWidget from "../../countdown-widget/countdown-widget";
import TargetDate from "../editor-properties/components/target-date/target-date";
import Timezone from "../editor-properties/components/timezone/timezone";
import EditorProperties from "../editor-properties/editor-properties";
import CenterContent from "../layout/center-content/center-content";
import LeftSidebar from "../layout/left-sidebar/left-sidebar";
import RightSidebar from "../layout/right-sidebar/right-sidebar";
import pattern from "../assets/imgs/tiny-checkers.svg";

// TODO: check if the isMockMode flag could be handled with npm scripts

export default function EditorPage() {
  return (
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
  );
}
