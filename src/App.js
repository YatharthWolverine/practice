import {Flex}  from './atoms/Flex/Flex'
import {ThemeProvider} from 'styled-components'
import { theme } from './styles/theme';



function App() {
  return (
    <ThemeProvider theme = {theme}>
    <>
    <Flex color ="black" 
    bg="primary.3"
    p= "40px 0">
      <h1> HELLO WORLD!</h1>
    </Flex>
    </>  
    </ThemeProvider>
  );
}

export default App;
