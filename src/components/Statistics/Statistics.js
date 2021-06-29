import React from "react";
import PropTypes from 'prop-types';
import s from './Statistics.module.css';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2 className={s.title}>Statistics</h2>
    {total > 0 && (
      <div className={s.text}>
        <p className={s.good}>Good: {good}</p>
        <p className={s.neutral}>Neutral: {neutral}</p>
        <p className={s.bad}>Bad: {bad}</p>
        <p className={s.text}>Total: {total}</p>
        <p className={s.text}>Positive feedback: {positivePercentage}%</p>
      </div>
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;