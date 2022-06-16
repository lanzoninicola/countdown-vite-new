import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { Box, Button, Text } from "@chakra-ui/react";

import Editor from "./components/editor/editor";
import MainContent from "./components/layout/main-content/main-content";
import FakeWrapper from "./FakeWrapper";
import CountdownsList from "./components/list/countdown-list";

import "./i18n";
import { useTranslation } from "react-i18next";
import { Languages } from "./i18n/types";

const lngs: Languages = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
};

function App() {
  const { i18n } = useTranslation();

  console.log(i18n.resolvedLanguage);

  return (
    <FakeWrapper>
      <MainContent>
        <Box>
          <Text>This is the Header</Text>
          {Object.keys(lngs).map((lng) => (
            <Button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </Button>
          ))}
        </Box>
        <CountdownsList />
        {/* <Editor /> */}
      </MainContent>
    </FakeWrapper>
  );
}

export default App;
