import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <Layout>
      <Header />
      <main>{children}</main>
      <Footer />
    </Layout>
  );
}

export default Layout;
