import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <Head>
      <Wrapper onClick={() => navigate('/')}>
        <Home src={require('../../assets/cat.png')} alt='home button' />
        <Title>portfolio</Title>
      </Wrapper>

      <Nav>
        <li>home</li>
        <li>introduce</li>
        <li>project list</li>
      </Nav>
    </Head>
  );
}

export default Header;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
`;

const Home = styled.img`
  display: flex;
  width: 120px;
  cursor: pointer;
  padding: 1rem;
  width: 8rem;
`;
const Title = styled.div`
  @font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'iceJaram-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/iceJaram-Rg.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  // font-family: 'PyeongChangPeace-Bold';
  font-family: 'iceJaram-Rg';
  color: #97a9bb;
  font-weight: 400;
  font-size: 2.5rem;
  font-weight: 700;

  cursor: pointer;
`;
const Nav = styled.nav`
  display: flex;
  width: 50%;
  justify-content: space-around;
  list-style-type: none;

  &:hover {
    cursor: pointer;
  }

  font-family: 'iceJaram-Rg';
  font-size: 30px;
  color: #97a9bb;
`;
