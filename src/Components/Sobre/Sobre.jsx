import "./Sobre.css";
{/*import logo3 from "../../assets/logo3.png";*/}
import profile_img from "../../assets/profile_img.png";

export function Sobre() {
  return (
    <div id='sobre' className="sobre">
      <div className="sobre-titulo">
        <h1>Sobre mim</h1>
        {/*<img src={logo3} alt="" />*/}
      </div>
      <div className="sobre-sections">
        <div className="sobre-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="sobre-right">
          <div className="sobre-text">
            <p>
            Apaixonada pela vida e movida por desafios, estou sempre buscando maneiras de crescer, tanto pessoal quanto profissionalmente.
            </p>
            <p>
            Iniciei minha jornada como Desenvolvedora em 2021, ensinando programação para crianças e adolescentes de 5 a 15 anos. Durante esse período, ajudei jovens a criarem aplicativos e jogos usando HTML, CSS, Javascript, Lua e Python, além de explorar princípios de UI/UX Design e inteligência artificial.
            </p>
            <p>
            Tive a incrível oportunidade de estagiar em uma grande empresa do setor de mídia e comunicação, onde trabalhei com a plataforma ServiceNow. Participei de projetos de desenvolvimento para portais, formulários, workspaces, App Engine e Chatbot. Um dos destaques dessa experiência foi a criação de um portal que facilitou o uso de sistemas internos para funcionários, terceirizados e grupos artísticos, utilizando Angular, Typescript e UI Designer. Essa experiência solidificou ainda mais meu desejo de atuar no desenvolvimento de soluções tecnológicas.
            </p>
            <p>
            Atualmente, atuo como freelancer, desenvolvendo sites com WordPress, PHP, ReactJS e Figma, sempre em busca de novos desafios e oportunidades para continuar evoluindo.
            </p>
          </div>
          <div className="sobre-skills">
            <div className="sobre-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "95%" }} />
            </div>
            <div className="sobre-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="sobre-skill">
              <p>JavaScript</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="sobre-skill">
              <p>Typescript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="sobre-skill">
              <p>PHP</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="sobre-skill">
              <p>Node</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="sobre-skill">
              <p>Wordpress</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="sobre-skill">
              <p>Figma</p>
              <hr style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="sobre-conquistas">
        <div className="sobre-conquista">
          <h1>3+</h1>
          <p>anos de experiência</p>
        </div>
        <hr />
        <div className="sobre-conquista">
          <h1>10+</h1>
          <p>Projetos</p>
        </div>
        
      </div>
    </div>
  );
}
