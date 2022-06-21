import "./i18n";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Editor from "./editor";
import Header from "./components/header/header";
import MainContent from "./components/layout/main-content/main-content";
import Countdowns from "./countdowns";
import FakeWrapper from "./FakeWrapper";
import useCurrentCountdownSelector from "./countdown-widget-provider/hooks/useCurrentCountdownSelector";

function App() {
  const { currentCountdown } = useCurrentCountdownSelector();

  const showEditor = currentCountdown && currentCountdown !== null;

  return (
    <FakeWrapper>
      <MainContent>
        <Header />
        {!showEditor && <Countdowns />}
        {showEditor && <Editor />}
      </MainContent>
    </FakeWrapper>
  );
}

export default App;
