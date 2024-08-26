import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const HeroTitle = styled.h2`
  font-size: 2rem;
  color: #343a40;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const Hero = () => (
  <Form>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </Form>
);

export default Hero;
