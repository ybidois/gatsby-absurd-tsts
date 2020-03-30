import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Ian Ismall',
    image: 'josh.jpg',
    role: 'Founder & CFO',
    link: null,
  },
  {
    name: 'Looking for a Volunteer',
    image: 'lisa.jpg',
    role: 'Community Manager',
    link: 'access-form',
  },
  {
    name: 'Looking for a Volunteer',
    image: 'ashlyn.jpg',
    role: 'Marketing',
    link: 'access-form',
  },
  {
    name: 'Looking for a Volunteer',
    image: 'todd.jpg',
    role: 'Designer',
    link: 'access-form',
  },
  {
    name: 'Looking for a Volunteer',
    image: 'martin.jpg',
    role: 'Frontend Dev',
    link: 'access-form',
  },
  {
    name: 'Looking for a Volunteer',
    image: 'rose.jpg',
    role: 'Backend Dev',
    link: 'access-form',
  },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="team" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>The Team</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, role, link }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <StyledInternalLink to={link}>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                    <Title>{name}</Title>
                    <Subtitle>{role}</Subtitle>
                  </StyledInternalLink>
                </div>
              );
            })}
          </TeamGrid>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

const StyledInternalLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: #e53a40;
    text-decoration: underline;
  }
`;

export default Team;
