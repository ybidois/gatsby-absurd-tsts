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
        I'm looking for a few volunteers to help me manage the community and
        create online tools to help small businesses. Check the Team section for
        the volunteering opportunities. {` `}
        <Link to="#team">Team section here!</Link> And{' '}
        <Link to="access-form">Volunteer here!</Link>
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
