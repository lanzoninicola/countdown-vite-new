import "./i18n";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Header from "./components/header/header";
import MainContent from "./components/layout/main-content/main-content";
import CountdownWidgetProvider from "./countdown-widget-provider/countdown-widget-provider";
import CountdownWidgetThemeProvider from "./countdown-widget-theme-provider/countdown-widget-theme-provider";
import useEditorSettings from "./countdown-widget/hooks/useEditorSettings";
import Countdowns from "./countdowns/countdowns";
import Editor from "./editor/editor";
import FakeWrapper from "./FakeWrapper";

function App() {
  const { settings, theme, isError, isLoading } = useEditorSettings({
    isMockMode: false,
    current: null,
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
    <FakeWrapper>
      <MainContent>
        <CountdownWidgetProvider settings={settings}>
          <CountdownWidgetThemeProvider theme={theme}>
            <Header />
            <Countdowns />
            <Editor />
          </CountdownWidgetThemeProvider>
        </CountdownWidgetProvider>
      </MainContent>
    </FakeWrapper>
  );
}

export default App;
