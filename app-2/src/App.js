import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
constructor () {
  super();

  this.state = {
    favs: ["orange", "cats", "pizza", "toyota"]
  };
}

  render() {
    let myFavs = this.state.favs.map((element, index) => {
      return <h1 key= {index}>{element} </h1>;
    });

    return (
      <div className="App">{myFavs}

      </div>
    );
  }
}

export default App;
