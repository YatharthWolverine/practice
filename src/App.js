import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import {Header} from "./molecules/Header/Header";
import {Box} from "./atoms/Box/Box";
import {Output} from  "./molecules/Output/Output"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
       <Output/> 
      </Box>
    </ThemeProvider>

  );
}

export default App;
