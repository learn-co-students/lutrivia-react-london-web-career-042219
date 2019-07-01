import React, { Component } from "react";

class QuestionCard extends Component {
  render() {
    return (
      <div>
        <p>{this.props.question.text}</p>
        <button value="True">True</button>
        <button value="False">False</button>
      </div>
    );
  }
}

export default QuestionCard;
