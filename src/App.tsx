import { About } from "./components/About";
import { BoxDescription } from "./components/BoxDescription";
import { Carrousell } from "./components/Carrousell";
import { Contact } from "./components/Contact";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { OurServices } from "./components/OurServices";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Home />
        <Description />
        <BoxDescription />
        <Carrousell />
        <OurServices />
        <About />
        <Contact />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
