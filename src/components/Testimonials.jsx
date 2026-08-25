import React from 'react';
import Animations from './Animations';

const DEPOIMENTOS = [
  { 
    texto: "O Caique entregou nosso cardápio digital super rápido e exatamente do jeito que precisávamos para os eventos. O sistema é leve, fácil dos clientes usarem e facilitou muito nossos atendimentos!", 
    autor: "Buffet & Churrascos" 
  },
  { 
    texto: "Excelente profissional! Ele desenvolveu o sistema de fretes e controle logístico com muita atenção aos detalhes. A plataforma ficou intuitiva e organizou totalmente nossa rotina.", 
    autor: "Gaspar Fretes e Mudanças" 
  },
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <Animations animacao='surgir-baixo'>
        <div className="container-depoimentos">
          <h1 className="titulo-secao" data-eyebrow="Quem já trabalhou comigo">Depoimentos</h1>
          <div className="conteudo-depoimentos">
            {DEPOIMENTOS.map((depoimento, index) => (
              <div className="card-depoimento" key={index}>
                <i className="fa-solid fa-quote-left icone-aspas"></i>
                <p>"{depoimento.texto}"</p>
                <h3>{depoimento.autor}</h3>
              </div>
            ))}
          </div>
        </div>
      </Animations>
    </section>
  );
}