import "./i18n";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import useCurrentCountdownSelector from "./components/app-provider/hooks/useCurrentCountdownSelector";
import Editor from "./components/editor/editor";
import Header from "./components/header/header";
import MainContent from "./components/layout/main-content/main-content";
import CountdownsList from "./components/list/countdown-list";
import FakeWrapper from "./FakeWrapper";

function App() {
  const { currentCountdown } = useCurrentCountdownSelector();

  const showEditor = currentCountdown !== null;

  return (
    <FakeWrapper>
      <MainContent>
        <Header />
        {!showEditor && <CountdownsList />}
        {showEditor && <Editor />}
      </MainContent>
    </FakeWrapper>
  );
}

export default App;
