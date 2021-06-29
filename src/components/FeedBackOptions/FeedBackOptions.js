import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedBackOptions.module.css';


const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={s.container}>
    {options.map(name => (
      <button className={s.button}
        key={name}
        type="button"
        onClick={() => onLeaveFeedback(name)}
      >
        {name}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;