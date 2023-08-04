import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { styled } from 'styled-components';

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
  background-color: #020a11;
`;
