import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import {Header} from "./molecules/Header/Header";
import {Box} from "./atoms/Box/Box";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header/>
      </Box>
    </ThemeProvider>

  );
}

export default App;
