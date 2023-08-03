import React from 'react';
import { styled } from 'styled-components';
import Layout from '../components/layout/Layout';
import Card from '../components/common/card';

function Main() {
  return (
    <Layout>
      <Wrapper>
        <StackImg />
        <Content name next>
          남마리나
        </Content>
        <Content>
          눈썰미 있게 잘 배웁니다! 잘 배워서 빠르게 성장하겠습니다. <br />
          개발 하다가 막히면 일단 자리에서 일어납니다. <br />
          산책이든 음료를 타든 뭔가를 하다보면 자연스레 환기가 되면서 해결책이
          떠오르더라고요. <br />
        </Content>
      </Wrapper>
      <CardWrapper>
        <Card />
      </CardWrapper>
    </Layout>
  );
}

export default Main;

const Wrapper = styled.div`
  background-color: #15314e;
  width: 800px;
  height: 400px;
  margin: 0 auto;
  padding: 20px;
`;
const StackImg = styled.img``;
const Content = styled.div`
  font-family: 'Arita-dotum-Medium';
  color: ${(props) => (props.name ? '#97a9bb' : '#8a98a7')};
  margin-bottom: ${(props) => (props.next ? '10px' : 0)};
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
