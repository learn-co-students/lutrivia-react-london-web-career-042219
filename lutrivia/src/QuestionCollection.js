import React, { Component } from "react";
import Question from "./Question";

class QuestionCollection extends Component {
  renderQuestion = () =>
    this.props.questions.map(q => (
      <Question question={q} addOneToScore={this.props.addOneToScore} />
    ));

  render() {
    return <div>{this.renderQuestion()}</div>;
  }
}
export default QuestionCollection;
