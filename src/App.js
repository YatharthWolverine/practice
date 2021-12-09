import "./App.css";
// import Common from "./Common";

// import { Header } from "./molecules";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
// import { Heading } from "./atoms";
// import { Card } from "./atoms/Card";
import { Profile } from "./molecules";
import { Grid } from "./atoms";

const data = [
  { name: "Tarun", value: "sdvsd", secondName: "Lokesh" },
  { name: "Saurav", value: "sdvsd", secondName: "Yatharth" },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Profile data={data} />
    </ThemeProvider>
  );
}

export default App;
