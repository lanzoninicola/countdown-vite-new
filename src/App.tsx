import "./i18n";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Header from "./components/header/header";
import MainContent from "./components/layout/main-content/main-content";
import Countdowns from "./countdowns/countdowns";
import Editor from "./editor/editor";
import FakeWrapper from "./FakeWrapper";

function App() {
  return (
    <FakeWrapper>
      <MainContent>
        <Header />
        <Countdowns />
        <Editor />
      </MainContent>
    </FakeWrapper>
  );
}

export default App;
