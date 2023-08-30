import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';
import { GoSun } from 'react-icons/go';
import { useRecoilState } from 'recoil';
import { darkmode, scroll } from '../../atom';

function Header() {
  const homeRef = useRef(null);
  const introduceRef = useRef(null);
  const projectRef = useRef(null);

  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onIntroduceClick = () => {
    introduceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onProjectClick = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isDark, setIsDark] = useRecoilState(darkmode);
  const onDarkMode = () => {
    setIsDark(!isDark);
  };

  const [isScroll, setIsScroll] = useRecoilState(scroll);
  const onScroll = () => {
    if (window.scrollY > 30) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll); //clean up
    };
  }, []);
  return (
    <Head>
      <Wrapper id='top'>
        <Home src={require('../../assets/cat.png')} alt='home button' />
        <Title>portfolio</Title>
      </Wrapper>

      <Nav>
        {isDark ? (
          <GoSun
            onClick={onDarkMode}
            size='2rem'
            style={{ color: '#97a9bb' }}
          />
        ) : (
          <MdOutlineDarkMode
            onClick={onDarkMode}
            size='2rem'
            style={{ color: '#97a9bb' }}
          />
        )}
        <li onClick={onHomeClick}>
          <a href='#home'>home</a>
        </li>
        <li onClick={onIntroduceClick}>
          <a href='#introduce'>introduce</a>
        </li>
        <li onClick={onProjectClick}>
          <a href='#project'>project list</a>
        </li>
      </Nav>
    </Head>
  );
}

export default Header;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  position: fixed;
  z-index: 9999;

  visibility: ${(isScroll) => (isScroll ? 'visible' : 'hidden')};
  background-color: rgba(255, 255, 255, 0.8);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
    font-family: 'iceJaram-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/iceJaram-Rg.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'iceJaram-Rg';
  color: #97a9bb;
  font-weight: 400;
  font-size: 2.5rem;
  font-weight: 700;

  cursor: pointer;
`;
const Nav = styled.nav`
  display: flex;
  width: 35%;
  justify-content: space-around;
  list-style-type: none;
  color: #97a9bb;

  &:hover {
    cursor: pointer;
  }

  font-family: 'iceJaram-Rg';
  font-size: 2rem;

  a:link {
    color: red;
    text-decoration: none;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }
`;
