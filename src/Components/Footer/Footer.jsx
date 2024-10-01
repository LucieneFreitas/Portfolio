import "./Footer.css";
import logo3 from "../../assets/logo3.png"
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import youtube from "../../assets/youtube.svg"

export function Footer() {
  return (
    <footer className="footer">
  <div className="footer-content">
    <img src={logo3} alt="LF Sites Logo" className="footer-logo" />
    <div className="social-links">
      <a href="https://www.youtube.com/@lucienefreitas7889" target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt="YouTube" className="social-icon" />
      </a>
      <a href="https://github.com/LucieneFreitas" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/luciene-freitas-0a11b941/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://www.instagram.com/lucienefreitas.rj/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className="social-icon" />
      </a>
    </div>
  </div>
</footer>
  );
}
