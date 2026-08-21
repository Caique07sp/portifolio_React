import React from 'react';
import Animations from './Animations';

const SERVICOS_DADOS = [
  {
    icone: "fa-solid fa-code",
    titulo: "Desenvolvimento Web",
    itens: [
      "Sites institucionais",
      "Landing Pages",
      "Portais e Painéis"
    ]
  },
  {
    icone: "fa-solid fa-mobile-alt",
    titulo: "Desenvolvimento Mobile",
    itens: [
      "React Native",
      "Aplicativos Android",
      "Aplicativos iOS"
    ]
  },
  {
    icone: "fa-solid fa-server",
    titulo: "Sistemas Web",
    itens: [
      "Sistemas CRUD e Login",
      "Modelagem de Banco de dados",
      "Construção de APIs"
    ]
  },
  {
    icone: "fa-solid fa-plug",
    titulo: "Integrações",
    itens: [
      "APIs de Terceiros",
      "WhatsApp e E-mail",
      "Gateways de Pagamentos"
    ]
  }
];

export function Services() {
  return (
    <section id="services">
      <Animations animacao='surgir-baixo'>
        <div className="container-servicos">
          <h1 className="titulo-secao" data-eyebrow="O que eu faço">Serviços</h1>

          <div className="conteudo-servicos">
            {SERVICOS_DADOS.map((servico, index) => (
              <div className="card-servico" key={index}>
                <i className={servico.icone}></i>
                <h3>{servico.titulo}</h3>
                {servico.itens.map((item, itemIndex) => (
                  <p key={itemIndex}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Animations>
    </section>
  );
}