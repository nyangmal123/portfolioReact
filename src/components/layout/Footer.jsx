import React from 'react';
import { styled } from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { CgBrowser } from 'react-icons/cg';

function Footer() {
  return (
    <Wrap>
      남마리나 포트폴리오 Copyright 2023. All rights reserved.
      <a
        href={'https://github.com/nyangmal123'}
        target='_blank'
        rel='noopenner noreferrer'
      >
        <BsGithub size='20px' color='#8a98a7' />
      </a>
      <a
        href={'https://velog.io/@yangmal'}
        target='_blank'
        rel='noopenner noreferrer'
      >
        <CgBrowser size='20px' color='#8a98a7' />
      </a>
    </Wrap>
  );
}

export default Footer;

const Wrap = styled.div`
  width: 100%;
  height: 100px;
  bottom: 0px;
  position: relative;
  color: #838c95;
  margin: 0 auto;
`;
