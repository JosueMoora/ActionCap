
import { Container } from "@mui/material"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Recomendation } from "./components/Recomendation"
import { HabitacionCarrusel } from "./components/HabitacionCarrusel"
import { Eventos } from "./components/Eventos"
import { Servicios } from "./components/Servicios"
import { Clasifica } from "./components/Clasifica"

const App = () => {
  return (
    <>
      <Navbar />
      <Container style={{minHeight: '90vh', marginTop: "160px"}}>
        <Recomendation />
      </Container>
        <HabitacionCarrusel />
        <Eventos />
        <Servicios />
        <Clasifica />
      <Footer />
    </>
  )
}

export default App