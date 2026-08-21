import React, { useEffect, useRef } from 'react';
import '../ParticulasBg.css';

const ParticulasBg = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respeita a preferência de movimento reduzido do usuário
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const symbols = ['</>', '{ }', ';', '#', '( )', '01', '10', '=>', '&&', '/**/'];
    const total = window.innerWidth < 768 ? 10 : 20;

    // Limpa partículas anteriores caso o componente re-renderize
    container.innerHTML = '';

    for (let i = 0; i < total; i++) {
      const span = document.createElement('span');
      span.className = 'particula';
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];

      const left = Math.random() * 100;
      const duration = 14 + Math.random() * 16;
      const delay = Math.random() * -30;
      const size = 0.8 + Math.random() * 1.4;
      const drift = (Math.random() * 80 - 40).toFixed(0);

      span.style.left = `${left}%`;
      span.style.animationDuration = `${duration}s`;
      span.style.animationDelay = `${delay}s`;
      span.style.fontSize = `${size}rem`;
      span.style.setProperty('--drift', `${drift}px`);

      container.appendChild(span);
    }
  }, []);

  return <div ref={containerRef} className="particles-bg" />;
};

export default ParticulasBg;