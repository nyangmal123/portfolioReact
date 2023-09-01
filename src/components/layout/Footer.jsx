import React from 'react';
import { styled } from 'styled-components';

function Footer() {
  return <Wrap>남마리나 포트폴리오 Copyright 2023. All rights reserved.</Wrap>;
}

export default Footer;

const Wrap = styled.div`
  width: 100%;
  height: 100px;
  bottom: 0px;
  position: relative;
  color: #838c95;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
