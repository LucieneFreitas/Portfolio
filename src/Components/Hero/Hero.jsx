import './Hero.css'
import profile_img from '../../assets/profile_img.png'

export function Hero() {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1>Olá, Sou <span>Luciene Freitas</span></h1>
      <h2>Desenvolvedora Frontend e Web Designer</h2>
      <div className="hero-action">
        <div className="hero-connect">Contate-me</div>
        <div className="hero-resume">Meu Currículo</div>
      </div>
    </div>
  )
}
