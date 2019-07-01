import React from "react";

const NavBar = props => {
  return (
    <div>
      <h1>Lutrivia</h1>
      <button>New Game</button>
      <h3>Score: {props.score}</h3>
    </div>
  );
};

export default NavBar;
