import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <Head>
      <Wrapper onClick={() => navigate('/')}>
        <Home src={require('../../assets/jiji.png')} />
        <Title>남마리나 포트폴리오</Title>
      </Wrapper>

      <Nav>
        <li>자기소개</li>
        <li>프로젝트 리스트</li>
        <li>메뉴3</li>
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
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Home = styled.img`
  display: flex;
  width: 120px;
`;
const Title = styled.div`
  @font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  font-family: 'PyeongChangPeace-Bold';
  color: #97a9bb;
  font-weight: 400;
  font-size: 30px;
`;
const Nav = styled.nav`
  display: flex;
  height: 5rem;
  .li {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
