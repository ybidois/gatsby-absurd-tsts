import React from 'react';

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

export default SecondPage;
