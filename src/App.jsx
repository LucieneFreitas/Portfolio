import { Navbar } from "./Components/Navbar/Navbar"
import { Hero } from "./Components/Hero/Hero"
import { Sobre } from "./Components/Sobre/Sobre"
import { Portfolio } from "./Components/Portfolio/Portfolio"
import { Contato } from "./Components/Contato/Contato"

export function App() {
  

  return (  
    <div>
      <Navbar />      
      <Hero />
      <Sobre />
      <Portfolio /> 
      <Contato />      
    </div>    
        
  )
}


