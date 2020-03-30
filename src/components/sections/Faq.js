import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import { Link } from 'gatsby';

const FAQS = [
  {
    title: 'What is Too Small to Save?',
    content: () => (
      <>
        Too Small to Save is a personal project to help small businesses. It
        aims to create a community that can support the small businesses and
        help them survive the crisis.
      </>
    ),
  },
  {
    title: 'Who is behind the project?',
    content: () => (
      <>
        My name is Ian and I'm both a Chief Financial Officer and Fullstack Web
        Dev. That's how you end up with a website that proposes to small
        businesses to make a budget. Disclaimer: I'm looking for a remote job as
        CFO, if someone out there is listening.
      </>
    ),
  },
  {
    title: 'Do we have to pay anything?',
    content: () => (
      <>
        It is 100% free. You don't have to pay anything. I pay for the hosting
        and different tools myself. I have a personal budget that tells me I can
        spend that much to help small businesses. And I'm glad to do it!
      </>
    ),
  },
  {
    title: 'How can we help?',
    content: () => (
      <>
        The first thing you can do is to{' '}
        <Link to="#share">share this website!</Link> {` `} with small businesses
        or people who might be interested to help. {` `} <br />
        <br />
        I'm also looking for a few volunteers to help expand the community.{' '}
        {` `}
        <Link to="#team">Check the team section here!</Link> for the
        volunteering opportunities. {` `}
        Or you just don't care and {` `}{' '}
        <Link to="access-form">Volunteer here directly!</Link>
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
