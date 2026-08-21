import React from 'react';
import Animations from './Animations';

const PASSOS = [
  { 
    numero: "01", 
    icone: "fa-solid fa-comments", 
    titulo: "Contato & Briefing", 
    descricao: "Conversamos para entender suas necessidades, objetivos do negócio e o público-alvo do projeto." 
  },
  { 
    numero: "02", 
    icone: "fa-solid fa-lightbulb", 
    titulo: "Planejamento", 
    descricao: "Definimos a arquitetura, as tecnologias ideais e a estrutura das páginas para garantir alta performance." 
  },
  { 
    numero: "03", 
    icone: "fa-solid fa-display", 
    titulo: "Design & UX/UI", 
    descricao: "Desenhamos protótipos modernos e focados na experiência do usuário, garantindo uma interface atraente." 
  },
  { 
    numero: "04", 
    icone: "fa-solid fa-gears", 
    titulo: "Desenvolvimento", 
    descricao: "Codificamos a aplicação com tecnologias modernas, responsividade e integração de recursos." 
  },
  { 
    numero: "05", 
    icone: "fa-solid fa-rocket", 
    titulo: "Testes & Entrega", 
    descricao: "Realizamos testes de qualidade, publicamos o projeto online e fornecemos o suporte necessário." 
  }
];

export function Operation() {
  return (
    <section id="operation">
      <Animations animacao='surgir-baixo'>
        <div className="container-processo">
          <h1 className="titulo-secao" data-eyebrow="Do briefing à entrega">Como Funciona</h1>
          <div className="conteudo-processo">
            {PASSOS.map((passo, index) => (
              <div className="passo-processo" key={index}>
                <div className="numero-passo">{passo.numero}</div>
                <i className={passo.icone}></i>
                <h3>{passo.titulo}</h3>
                <p>{passo.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </Animations>
    </section>
  );
}