import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Operation } from './components/Operation';
import { Differential } from './components/Differentials';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Plans } from './components/Plans';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import ParticulasBg from './components/ParticulasBg';

export default function App() {
  return (
    <>
      <div className="particles-bg"></div>
      <div className="luz-fundo" style={{ top: '2%', left: '-10%' }}></div>
      <div
        className="luz-fundo"
        style={{
          top: '25%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(18, 199, 174, 0.14) 0%, transparent 70%)'
        }}
      ></div>
      <ParticulasBg />
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Operation />
        <Differential />
        <Projects />
        <Testimonials />
        <Plans />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}