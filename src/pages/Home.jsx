import { styled } from 'styled-components';
import React from 'react';
import ScrollTop from '../components/common/ScrollTop';
import Layout from '../components/layout/Layout';
import Card from '../components/common/Card';

import { BsGithub } from 'react-icons/bs';
import { CgBrowser } from 'react-icons/cg';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../atom';

function Home() {
  return (
    <Layout>
      <Wrapper id='home'>
        <Name>
          안녕하세요, <br />
          프론트엔드 개발자 <br />
          남마리나입니다.
        </Name>
        <ScrollTop />
      </Wrapper>

      <IntroWrapper id='introduce'>
        <IntroTitle>Introduce.</IntroTitle>
        <ContentWrapper>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <StackLogo>
              <img
                src={require('../assets/react.png')}
                alt='react'
                style={{
                  maxWidth: '2.7rem',
                  objectFit: 'contain',
                  borderRadius: '0.5rem',
                }}
              />
              <img
                src={require('../assets/recoil.png')}
                alt='recoil'
                style={{ maxWidth: '2.5rem', objectFit: 'contain' }}
              />
              <img
                src={require('../assets/reactquery.png')}
                alt='react-query'
                style={{ maxWidth: '2.5rem', objectFit: 'contain' }}
              />
              <img
                src={require('../assets/styledcomponent.png')}
                alt='styled-component'
                style={{ maxWidth: '2.5rem', objectFit: 'contain' }}
              />
            </StackLogo>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '6rem',
              }}
            >
              <a
                href={'https://github.com/nyangmal123'}
                target='_blank'
                rel='noopenner noreferrer'
                alt='깃허브 주소'
              >
                <BsGithub size='2.5rem' color='#5e4c32' />
              </a>
              <a
                href={'https://velog.io/@yangmal'}
                target='_blank'
                rel='noopenner noreferrer'
                alt='블로그 주소'
              >
                <CgBrowser size='2.5rem' color='#5e4c32' />
              </a>
            </div>
          </div>
          <Content>
            안녕하세요, 프론트엔드 개발자 남마리나입니다. <br />
            논리적이고 깔끔한 코드를 작성하는 개발자가 되고 싶습니다. <br />
            빠르게 성장하기 위해 자기개발과 스터디를 꾸준히 하고 있습니다.
          </Content>
        </ContentWrapper>
      </IntroWrapper>

      <ProjectWrapper>
        <ProjectTitle>Project.</ProjectTitle>
        <CardWrapper id='project'>
          <Card />
        </CardWrapper>
      </ProjectWrapper>
    </Layout>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
    url(${require('../assets/bluecat.png')});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-position: center;
`;
const Name = styled.div`
  font-family: 'iceJaram-Rg';
  font-size: 5rem;
  color: #5e4c32;
  padding: 2rem;
`;

const IntroWrapper = styled.div`
  padding: 2rem;
`;
const IntroTitle = styled.div`
  font-family: 'iceJaram-Rg';
  font-size: 4rem;
  color: ${() => {
    const isDark = useRecoilValue(darkmode);
    return isDark ? '#b3c6e7' : '#5e4c32';
  }};
  padding-bottom: 2rem;
`;
const ContentWrapper = styled.div`
  background-color: #b3c6e7;
  border-radius: 20px;
  padding: 3rem;
`;
const StackLogo = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 40%;

  @keyframes blink-effect {
    50% {
      opacity: 0.3;
    }
  }
  animation-name: blink-effect 3s step-end infinite;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5e4c32;

  font-size: ${(props) => (props.name ? '4rem' : '2.5rem')};
  font-family: ${(props) =>
    props.name ? 'iceJaram-Rg' : 'Arita-dotum-Medium'};
  line-height: 160%;

  margin-bottom: ${(props) => (props.next ? '1rem' : 0)};
`;

const ProjectWrapper = styled.div`
  padding: 2rem;
  flex-wrap: wrap;
`;
const ProjectTitle = styled(IntroTitle)``;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 90vw;
  min-height: 70vh;
`;
