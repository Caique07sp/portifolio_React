import React from 'react';

export function Footer() {
  return (
    <footer className="rodape-principal">
      <div className="container-rodape">
        <div className="logo-rodape">
          <h1>Caique Martins</h1>
        </div>
        <div className="links-rodape">
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
        <div className="redes-rodape">
          <a href="https://www.github.com/Caique07sp" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/Caique_ofc8" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/dev-caique-martins" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="direitos-autorais">
        <p>&copy; 2026 Caique Martins. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}