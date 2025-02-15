import Contato from "./components/Contato"
import Especialidades from "./components/Especialidades"
import Footer from "./components/Footer"
import Home from "./components/Home"
import HomeCardBox from "./components/HomeCardBox"
import Local from "./components/Local"
import Navbar from "./components/Navbar"
import Sobre from "./components/Sobre"


function App() {


  return (
    <>
      <Navbar />

      <Home/>
      <HomeCardBox/>
      <Sobre />
      <Especialidades/>
      <Contato/>
      <Local/>
      <Footer/>
    </>
    
    
  )
}

export default App
