import { styled } from '@tanstack/react-query-devtools/build/lib/utils';
import React from 'react';
import Scroll from '../components/common/Scroll';

function Home() {
  return (
    <>
      <Wrapper src={require('../assets/workingcat.avif')}>
        <Name>
          안녕하세요, <br />
          프론트엔드 개발자 <br />
          남마리나입니다.
        </Name>
        <Scroll />
      </Wrapper>
    </>
  );
}

export default Home;

const Wrapper = styled.div`
  size: 100%;
`;
const Name = styled.div`
  font-family: 'iceJaram-Rg';
  font-size: 15rem;
  color: #97a9bb;
`;
