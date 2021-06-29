import React, { Component } from "react";

import FeedbackOptions from "./components/FeedBackOptions/FeedBackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };


  handleIncrement = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100,
    );

    return (<Section title="Please leave feedback">

      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={this.handleIncrement}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
      {countTotalFeedback === 0 && (
        <Notification message="No feedback yet" />
      )}
    </Section>
    )
  }
};



export default App;
