import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import CVLucieneFreitasDEV from '../../assets/CVLucieneFreitasDEV.pdf'

export function Hero() {
  return (
    <div id='inicio' className='hero'>
      <img src={profile_img} alt="" />
      <h1>Olá, Sou <span>Luciene Freitas</span></h1>
      <h2>Desenvolvedora Frontend e Web Designer</h2>
      <div className="hero-action">
      <a href="mailto:contato@lfsites.com.br" className="hero-connect">
          Contate-me
        </a>
        <a href={CVLucieneFreitasDEV} download="Curriculo-Luciene-Freitas" className="hero-resume">
          Meu Currículo
        </a>
      </div>
    </div>
  )
}
