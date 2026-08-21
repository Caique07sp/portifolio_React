import Animations from "./Animations";

const HABILIDADES = [
  { nome: 'HTML', icone: 'fa-brands fa-html5' },
  { nome: 'CSS', icone: 'fa-brands fa-css3-alt' },
  { nome: 'JavaScript', icone: 'fa-brands fa-js' },
  { nome: 'PHP', icone: 'fa-brands fa-php' },
  { nome: 'React', icone: 'fa-brands fa-react' },
  { nome: 'React Native', icone: 'fa-brands fa-react' },
  { nome: 'Node.js', icone: 'fa-brands fa-node-js' },
  { nome: 'Git', icone: 'fa-brands fa-git-alt' },
  { nome: 'MySQL', icone: 'fa-solid fa-database' },
];

export function Skills() {
  return (
    <section id="skills">
      <Animations animacao="surgir-baixo">
        <div className="container-habilidades">
          <h1 className="titulo-secao" data-eyebrow="Stack">Habilidades</h1>
          <div className="conteudo-habilidades">
            {HABILIDADES.map((item, index) => (
              <div className="card-tecnologia" key={index}>
                <i className={item.icone}></i>
                <h3>{item.nome}</h3>
              </div>
            ))}
          </div>
        </div>

      </Animations>
    </section>
  );
}