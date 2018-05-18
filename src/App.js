import React, { Component } from "react";

import Typing from "./Typing";

import "./App.css";
// import giphy from "https://gph.is/2oW0XKw"

class App extends Component {
  gifs = [
    "https://media.giphy.com/media/5upWi4wtfGc7u/giphy.gif",
    "https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif",
    "https://media.giphy.com/media/xT0xeKwam7V2CPL4cg/giphy.gif",
    "https://media.giphy.com/media/AhjXalGPAfJg4/giphy.gif",
    "https://media.giphy.com/media/BemKqR9RDK4V2/giphy.gif",
    "https://media.giphy.com/media/l3vRbn3cDAwhfgaY0/giphy.gif",
    "https://media.giphy.com/media/1229mlttgo8aR2/giphy.gif",
    "https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif"
  ];

  constructor() {
    super();

    this.state = {
      index: 0,
      curImg: "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"
    };

    this.callback = this.callback.bind(this);
  }

  componentDidMount() {
    this.getImage();
  }

  callback() {
    console.log(this.state.index);
    let curIndex = this.state.index;
    let nextImg = this.gifs[curIndex + 1];
    console.log(curIndex);

    this.setState({
      curImg: nextImg,
      index: curIndex + 1
    });
  }

  getImage() {
    setInterval(this.callback, 10000);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="grid-container">
          <div className="grid-item-left">
            <img src={this.state.curImg} alt="giphy" />
            <div className="title">The Raging Typist</div>
            <div className="subtitle">Speed. Accuracy. Reflex.</div>
          </div>
          <div className="grid-item-right">
            <div className="grid-item-typing-canvas">
              <Typing />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
