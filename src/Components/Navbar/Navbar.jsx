import './Navbar.css'
import logo from '../../assets/logo.png'

export function Navbar() {
  return (
    <div className='navbar'>      
      <img src={logo} alt="" className="navbar-logo"/>
      <ul className='nav-menu'>
        <li>Início</li>
        <li>Sobre mim</li>
        <li>Habilidades</li>
        <li>Projetos</li>
        <li>Início</li>
      </ul> 
      <div className="nav-connect">Entrar em contato</div>     
    </div>
  )
}
