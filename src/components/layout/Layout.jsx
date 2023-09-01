import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../atom';

function Layout({ children }) {
  return (
    <Back>
      <Header />
      <main>{children}</main>
      <Footer />
    </Back>
  );
}

export default Layout;

const Back = styled.div`
  background-color: ${() => {
    const isDark = useRecoilValue(darkmode);
    return isDark ? '#020a11' : 'white';
  }};
`;
