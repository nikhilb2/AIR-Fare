import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      destination: "",
      date: ""
    };
    this.search = this.search.bind(this);
    this.handleOrigin = this.handleOrigin.bind(this);
    this.handleDestination = this.handleDestination.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
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
    this.setState({ origin: event.target.value });
  }
  handleDestination(event) {
    console.log(event.target.value);
    this.setState({ destination: event.target.value });
  }
  handleDate(event) {
    console.log(event.target.value);
    this.setState({ date: event.target.value });
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter Origin"
          onChange={this.handleOrigin}
          onKeyPress={this.handleKeypress}
        />
        <input
          placeholder="Enter Destination"
          onChange={this.handleDestination}
          onKeyPress={this.handleKeypress}
        />
        <input id="date" type="date" onChange={this.handleDate} />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}
export default SearchBar;
