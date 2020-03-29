import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';
import styled from 'styled-components';

const SecondPage = () => (
  <Layout>
    <StyledContainer>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeIq607Ei5hdcBaGSxi9oZswuDUzfiaM60xMXvc0EDx_nqUyQ/viewform?embedded=true"
        width="640"
        height="1800"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Community Access Form"
      >
        Loading…
      </iframe>
      <p>Once you've submitted the form, You can close this page</p>
      <StyledLink to="/">Or go back to the homepage</StyledLink>
    </StyledContainer>
  </Layout>
);

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  align-items: center;
  justify-items: center;
  margin-bottom: 5%;
  p {
    font-size: 1.1em;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 1.1em;
  // text-decoration: none;
  // border-radius: 8px;
  // padding: 20px;

  &:hover {
    color: #8bd8ed;
`;

export default SecondPage;
