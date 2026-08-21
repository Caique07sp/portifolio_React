import React from 'react';
import Animations from './Animations';

const PERGUNTAS_FAQ = [
  {
    pergunta: "Quanto tempo leva para o meu projeto/site ficar pronto?",
    resposta: "O prazo varia de acordo com a complexidade. Uma Landing Page costuma ser entregue em média entre 3 a 7 dias. Já sites institucionais e sistemas personalizados levam de 2 a 4 semanas. Definimos um cronograma claro logo no início do projeto.",
    abertoInicialmente: true
  },
  {
    pergunta: "O site vai funcionar bem em celulares e tablets?",
    resposta: "Sim! Todos os projetos são desenvolvidos com design 100% responsivo, garantindo uma ótima experiência de navegação e carregamento rápido em qualquer tamanho de tela (smartphones, tablets e computadores).",
    abertoInicialmente: false
  },
  {
    pergunta: "Como funciona a questão de domínio e hospedagem?",
    resposta: "Eu te auxilio em todo o processo de escolha e contratação do domínio (.com.br) e da hospedagem. Deixo o site totalmente configurado, publicado e pronto para uso.",
    abertoInicialmente: false
  },
  {
    pergunta: "Eu terei suporte após o lançamento do site?",
    resposta: "Com certeza! Ofereço suporte pós-entrega para garantir que tudo funcione perfeitamente. Dependendo do plano contratado, também ofereço treinamento para você mesmo gerenciar conteúdos básicos do seu site.",
    abertoInicialmente: false
  },
  {
    pergunta: "Quais são as formas de pagamento aceitas?",
    resposta: "Trabalho com pagamento via Pix, transferência bancária e cartão de crédito. Geralmente o projeto é dividido em um sinal na aprovação do orçamento e o restante na entrega do projeto testado e aprovado.",
    abertoInicialmente: false
  }
];

export function Faq() {
  return (
    <Animations animacao='surgir-baixo'>
      <section id="faq">
        <div className="container-faq">
          <h1 className="titulo-secao" data-eyebrow="Dúvidas comuns">Perguntas Frequentes</h1>
          <div className="conteudo-faq">
            {PERGUNTAS_FAQ.map((item, index) => (
              <details 
                className="detalhes-faq" 
                key={index} 
                open={item.abertoInicialmente}
              >
                <summary className="sumario-faq">
                  {item.pergunta}
                  <i className="fa-solid fa-chevron-down"></i>
                </summary>
                <p>{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Animations>
  );
}