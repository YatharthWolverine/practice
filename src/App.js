import "./App.css";
import Common from "./Common";

import { Header } from "./molecules";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Common />
      {/* <Heading />
      <Title /> */}
      <Header />
    </ThemeProvider>
  );
}

export default App;
