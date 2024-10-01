import './Portolio.css'
import Menu from './Menu'
import { useState } from 'react'

export function Portfolio() {
  const [items, setItems] = useState(Menu);
  return (
    <section id="portfolio" className="work-container-section">
    <h2 className="section_titulo">Projetos</h2>
    <div className="work_filters">
      <span className="work_item" onClick={() => setItems(Menu)}>Everything</span>
      <span className="work_item" onClick={() => setItems(Menu.filter(item => item.category === 'App'))}>App</span>
      <span className="work_item" onClick={() => setItems(Menu.filter(item => item.category === 'Site'))}>Site</span>
    </div>

    <div className="work_container grid">
      {items.map((elem) => {
        const { id, image, title, category, link } = elem;
        return (
          <div className="work_card" key={id}>
            <div className="work_thumbnail">
              {/* Envolve a imagem com o link */}
              <a href={link ? link : '#'} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="work_img" />
                <div className="work_mask"></div>
              </a>
            </div>

            <span className="work_category">{category}</span>
            <h3 className="work_title">{title}</h3>
          </div>
        );
      })}
    </div>
  </section>
  )
}
