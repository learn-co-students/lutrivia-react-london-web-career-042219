import React, { Component } from "react";

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("clicked");
    return <h1> {`${e.target[0].value} you scored ${this.props.score}!`}</h1>;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <input type="submit" />
        </form>
        {this.handleSubmit}
      </div>
    );
  }
}
export default Form;
