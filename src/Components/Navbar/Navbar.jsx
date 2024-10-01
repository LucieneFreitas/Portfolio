import './Navbar.css'
import logo3 from '../../assets/logo3.png'


import AnchorLink from 'react-anchor-link-smooth-scroll'


export function Navbar() {
  
  

  
  return (
    <div className='navbar'>
      <img src={logo3} alt="Logo" className="navbar-logo" />
      

      {/* Referência do menu com useRef */}
      <ul className='nav-menu'>       

        <li><AnchorLink className='anchor-link' offset={50} href='#inicio'><p>Início</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#sobre'><p>Sobre</p></AnchorLink></li> 
        <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p>Portfolio</p></AnchorLink></li>          
        
      </ul>
    </div>
  );
}