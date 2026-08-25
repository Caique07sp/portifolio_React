import React, { useState } from 'react';
import '../Animations.css';
import Animations from './Animations';

export function Contact() {
  const [status, setStatus] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setStatus('');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xrbkldqv', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        form.reset();
      } else {
        setStatus('Ocorreu um erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      setStatus('Erro de conexão. Verifique sua internet.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <section id="contact">
      <Animations animacao='surgir-baixo'>
        <div className="container-contato">
          <h1 className="titulo-secao" data-eyebrow="Vamos conversar">Contato</h1>
          <div className="wrapper-contato">
            <div className="infos-contato">

              <div className="item-contato">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <span>E-mail:</span>
                  <p><a href="mailto:Caiquemar47@gmail.com">Caiquemar47@gmail.com</a></p>
                </div>
              </div>

              <div className="item-contato">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <span>Telefone:</span>
                  <p><a href="https://wa.me/5519989469124?text=Ola%20Caique%2C%20vim%20pela%20seu%20site%20e%20tenho%20interesse%20em%20ser%20servi%C3%A7o!" target="_blank" rel="noopener noreferrer">(19) 19989469124</a></p>
                </div>
              </div>

              <div className="item-contato">
                <i className="fa-brands fa-linkedin"></i>
                <div>
                  <span>LinkedIn:</span>
                  <p><a href="https://www.linkedin.com/in/dev-caique-martins" target="_blank" rel="noopener noreferrer">in/dev-caique-martins</a></p>
                </div>
              </div>

              <div className="item-contato">
                <i className="fa-brands fa-github"></i>
                <div>
                  <span>GitHub:</span>
                  <p><a href="https://github.com/Caique07sp" target="_blank" rel="noopener noreferrer">github/Caique07sp</a></p>
                </div>
              </div>

            </div>

            <div className="bloco-formulario">
              <form onSubmit={handleSubmit} className="formulario-contato">
                <input type="text" name="name" placeholder="Seu Nome" required />
                <input type="email" name="email" placeholder="Seu E-mail" required />
                <textarea name="message" placeholder="Como posso te ajudar?" required></textarea>
                <button type="submit" className="botao-enviar" disabled={carregando}>
                  {carregando ? 'Enviando...' : <>Enviar Mensagem <i className="fa-solid fa-paper-plane"></i></>}
                </button>
                {status && <p className="status-envio">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </Animations>
    </section>
  );
}