import "./App.css";
import { Header } from "./components";
import { Main } from "./contents";
import styled from "styled-components";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Main />
    </AppWrapper>
  );
}
const AppWrapper = styled.div({
  height: "100vh",
});

export default App;
