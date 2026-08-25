import React from 'react';
import Animations from './Animations';

const PROJETOS_DADOS = [
  {
    titulo: "Cardápio Digital",
    subtitulo: "Buffet Evento Churrasco",
    descricao: "Cardápio interativo e responsivo desenvolvido para facilitar o atendimento e pedidos em eventos.",
    imagem: "../projeto1.png",
    linkSite: "https://cardapioonlinetropical.netlify.app/",
    linkGithub: "https://github.com/Caique07sp/Cardapio",
    tecnologias: [
      { nome: "HTML5", icone: "fa-brands fa-html5" },
      { nome: "CSS3", icone: "fa-brands fa-css3-alt" },
      { nome: "JavaScript", icone: "fa-brands fa-js" }
    ]
  },
  {
    titulo: "Tropical Churrascos",
    subtitulo: "Lanchonete & Delivery",
    descricao: "Sistema de cardápio digital dinâmico para consumo presencial e pedidos via web.",
    imagem: "../project2.png",
    linkSite: "https://lanchonetecardapio.netlify.app",
    linkGithub: "https://github.com/Caique07sp/Lanchonete-Profissional-HTML-CSS-JS",
    tecnologias: [
      { nome: "HTML5", icone: "fa-brands fa-html5" },
      { nome: "CSS3", icone: "fa-brands fa-css3-alt" },
      { nome: "JavaScript", icone: "fa-brands fa-js" }
    ]
  },
  {
    titulo: "Gaspar Fretes e Mudanças",
    subtitulo: "Sistema Caminhoneiro",
    descricao: "Plataforma para gestão de fretes, controle de viagens e custos logísticos.",
    imagem: "../project4.png",
    linkSite: "https://caminhoneiro.netlify.app",
    linkGithub: "https://github.com/Caique07sp/Sistema_Caminhoneiro",
    tecnologias: [
      { nome: "HTML5", icone: "fa-brands fa-html5" },
      { nome: "CSS3", icone: "fa-brands fa-css3-alt" },
      { nome: "JavaScript", icone: "fa-brands fa-js" }
    ]
  },
  {
    titulo: "PetConnect",
    subtitulo: "Adoção & Doação",
    destaque: "Destaque",
    descricao: "Sistema completo para adoção de animais com autenticação de usuários, envio de e-mails e gestão de cadastros.",
    imagem: "../project3.png",
    linkSite: "https://caminhoneiro.netlify.app",
    linkGithub: "https://github.com/Caique07sp/petconnect-tcc",
    tecnologias: [
      { nome: "PHP", icone: "fa-brands fa-php" },
      { nome: "MySQL", icone: "fa-solid fa-database" },
      { nome: "CSS3", icone: "fa-brands fa-css3-alt" },
      { nome: "JavaScript", icone: "fa-brands fa-js" }
    ]
  }
];

export function Projects() {
  return (
    <section id="projetos">
      <Animations animacao='surgir-baixo'>
        <div className="container-projetos">
          <h1 className="titulo-secao" data-eyebrow="Trabalhos recentes">Projetos</h1>
        
          <div className="conteudo-projetos">
            {PROJETOS_DADOS.map((projeto, indice) => (
              <div className="card-projeto" key={indice}>
                
                {projeto.destaque && (
                  <span className="badge-projeto-destaque">{projeto.destaque}</span>
                )}

                <div className="imagem-projeto">
                  <img src={projeto.imagem} alt={projeto.titulo} />
                  <div className="overlay-projeto">
                    <a href={projeto.linkSite} target="_blank" rel="noopener noreferrer" className="link-projeto">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> Ver Site
                    </a>
                    <a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer" className="link-projeto link-github">
                      <i className="fa-brands fa-github"></i> GitHub
                    </a>
                  </div>
                </div>

                <div className="info-projeto">
                  <div className="cabecalho-card-projeto">
                    <h3>{projeto.titulo}</h3>
                    {projeto.subtitulo && <span className="subtitulo-projeto">{projeto.subtitulo}</span>}
                  </div>
                  <p>{projeto.descricao}</p>
                  
                  <div className="lista-tecnologias">
                    {projeto.tecnologias.map((tech, techIndice) => (
                      <span key={techIndice} className="tag-tecnologia">
                        <i className={tech.icone}></i>
                        {tech.nome}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}

            {/* CARD PARA O GITHUB */}
            <div className="card-projeto card-github-cta">
              <div className="conteudo-github-cta">
                <div className="icone-github-wrapper">
                  <i className="fa-brands fa-github"></i>
                </div>
                <h3>Explore meu GitHub</h3>
                <p>Tenho vários outros repositórios com sistemas, códigos e experimentos para você conferir.</p>
                <a 
                  href="https://github.com/Caique07sp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-github-cta"
                >
                  <span>Ver Todos os Repositórios</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </Animations>
    </section>
  );
}