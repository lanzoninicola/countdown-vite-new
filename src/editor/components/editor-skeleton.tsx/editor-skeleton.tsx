import { VStack, Skeleton } from "@chakra-ui/react";
import CenterContent from "../../layout/center-content/center-content";
import EditorWrapper from "../../layout/editor-wrapper/editor-wrapper";
import LeftSidebar from "../../layout/left-sidebar/left-sidebar";

export default function EditorSkeleton() {
  return (
    <EditorWrapper>
      <LeftSidebar>
        <Skeleton w="100%" h="100%" borderRadius={"lg"} />
      </LeftSidebar>
      <CenterContent>
        <Skeleton minH="60px" minW="650px" borderRadius={"lg"} />

        <Skeleton minH="300px" minW="1440px" borderRadius={"lg"} />

        <Skeleton minH="64px" minW="200px" borderRadius={"lg"} />
      </CenterContent>
    </EditorWrapper>
  );
}
