import React from 'react';
import { FAQContent } from '../../data/dataStore';
import Container from '../../Container/Container.js';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQContent.title} image={FAQContent.image} />
    <p>{FAQContent.description}</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.string,
};

export default FAQ;