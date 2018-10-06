import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import SearchBar from "../src/components/SearchBar/SearchBar.js";
//import FlightsList from "../src/components/flightslist/FlightsList.js";
import { Amadeus } from "./utils/Amadeus.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      loading: false
    };
    this.searchAmadeus = this.searchAmadeus.bind(this);
  }
  searchAmadeus(origin, destination, date) {
    this.setState({ loading: true });
    Amadeus.search(origin, destination, date).then(flights => {
      //const res = []
      //flight.forEach(item => item.forEach(item1 => item1.forEach(item2 => res.push(item2))))
      //  console.log(res)

      this.setState({
        flights,
        loading: false
      });
    });
  }
  sortResults() {
    this.state.flights.map(results => {
      return <div>{results}</div>;
    });
  }
  render() {
    console.log(this.state.flights);
    return this.state.loading ? (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        loading
      </div>
    ) : (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Low Cost Air Fare</h3>  
        </header>
        <br />
        <div className="App-center">
          <SearchBar searchAmadeus={this.searchAmadeus} />
          <br />
        </div>
        {this.state.flights.map(results => {
          return (
            <div className="results">
              <div className="fare">Fare $ {results.fare.total_price}</div>{" "}
              {results.itineraries.map(results2 => (
                <div>
                  {" "}
                  <div>********</div>
                  Duration {results2.outbound.duration}{" "}
                  {results2.outbound.flights.map(result3 => (
                    <div>
                      Aircraft {result3.aircraft} From{" "}
                      <strong>{result3.origin.airport}</strong> Departure Time{" "}
                      {result3.departs_at} To >>>>>>>{" "}
                      <strong>{result3.destination.airport}</strong> Arrival
                      Time {result3.arrives_at} Flight Number{" "}
                      {result3.flight_number}
                      <br />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
