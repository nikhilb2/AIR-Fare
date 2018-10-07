import React from "react";
import "./SearchBar.css";
import App from "../../App"
import { Amadeus } from "../../utils/Amadeus.js";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "DEL",
      destination: "BOM",
      date: "2018-12-19",
      term:"",
      autocomplete:[]
    };
    this.search = this.search.bind(this);
    this.handleOrigin = this.handleOrigin.bind(this);
    this.handleDestination = this.handleDestination.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleAmadeusTerm = this.handleAmadeusTerm.bind(this)
  }
  search() {
    this.props.searchAmadeus(
      this.state.origin,
      this.state.destination,
      this.state.date
    );
  }

  handleKeypress(event) {
    if (event.key === "Enter") {
      this.search();
    }
  }
  handleOrigin(event) {
    console.log(event.target.value);
    this.setState({ term:event.target.value });
    this.handleAmadeusTerm()
  }
  handleDestination(event) {
    console.log(event.target.value);
    this.setState({ destination: event.target.value,term:event.target.value });
    this.handleAmadeusTerm()
      }
  handleDate(event) {
    console.log(event.target.value);
    this.setState({ date: event.target.value });
  }
  handleAmadeusTerm(term) {
    Amadeus.autocomplete(this.state.term).then(autocomplete => {
      this.setState({
        autocomplete
      })
    })
  }
  render() {
    console.log(this.state.autocomplete)
    return (
      <div className="SearchBar">
      <datalist id="suggestions">
        {this.state.autocomplete && this.state.autocomplete.map(values=><option value={values.value}>{values.label}</option>)}
        </datalist>
        <input
          placeholder="Enter Origin"
          onChange={this.handleOrigin}
          onKeyPress={this.handleKeypress}
          list="suggestions"
        />
        <input
          placeholder="Enter Destination"
          onChange={this.handleDestination}
          onKeyPress={this.handleKeypress}
          list="suggestions"
        />
        <input id="date" type="date" onChange={this.handleDate} />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}
export default SearchBar;
