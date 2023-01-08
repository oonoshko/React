import "./App.css";
import { Header, Body, Footer } from "./components";
import styled from "styled-components";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Body />
      <Footer />
    </AppWrapper>
  );
}
const AppWrapper = styled.div({
  height: "100vh",
});

export default App;
