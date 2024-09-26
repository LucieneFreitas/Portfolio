import "./Sobre.css";
import logo from "../../assets/logo.png";
import profile_img from "../../assets/profile_img.png";

export function Sobre() {
  return (
    <div className="sobre">
      <div className="sobre-titulo">
        <h1>Sobre mim</h1>
        <img src={logo} alt="" />
      </div>
      <div className="sobre-sections">
        <div className="sobre-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="sobre-right">
          <div className="sobre-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              dolore veniam magni, tempora, consequuntur hic minima ratione esse
              sequi libero debitis assumenda doloribus laborum quidem deleniti
              corporis illum? Ut, excepturi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              aspernatur quos odit ut quia ad hic animi unde vero facilis
              deleniti nihil quidem, dicta quod nisi non vel culpa voluptatem.
            </p>
          </div>
          <div className="sobre-skills">
            <div className="sobre-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="sobre-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="sobre-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="sobre-skill">
              <p>Node</p>
              <hr style={{ width: "50%" }} />
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
          <h1>20+</h1>
          <p>Projetos</p>
        </div>
        <hr />
      </div>
    </div>
  );
}
