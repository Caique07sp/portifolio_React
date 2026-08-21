import React from 'react';
import Animations from './Animations';

const DIFERENCIAIS = [
  { icone: "fa-solid fa-bolt", titulo: "Alta Performance", descricao: "Desenvolvo sites rápidos e eficientes" },
  { icone: "fa-solid fa-mobile-screen-button", titulo: "100% Responsivos", descricao: "Meus sites são totalmente responsivos" },
  { icone: "fa-solid fa-shield-halved", titulo: "Segurança", descricao: "Garanto a segurança dos dados" },
  { icone: "fa-solid fa-headset", titulo: "Suporte Dedicado", descricao: "Ofereço suporte" }
];

export function Differential() {
  return (
    <section id="differential">
      <Animations animacao='surgir-baixo'>
        <div className="container-diferenciais">
          <h1 className="titulo-secao" data-eyebrow="Por que trabalhar comigo">Diferenciais</h1>
          <div className="conteudo-diferenciais">
            {DIFERENCIAIS.map((item, index) => (
              <div className="card-diferencial" key={index}>
                <i className={item.icone}></i>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </Animations>
    </section>
  );
}