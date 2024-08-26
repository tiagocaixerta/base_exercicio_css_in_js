import styled from 'styled-components';

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Cabecalho = () => (
  <Header>
    <h1>EBAC Jobs</h1>
  </Header>
);

export default Cabecalho;
