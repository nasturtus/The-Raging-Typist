import React, { Component } from "react";
import ReactCountdownClock from "react-countdown-clock";

import "./Typing.css";

import seed_words from "./words";
class Typing extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      words: seed_words,
      curPos: 0,
      curWord: seed_words[0]
    };
  }

  handleOnChange = e => {
    e.preventDefault();
    this.setState({ input: e.target.value });
    if (this.state.curWord === e.target.value) {
      let curPos = this.state.curPos;
      let nexPos = curPos + 1;
      this.setState({
        input: "",
        curPos: nexPos,
        curWord: seed_words[nexPos]
      });
    }
  };

  exitGame = () => {
    console.log(this.state.curPos);
    alert("Game Over!!! Your score: " + this.state.curPos);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="curWord">{this.state.curWord}</div>
        <input
          type="text"
          size="30"
          value={this.state.input}
          onChange={this.handleOnChange}
          autoFocus
        />
        <div className="typedInput">{this.state.input}</div>
        <div className="score">
          Score: <span className="scoreNumber">{this.state.curPos}</span>
        </div>
        <div className="clock">
          <span className="secondsLeft">Seconds left</span>

          <ReactCountdownClock
            seconds={60}
            color="navy"
            alpha={0.9}
            size={200}
            onComplete={this.exitGame}
          />
        </div>
      </div>
    );
  }
}

export default Typing;
