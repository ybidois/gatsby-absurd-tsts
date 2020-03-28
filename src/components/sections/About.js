import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Governments can't move quickly</h2>
              <p>
                Let's face it. The global economy is taking a beating from the
                coronavirus.
                <br />
                <br />
                Governments all around the world are working on stimulus
                packages to get us out of the crisis.
                <br />
                <br />
                But they are too slow.
              </p>
              <br />
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>You are "too small to save"</h2>
              <p>
                If we could learn one thing from the 2008 crisis, it is that
                governments care about businesses "too big to fail".
                <br />
                <br />
                The end goal of stimulus packages is to protect the political
                and financial system, i.e., the big firms and institutions.
                <br />
                <br />
                Government relief has never been a great deal for small business
                owners. Never before. Not this time.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>So get a clear idea of your cash issues</h2>
              <p>
                Too many founders make this mistake. They have no idea how their
                cash will evolve in the next few months.
                <br />
                <br />
                With a simple budget, you get a clear view of future cash
                issues.
                <br />
                <br />
                That's why I offer this free and very simple budget template.
                <br />
                <br />
                <br />
                <StyledExternalLink href="https://docs.google.com/spreadsheets/d/1VsCYIlaniYQxOtfYIR78yrK55tC0sLR8iqlKnUZIPhA/edit?usp=sharing">
                  Fill the free budget template
                </StyledExternalLink>
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Then find ideas to make more cash</h2>
              <p>
                I created this community so small business owners around the
                world can help each other and share business ideas.
                <br />
                <br />
                That's why we offer this free and very simple budget template.
                <br />
                <br />
                <br />
                <StyledExternalLink href="https://docs.google.com/spreadsheets/d/1VsCYIlaniYQxOtfYIR78yrK55tC0sLR8iqlKnUZIPhA/edit?usp=sharing">
                  Fill the free budget template
                </StyledExternalLink>
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const StyledExternalLink = styled(ExternalLink)`
  color: white;
  background-color: #e53a40;
  text-decoration: none;
  border-radius: 8px;
  padding: 20px;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default About;
