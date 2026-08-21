import { useState, useEffect } from 'react';

const PALAVRAS = ["Desenvolvedor Full-Stack", "Estudante de Engenharia", "Criador de Soluções Web"];

export function Hero() {
  const [texto, setTexto] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0, opacity: 0 });

  // Lógica do Typewriter (Título)
  useEffect(() => {
    const currentWord = PALAVRAS[wordIdx % PALAVRAS.length];
    let timer;

    if (!isDeleting) {
      if (texto.length < currentWord.length) {
        timer = setTimeout(() => setTexto(currentWord.slice(0, texto.length + 1)), 75);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (texto.length > 0) {
        timer = setTimeout(() => setTexto(currentWord.slice(0, texto.length - 1)), 40);
      } else {
        setIsDeleting(false);
        setWordIdx((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timer);
  }, [texto, isDeleting, wordIdx]);

  // Lógica do Brilho no Cursor
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1
    });
  };

  return (
    <section id="home" onMouseMove={handleMouseMove} onMouseLeave={() => setGlowPos(p => ({ ...p, opacity: 0 }))}>
      <div 
        className="cursor-glow" 
        style={{ left: `${glowPos.x}px`, top: `${glowPos.y}px`, opacity: glowPos.opacity }}
      />
      <div className="home-content">
        <div className="hero-texto">
          <span className="hero-eyebrow">
            <span className="ponto-online"></span> Disponível para novos projetos
          </span>

          <h1>Olá, eu sou <span>Caique Martins</span></h1>
          <h2>
            Eu sou <span className="typewriter">{texto}</span>
          </h2>
          <p>Desenvolvimento Web que une design, performance e experiência do usuário.</p>

          <a href="#projects" className="btn"><i className="fa-solid fa-rocket"></i> Ver Projetos</a>
          <a href="#contact" className="btn" style={{ background: 'transparent', color: 'var(--cor-texto-principal)', boxShadow: 'inset 0 0 0 2px var(--borda-fina)' }}>
            Fale Comigo
          </a>

          <div className="blur"></div>
        </div>

        <div className="hero-visual">
          <div className="float-badge b1"><i className="fa-brands fa-html5"></i></div>
          <div className="float-badge b2"><i className="fa-brands fa-react"></i></div>
          <div className="float-badge b3"><i className="fa-brands fa-node-js"></i></div>
          <div className="float-badge b4"><i className="fa-brands fa-js"></i></div>

          {/* Janela de Código Animada */}
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}

// Componente da Janela de Código com efeito Typewriter
function CodeWindow() {
  // Estrutura do código dividida em tokens com suas respectivas classes de cor
  const tokens = [
    { text: "const ", className: "tk-key" },
    { text: "dev ", className: "tk-var" },
    { text: "= ", className: "tk-op" },
    { text: "{\n", className: "tk-punc" },
    { text: "  name", className: "tk-prop" },
    { text: ": ", className: "tk-punc" },
    { text: '"Caique Martins"', className: "tk-str" },
    { text: ",\n", className: "tk-punc" },
    { text: "  role", className: "tk-prop" },
    { text: ": ", className: "tk-punc" },
    { text: '"Full-Stack Developer"', className: "tk-str" },
    { text: ",\n", className: "tk-punc" },
    { text: "  stack", className: "tk-prop" },
    { text: ": ", className: "tk-punc" },
    { text: "[", className: "tk-punc" },
    { text: '"JS"', className: "tk-str" },
    { text: ", ", className: "tk-punc" },
    { text: '"PHP"', className: "tk-str" },
    { text: ", ", className: "tk-punc" },
    { text: '"React"', className: "tk-str" },
    { text: "],\n", className: "tk-punc" },
    { text: "  loves", className: "tk-prop" },
    { text: ": ", className: "tk-punc" },
    { text: '"boas ideias bem construídas"', className: "tk-str" },
    { text: "\n};\n\n", className: "tk-punc" },
    { text: "export default ", className: "tk-key" },
    { text: "dev", className: "tk-var" },
    { text: ";", className: "tk-punc" }
  ];

  const fullText = tokens.map(t => t.text).join("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharCount((prev) => {
        if (prev < fullText.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 35); // Velocidade da digitação por caractere

    return () => clearInterval(interval);
  }, [fullText.length]);

  // Função para renderizar os tokens coloridos até o caractere atual
  const renderTypedTokens = () => {
    let charactersCounted = 0;

    return tokens.map((token, index) => {
      const start = charactersCounted;
      const end = start + token.text.length;
      charactersCounted = end;

      if (charCount <= start) return null; // Ainda não começou a digitar este token

      const visibleText = token.text.slice(0, charCount - start);

      return (
        <span key={index} className={token.className}>
          {visibleText}
        </span>
      );
    });
  };

  return (
    <div className="code-window">
      <div className="code-window-top">
        <span></span><span></span><span></span>
        <small>dev.js</small>
      </div>
      <div className="code-window-body">
        <pre style={{ margin: 0, fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>
          <code>
            {renderTypedTokens()}
            <span className="typewriter" style={{ borderLeft: '2px solid var(--cor-primaria)' }}></span>
          </code>
        </pre>
      </div>
    </div>
  );
}