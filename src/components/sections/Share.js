import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as FacebookLogo } from '@images/logos/facebook.svg';
import { ReactComponent as TwitterLogo } from '@images/logos/twitter.svg';
import { ReactComponent as WhatsAppLogo } from '@images/logos/whatsapp.svg';

import { Helmet } from 'react-helmet';

const LOGOS = [
  {
    logo: WhatsAppLogo,
    link: `https://wa.me/?text=I'm%20trying%20to%20help%20small%20businesses%20survive%20the%20coronavirus%20crisis.%20Are%20you%20going%20to%20join%20the%20fight%20with%20me?%20https://toosmalltosave.com`,
  },
  {
    logo: FacebookLogo,
    link:
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftoosmalltosave.com%2F&amp;src=sdkpreparse',
    target: '_blank',
    className: 'fb-xfbml-parse-ignore',
  },
  {
    logo: TwitterLogo,
    link: `https://twitter.com/share?url=https%3A%2F%2Ftoosmalltosave.com%2F&amp;text=I'm%20trying%20to%20help%20small%20businesses%20survive%20the%20coronavirus%20crisis.%20Are%20you%20going%20to%20join%20the%20fight%20with%20me?`,
    className: 'twitter-share-button',
    dataText: 'Join me in the fight to save small businesses!',
    dataUrl: 'https://toosmalltosave.com',
    dataHashtags: 'toosmalltosave',
    dataRelated: 'toosmalltosave',
  },
];

const UsedBy = () => (
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
      <>
        <Helmet>
          <script
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
        </Helmet>
        <Section id="brands" accent>
          <StyledContainer>
            <div>
              <h1>Tell your friends to join</h1>
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
      </>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 96px;
  justify-items: center;
  margin-top: 96px;
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
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  h1 {
    text-align: right;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
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

export default UsedBy;
