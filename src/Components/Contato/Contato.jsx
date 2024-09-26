import './Contato.css'
import logo from '../../assets/logo.png'
import email from '../../assets/email.svg'
import location from '../../assets/location.svg'
import phoneCall from '../../assets/phone-call.svg'

export function Contato() {
  return (
    <div className='contato'>
      <div className="contato-titulo">
        <h1>Entre em contato</h1>
        <img src={logo} alt="" />
      </div>
        <div className="contato-section">
          <div className="contato-left">
            <h1>Vamos conversar!</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident perspiciatis voluptatum quod atque nostrum. Eligendi quia omnis quaerat molestiae aperiam. Delectus praesentium facilis quibusdam quos ut. Voluptate animi incidunt laudantium!</p>
          </div>
          <div className="contato-details">
            <div className="contato-detail">
              <img src={email} alt="" /><p>contato@lfsites.com.br</p>
            </div>
            <div className="contato-detail">
              <img src={phoneCall} alt="" /><p>(21) 99293-5618</p>
            </div>
            <div className="contato-detail">
              <img src={location} alt="" /><p>São José dos Pinhais, PR</p>
            </div>
          </div>
        </div>
        <form action="" className='contato-right'>
          <label htmlFor="">Seu Nome</label>
          <input type="text" placeholder='Digite seu nome' name='nome' />
          <label htmlFor="">Seu Email</label>
          <input type="text" placeholder='Digite seu email' name='email' />
          <label htmlFor="">Escreva sua mensagem</label>
          <textarea name="message" rows="8" placeholder='Digite sua mensagem'></textarea>
          <button type='submit' className="contato-submit">Enviar</button>
        </form>
    </div>
  )
}


