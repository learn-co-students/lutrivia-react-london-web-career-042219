import React, { Component } from "react";
import data from "./data";
import QuestionsContainer from "./components/QuestionsContainer";
import NavBar from "./components/NavBar";
import FormScore from "./components/FormScore";

class App extends Component {
  state = {
    questions: data,
    score: 1
  };

  render() {
    return (
      <div>
        <NavBar score={this.state.score} />
        <QuestionsContainer questions={this.state.questions} />
        <FormScore />
      </div>
    );
  }
}

export default App;
