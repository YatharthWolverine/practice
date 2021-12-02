import "./App.css";
// import Common from "./Common";

// import { Header } from "./molecules";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
// import { Heading } from "./atoms";
// import { Card } from "./atoms/Card";
import { Profile } from "./molecules";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Profile name="Tarun" designation="sjhcj" />
    </ThemeProvider>
  );
}

export default App;
