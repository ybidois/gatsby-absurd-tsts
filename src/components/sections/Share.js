import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as FacebookLogo } from '@images/logos/fbcolor.svg';
import { ReactComponent as TwitterLogo } from '@images/logos/twcolor.svg';
import { ReactComponent as WhatsAppLogo } from '@images/logos/wacolor.svg';

const LOGOS = [
  {
    logo: WhatsAppLogo,
    link: `https://wa.me/?text=There%20is%20a%20community%20helping%20small%20businesses%20to%20survive%20the%20coronavirus%20crisis.%20Check%20it%20out!%20https://toosmalltosave.com`,
  },
  {
    logo: FacebookLogo,
    link: `https://www.facebook.com/dialog/share?app_id=152925082646115&display=popup&href=https%3A%2F%2Ftoosmalltosave.com%2F&redirect_uri=https%3A%2F%2Ftoosmalltosave.com%2F&amp&quote=There%20is%20a%20community%20helping%20small%20businesses%20to%20survive%20the%20coronavirus%20crisis.%20Check%20it%20out!`,
    // 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftoosmalltosave.com%2F&amp;src=sdkpreparse',
    target: 'popup',
    className: 'fb-xfbml-parse-ignore',
  },
  {
    logo: TwitterLogo,
    link: `https://twitter.com/intent/tweet?text=There%20is%20a%20community%20helping%20small%20businesses%20to%20survive%20the%20coronavirus%20crisis.%20Check%20it%20out!&url=https://toosmalltosave.com&original_referer=https%3A%2F%2Ftwitter.com%2Fshare%3Fref_src%3Dtwsrc%255Etfw`,
    className: 'twitter-share-button',
    dataText: 'Join me in the fight to save small businesses!',
    dataUrl: 'https://toosmalltosave.com',
    dataHashtags: 'toosmalltosave',
    dataRelated: 'toosmalltosave',
  },
];

const Share = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="share" accent>
        <StyledContainer>
          <div>
            <h1>Tell small businesses about us!</h1>
            <LogoGrid>
              {LOGOS.map(
                ({
                  logo,
                  link,
                  target,
                  className,
                  dataText,
                  dataUrl,
                  dataHashtags,
                  dataRelated,
                }) => (
                  <ExternalLink
                    key={link}
                    href={link}
                    target={target}
                    className={className}
                    text={dataText}
                    url={dataUrl}
                    hastags={dataHashtags}
                    related={dataRelated}
                  >
                    {logo()}
                  </ExternalLink>
                )
              )}
            </LogoGrid>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 96px;
  justify-items: center;
  margin-top: 68px;
  margin-left: 20%;

  a {
    display: flex;
    justify-content: center;
    svg {
      width: 50%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    margin-left: 0%;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  h1 {
    text-align: center;
    margin-left: 30%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    h1 {
      text-align: center;
      margin-left: 0%;
    }
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default Share;
