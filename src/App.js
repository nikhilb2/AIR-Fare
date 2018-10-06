import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import SearchBar from "../src/components/SearchBar/SearchBar.js";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
//import FlightsList from "../src/components/flightslist/FlightsList.js";
import { Amadeus } from "./utils/Amadeus.js";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin:"20px",
  },
});
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
          <img src={logo} className="App-logo2" alt="logo" />
          Low Cost Air Fare
        </header>
        <br />
        <div className="App-center">
          <SearchBar searchAmadeus={this.searchAmadeus} />
          <br />
        </div>
        {this.state.flights?this.state.flights.map(results => {
          return (
            <Paper className={this.props.classes.root} elevation={5}>
              <div className="fare">Fare $ {results.fare.total_price}</div>{" "}
              {results.itineraries.map(results2 => (
                <div>
                  {" "}
                  <div>********</div>
                  Duration {results2.outbound.duration}{" "}
                  {results2.outbound.flights.map(result3 => (
                    <div>
                      Flight <strong>{result3.operating_airline} {result3.flight_number}</strong> From{" "}
                      <strong>{result3.origin.airport}</strong> Departure Time{" "}
                      {result3.departs_at} To >>>>>>>{" "}
                      <strong>{result3.destination.airport}</strong> Arrival
                      Time {result3.arrives_at}
                      <br />
                    </div>
                  ))}
                </div>
              ))}
            </Paper>);
        }):<div>No results</div>}
      </div>
    );
  }
}

export default withStyles(styles)(App);
