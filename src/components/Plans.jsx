import React from 'react';
import Animations from './Animations';

const PLANOS_DADOS = [
  {
    titulo: "Landing Page",
    subtitulo: "Ideal para conversão rápida e campanhas",
    descricao: "Página única de alta conversão, perfeita para lançar produtos, divulgar serviços ou captar leads diretamente no WhatsApp.",
    recursos: [
      "Design moderno e 100% responsivo",
      "Integração direta com WhatsApp e e-mail",
      "Otimização SEO para busca no Google",
      "Copywriting focado em vendas",
      "Carregamento ultra rápido",
      "Suporte pós-entrega"
    ],
    destaque: false,
    textoBotao: "Solicitar Orçamento"
  },
  {
    titulo: "Site Institucional",
    subtitulo: "A presença digital completa para seu negócio",
    descricao: "Estrutura profissional para apresentar sua empresa, serviços, portfólio de projetos e gerar credibilidade no mercado.",
    recursos: [
      "Multi-páginas (Início, Sobre, Serviços, etc.)",
      "Painel administrativo para gerenciar conteúdo",
      "Formulários de contato interativos",
      "SEO intermediário otimizado",
      "Integração com redes sociais e Google Maps",
      "Suporte e treinamento inclusos"
    ],
    destaque: true,
    tagPopular: "Mais Vendido",
    textoBotao: "Solicitar Orçamento"
  },
  {
    titulo: "Loja Virtual / E-commerce",
    subtitulo: "Venda seus produtos online 24 horas por dia",
    descricao: "Plataforma completa para vendas online com catálogo de produtos, carrinho, meios de pagamento e gestão de pedidos.",
    recursos: [
      "Catálogo dinâmico de produtos e categorias",
      "Integração com gateways (Mercado Pago, Stripe, Pix)",
      "Cálculo automático de frete e entregas",
      "Painel de controle para gerenciar estoque e pedidos",
      "Design seguro e otimizado para celulares",
      "Suporte técnico especializado"
    ],
    destaque: false,
    textoBotao: "Solicitar Orçamento"
  },
  {
    titulo: "Projeto Personalizado",
    subtitulo: "Sistemas Web e aplicações sob medida",
    descricao: "Desenvolvimento de SaaS, sistemas de agendamento, painéis administrativos ou plataformas sob demanda.",
    recursos: [
      "Arquitetura e banco de dados sob medida",
      "Autenticação de usuários e níveis de acesso",
      "Integração com APIs e serviços externos",
      "Interface UI/UX sob medida no Figma",
      "Regras de negócio personalizadas",
      "Acompanhamento e suporte estendido"
    ],
    destaque: false,
    textoBotao: "Falar sobre o Projeto"
  }
];

export function Plans() {
  return (
    <section id="plans">
      <Animations animacao='surgir-baixo'>
        <div className="container-planos">
          <h1 className="titulo-secao" data-eyebrow="Investimento">Planos & Serviços</h1>
          
          <div className="conteudo-planos">
            {PLANOS_DADOS.map((plano, index) => (
              <div 
                className={`card-plano ${plano.destaque ? 'plano-destaque' : ''}`} 
                key={index}
              >
                {plano.tagPopular && (
                  <div className="tag-popular">{plano.tagPopular}</div>
                )}

                <h3>{plano.titulo}</h3>
                <span className="subtitulo-projeto" style={{ marginBottom: '0.8rem', display: 'block' }}>
                  {plano.subtitulo}
                </span>
                
                <p className="descricao-plano">{plano.descricao}</p>

                <ul className="lista-recursos">
                  {plano.recursos.map((recurso, rIndex) => (
                    <li key={rIndex}>
                      <i className="fa-solid fa-circle-check"></i>
                      {recurso}
                    </li>
                  ))}
                </ul>

                <a href="#contato" className="botao-plano">
                  {plano.textoBotao}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Animations>
    </section>
  );
}