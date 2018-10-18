import React, { Component } from "react";
import logo2 from "./bmc-2.png"
import "./App.css";
import Navigation from "./components/Nav/Navigation.js"
import Main from "./components/Nav/Main"
//import {NavRender} from "./components/Nav/Navigation.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="bg-light borderradius"><div  className="d-flex justify-content-around" >
            <div className="p-2 bd-highlight">
              <img src={logo2}  alt="logo"  className="App-logo2" />
              </div>
              <div className="p-2 bd-highlight text-align navback rounded ">
              <Navigation  />
              </div>
              </div></div>

          </header>
                <Main />
      </div>
    );
  }
}
export default App;
