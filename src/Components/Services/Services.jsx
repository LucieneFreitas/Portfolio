import './Services.css'
import equipe from '../../assets/equipe.jpg'
import Services_Data from '../../assets/services_data.js'
import arrow from '../../assets/arrow.svg'

export function Services() {
  return (
    <div className='services'>
      <div className="services titulo">
        <h1>Meus serviços</h1>
        <img src={equipe} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
          return <div key={index} className='service-format'> 
          <h3>{service.s_no}</h3>   
          <h2>{service.s_name}</h2> 
          <p>{service.s_desc}</p>
          <div className="services-readmore"><p>Leia mais</p>
          <img src={arrow} alt="" />
            </div>       
          </div>

        })}
      </div>
    </div>
  )
}
