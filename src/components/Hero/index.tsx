import styled from 'styled-components';
import React from 'react';


const HeroSection = styled.section`
  background-color: #f4f4f4;
  padding: 60px 20px;
  text-align: center;
`;


const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;


const HeroSubtitle = styled.h2`
  font-size: 2rem;
  color: #343a40;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 40px;
`;


const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

function Hero() {
  return (
    <HeroSection>
      <HeroTitle>Encontre sua Próxima Oportunidade</HeroTitle>
      <HeroSubtitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroSubtitle>
      <Form>
        <input type="text" placeholder="Pesquise vagas..." />
      </Form>
    </HeroSection>
  );
}

export default Hero;
