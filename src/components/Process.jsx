const ETAPAS = [
  { passo: "01", titulo: "Alinhamento", desc: "Entendimento das suas necessidades e planejamento inicial da solução." },
  { passo: "02", titulo: "Design & Código", desc: "Desenvolvimento da interface e das funcionalidades do projeto." },
  { passo: "03", titulo: "Testes", desc: "Validação em múltiplos dispositivos e ajustes de performance." },
  { passo: "04", titulo: "Entrega", desc: "Publicação do projeto e suporte técnico para início do uso." }
];

export function Process() {
  return (
    <section id="operation">
      <div className="container-operacao">
        <h1 className="titulo-secao" data-eyebrow="Passo a Passo">Como Funciona</h1>

        <div className="grid-operacao">
          {ETAPAS.map((etapa, idx) => (
            <div className="card-passo" key={idx}>
              <span className="numero-passo">{etapa.passo}</span>
              <h3>{etapa.titulo}</h3>
              <p>{etapa.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}