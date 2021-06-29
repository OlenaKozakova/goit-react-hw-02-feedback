import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children, title }) => (
  <div>
    <h2 className={s.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;