import React, { Component } from "react";

class Question extends Component {
  state = {
    answer: null
  };

  handleClick = e => {
    this.refs.trueBtn.setAttribute("disabled", "disabled");
    this.refs.falseBtn.setAttribute("disabled", "disabled");
    if (
      e.target.innerText.toLowerCase() === String(this.props.question.answer)
    ) {
      this.setState({
        answer: true
      });
      this.props.addOneToScore();
    }
  };

  renderButtons = () => {
    if (!this.state) {
    }
  };
  render() {
    return (
      <div>
        <h1>{this.props.question.text}</h1>
        <button
          ref="trueBtn"
          className={this.state.answer ? "buttonCorrect" : "buttonWrong"}
          onClick={this.handleClick}
        >
          True
        </button>
        <button
          ref="falseBtn"
          className={this.state.answer ? "buttonCorrect" : "buttonWrong"}
          onClick={this.handleClick}
        >
          False
        </button>
      </div>
    );
  }
}
export default Question;
