import React, { useEffect, useRef, useState } from 'react';
import '../Animations.css';

const Animations = ({ children, animacao = 'surgir-baixo', delay = 0 }) => {
  const elementoRef = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          // Se quiser que a animação rode apenas uma vez, desative o observador aqui:
          observador.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Dispara quando 15% do elemento aparecer na tela
      }
    );

    if (elementoRef.current) {
      observador.observe(elementoRef.current);
    }

    return () => {
      if (elementoRef.current) {
        observador.unobserve(elementoRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementoRef}
      className={`animar-box ${animacao} ${visivel ? 'visivel' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Animations;