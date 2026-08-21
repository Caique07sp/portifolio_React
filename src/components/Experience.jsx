import React from 'react';
import Animations from './Animations';

const CURRICULO_DADOS = [
  {
    icone: "fa-solid fa-graduation-cap",
    titulo: "Formação Acadêmica",
    topicos: [
      "Estudante de Engenharia da Computação no Centro Universitário Adventista de São Paulo.",
      "Formado no curso técnico de Informática para Internet pela ETEC."
    ]
  },
  {
    icone: "fa-solid fa-briefcase",
    titulo: "Experiência Profissional",
    topicos: [
      "Desenvolvedor Web Freelancer, criando sites e sistemas personalizados para clientes.",
      "Suporte Técnico, realizando orientação e configuração de equipamentos de acesso, como biometria e relógios de ponto."
    ]
  },
  {
    icone: "fa-solid fa-certificate",
    titulo: "Certificações",
    topicos: [
      "Certificação em Desenvolvimento Web Full Stack.",
      "Certificação em React e React Native."
    ]
  }
];

export function Experience() {
  return (
    <section id="curriculum">

      <Animations animacao='surgir-baixo'>
      <div className="container-curriculo">
        <h1 className="titulo-secao" data-eyebrow="Trajetória">Experiência</h1>

        <div className="conteudo-curriculo">
          {CURRICULO_DADOS.map((item, index) => (
            <div className="item-curriculo" key={index}>
              <div className="icone-curriculo">
                <i className={item.icone}></i>
              </div>
              <h3>{item.titulo}</h3>
              {item.topicos.map((topico, topicoIndex) => (
                <p key={topicoIndex}>{topico}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      </Animations>
    </section>
  );
}