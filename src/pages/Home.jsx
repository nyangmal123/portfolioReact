import { styled } from 'styled-components';
import React from 'react';
import ScrollTop from '../components/common/ScrollTop';

function Home() {
  return (
    <>
      <Wrapper>
        <Name>
          안녕하세요, <br />
          프론트엔드 개발자 <br />
          남마리나입니다.
        </Name>
        <ScrollTop />
      </Wrapper>
    </>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background: url(${require('../assets/bluecat.png')});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(183, 198, 247, 0.8));
`;
const Name = styled.div`
  font-family: 'iceJaram-Rg';
  font-size: 5rem;
  color: #5e4c32;
`;
