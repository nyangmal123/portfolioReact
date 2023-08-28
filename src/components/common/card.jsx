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
        <Wrapper>
          <Title>
            <div>{item.name}</div>
            <div>
              <a href={item.gitHub} target='_blank' rel='noopenner noreferrer'>
                <BsGithub size='20px' color='#8a98a7' />
              </a>
              <a href={item.site} target='_blank' rel='noopenner noreferrer'>
                <CgBrowser size='20px' color='#8a98a7' />
              </a>
            </div>
          </Title>
          <Content>
            <ul>
              <li>{item.date}</li>
              <br />
              <li>{item.info}</li>
              <br />
              <li>
                {item.experience.split('.').map((line) => (
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
  width: 30vw;
  height: 40vh;

  border-radius: 20px;

  margin: 0 auto;
  padding: 20px;
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
  color: #5e4c32;
  font-size: 2.5rem;
  font-weight: 800;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.div`
  font-family: 'Arita-dotum-Medium';
  color: #5e4c32;
`;
