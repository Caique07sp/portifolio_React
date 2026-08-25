import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fecharMenu = () => {
    setMenuAberto(false);
    setDropdownAberto(false);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <h1 className="logo"><a href="#home">Caique Martins</a></h1>

        <nav className={`nav ${menuAberto ? 'nav-aberto' : ''}`}>
          <ul>
            <li><a href="#home" onClick={fecharMenu}>Home</a></li>
            <li><a href="#about" onClick={fecharMenu}>Sobre</a></li>
            <li><a href="#projects" onClick={fecharMenu}>Projetos</a></li>
            <li><a href="#plans" onClick={fecharMenu}>Planos</a></li>
            
            <li className={`nav-dropdown ${dropdownAberto ? 'aberto' : ''}`}>
              <button 
                className="nav-dropdown-toggle" 
                aria-expanded={dropdownAberto} 
                onClick={() => setDropdownAberto(!dropdownAberto)}
              >
                Mais <i className="fa-solid fa-chevron-down"></i>
              </button>
              <ul className="nav-submenu">
                <li><a href="#curriculum" onClick={fecharMenu}>Experiência</a></li>
                <li><a href="#skills" onClick={fecharMenu}>Habilidades</a></li>
                <li><a href="#services" onClick={fecharMenu}>Serviços</a></li>
                <li><a href="#operation" onClick={fecharMenu}>Como Funciona</a></li>
                <li><a href="#differential" onClick={fecharMenu}>Diferenciais</a></li>
                <li><a href="#testimonials" onClick={fecharMenu}>Depoimentos</a></li>
                <li><a href="#faq" onClick={fecharMenu}>FAQ</a></li>
              </ul>
            </li>

            <li><a href="#contact" onClick={fecharMenu}>Contato</a></li>
          </ul>
        </nav>

        <div className="redes-header">
          <a href="https://github.com/Caique07sp" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://instagram.com/Caique_ofc8" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://linkedin.com/in/dev-caique-martins" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>

        <button 
          className={`nav-toggle ${menuAberto ? 'ativo' : ''}`} 
          aria-label="Abrir menu" 
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}