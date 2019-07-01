import React, { Component } from "react";
import QuestionCollection from "./QuestionCollection";
import Form from "./Form";
import Data from "./data";
import "./index.css";

class App extends Component {
  state = {
    questions: Data.questions,
    score: 0
  };

  addOneToScore = () => {
    console.log("added one to score");
    this.setState({
      score: this.state.score + 1
    });
  };

  render() {
    return (
      <div>
        <h1> Lutrivia</h1>
        <button> New Game </button>
        <h3>Score: {this.state.score}</h3>
        <QuestionCollection
          questions={this.state.questions}
          addOneToScore={this.addOneToScore}
        />
        <Form score={this.state.score} displayResults={this.displayResults} />
      </div>
    );
  }
}

export default App;
