import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import { Link } from 'gatsby';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>
                The coronavirus
                <br />
                will kill many
                <br />
                small businesses
                <br />
              </h1>
              <br />
              <h2>Unless,</h2>
              <br />
              <p>
                They have a clear idea of their cash issues.
                <br />
                <StyledExternalLink href="https://docs.google.com/spreadsheets/d/1VsCYIlaniYQxOtfYIR78yrK55tC0sLR8iqlKnUZIPhA/edit?usp=sharing">
                  Get the free budget template &nbsp;&#x2794;
                </StyledExternalLink>
                <br />
                <br />
                They find ideas to make more cash.
                <br />
                <StyledExternalLink href="https://toosmalltosave.com/access-form">
                  Join the community to share ideas &nbsp;&#x2794;
                </StyledExternalLink>
                <br />
                <br />
                They know we can help. <br />
                <StyledInternalLink to="#share">
                  Tell small businesses about us &nbsp;&#x2794;
                </StyledInternalLink>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  p {
    line-height: 1.5em;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  font-size: 0.9em;
  color: white;
  background-color: #e53a40;
  text-decoration: none;
  border-radius: 8px;
  padding: 3px;
  border: solid 1px #e53a40;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

const StyledInternalLink = styled(Link)`
  font-size: 0.9em;
  color: white;
  background-color: #e53a40;
  text-decoration: none;
  border-radius: 8px;
  padding: 3px;
  border: solid 1px #e53a40;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
