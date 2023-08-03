import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

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
          <Title>{item.name}</Title>
          <Content>
            <ul>
              <li>{item.date}</li>
              <li>{item.info}</li>
              <li>
                {item.experience.split('.').map((line) => (
                  <>
                    {line}.
                    <br />
                  </>
                ))}
              </li>
              <li>{item.gitHub}</li>
              <li>{item.site}</li>
            </ul>
          </Content>
        </Wrapper>
      ))}
    </>
  );
}

export default Card;

const Wrapper = styled.div`
  background-color: #12212f;
  width: 450px;
  height: 300px;
  margin: 0 auto;
`;
const Title = styled.div`
  font-family: 'iceJaram-Rg';
  color: #4b6986;
  font-size: 50px;
  font-weight: bold;
`;
const Content = styled.div`
  font-family: 'Arita-dotum-Medium';
  color: #4b6986;
  //padding: 10px;
`;
