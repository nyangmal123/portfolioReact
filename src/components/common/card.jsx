import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { CgBrowser } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data.map((item) => (
        <Wrapper key={data.id}>
          <Title>
            <div>{item.name}</div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '5rem',
              }}
            >
              <a href={item.gitHub} target='_blank' rel='noopenner noreferrer'>
                <BsGithub size='2rem' color='#5e4c32' />
              </a>
              <a href={item.site} target='_blank' rel='noopenner noreferrer'>
                <CgBrowser size='2rem' color='#5e4c32' />
              </a>
            </div>
          </Title>
          <Content>
            <ul>
              <li>
                {item.info} ({item.date})
              </li>
              <br />
              <li>
                기술 스택: <br />
                {item.stack}
              </li>
              <br />
              <li>
                기능 구현:
                <br />
                {item.feature.split(',').map((line) => (
                  <>
                    {line}
                    <br />
                  </>
                ))}
              </li>
            </ul>
          </Content>
        </Wrapper>
      ))}
    </>
  );
}

export default Card;

const Wrapper = styled.div`
  background-color: #b3c6e7;
  max-width: 30vw;
  max-height: 66vh;

  border-radius: 20px;
  padding: 1.5rem;
`;
const Title = styled.div`
  font-family: 'iceJaram-Rg';
  color: #5e4c32;
  font-size: 2.5rem;
  font-weight: 800;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.div`
  font-family: 'Arita-dotum-Medium';
  font-size: 1.2rem;
  color: #5e4c32;

  word-break: keep-all;
  line-height: 160%;

  padding-top: 1rem;
  max-height: 25rem;
  min-height: 20rem;
  overflow: auto;

  /* 스크롤바 설정*/
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* 스크롤바 막대 설정*/
  ::-webkit-scrollbar-thumb {
    background: #5e4c32;
    border-radius: 25px;
  }

  /* 스크롤바 뒷 배경 설정*/
  ::-webkit-scrollbar-track {
    background-color: #b3c6e7;
  }
`;
