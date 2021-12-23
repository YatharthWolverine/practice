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
  { id: "0", name: "Tarun", value: "sdvsd", secondName: "Lokesh" },
  { id: "1", name: "Saurav", value: "sdvsd", secondName: "Yatharth" },
  { id: "2", name: "Saurav", value: "sdvsd", secondName: "Yatharth" },
  { id: "3", name: "Saurav", value: "sdvsd", secondName: "Yatharth" },
];

// const heroData = {
//   id: "0",
//   title: "OUR MISSION",
//   heading: "We are here to scale your ideas with our latest tech knowledge.",
//   brand_heading: "aksjcbkb",
//   brand_logo: [
//     { id: "0", src: SrcLogo, alt: "Logo" },
//     { id: "1", src: SrcLogo, alt: "Logo" },
//     { id: "2", src: SrcLogo, alt: "Logo" },
//   ],
// };

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Profile data={data} />
      {/* <HeroSection heroData={heroData} /> */}
    </ThemeProvider>
  );
}

export default App;
