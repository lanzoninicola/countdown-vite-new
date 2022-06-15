import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { Box, Text } from "@chakra-ui/react";

import Editor from "./components/editor/editor";
import MainContent from "./components/layout/main-content/main-content";
import FakeWrapper from "./FakeWrapper";
import CountdownsList from "./components/list/countdown-list";

function App() {
  return (
    <FakeWrapper>
      <MainContent>
        <Box>
          <Text>This is the Header</Text>
        </Box>
        <CountdownsList />
        {/* <Editor /> */}
      </MainContent>
    </FakeWrapper>
  );
}

export default App;
