import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Services } from "./components/Services"

function App() {
  return (
    <>
      <Header/>
      <Container>
        <About/>
        <Contact/>
        <Services/>
      </Container>
    </>
  )
}

export default App;
