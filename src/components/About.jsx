import Animations from './Animations';

export function About() {
  return (
    <section id="about">
      <div className="container-about">
        <Animations animacao="surgir-baixo">
          <div className="about-content">
            <div className="about-img">

              <img src="../src/assets/caique.jpg" alt="Foto de Caique Martins" />
            </div>

            <div className="about-text">
              <h1>Sobre Mim</h1>
              <p>
                Me chamo Caique Martins, estudante de Engenharia da Computação e formado no curso técnico de
                Informática para Internet pela ETEC. Atuo na área de desenvolvimento web, criando sites
                modernos, responsivos e com design atrativo.
                <br /><br />
                Tenho grande interesse em desenvolvimento Full Stack, trabalhando tanto no front-end quanto no
                back-end, com foco em tecnologias como JavaScript e PHP.
              </p>
            </div>
          </div>
        </Animations>

        <Animations animacao='surgir-baixo'>
          <div className="about-cards">
            <div className="card">
              <i className="fa-solid fa-laptop"></i>
              <h3>+2</h3>
              <p>Anos de experiência</p>
            </div>

            <div className="card">
              <i className="fa-solid fa-rocket"></i>
              <h3>+5</h3>
              <p>Projetos Concluídos</p>
            </div>

            <div className="card">
              <i className="fa-solid fa-heart"></i>
              <h3>+10</h3>
              <p>Clientes Satisfeitos</p>
            </div>
          </div>
        </Animations>

      </div>
    </section>
  );
}