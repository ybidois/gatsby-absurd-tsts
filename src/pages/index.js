import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Share from '@sections/Share';
import Join from '@sections/Join';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Share />
    <Join />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
