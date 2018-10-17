import React from "react";
import "./SearchHotels.css";
import { Amadeus } from "../../utils/Amadeus.js";
class SearchHotels extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      location:"DEL",
      checkin:"2018-12-15",
      checkout:"2018-12-16",
      autocomplete:[],
      term:""

    }
    this.handleLocation=this.handleLocation.bind(this)
    this.handleCheckInDate=this.handleCheckOutDate.bind(this)
    this.searchHotels=this.searchHotels.bind(this)
    this.handleCheckOutDate=this.handleCheckOutDate.bind(this)
    this.handleLocationTerm=this.handleLocationTerm.bind(this)

  }
  searchHotels() {
    this.props.searchHotels(
      this.state.location,
      this.state.checkin,
      this.state.checkout,
    );
  }
  handleLocationTerm(term) {
    Amadeus.autocomplete(this.state.term).then(autocomplete => {
      this.setState({
        autocomplete
      });
    });
  }
  handleCheckInDate(event) {
    this.setState({ date: event.target.value });
  }
  handleCheckOutDate(event) {
    this.setState({ date: event.target.value });
  }
  handleLocation(event) {
    let val;
    if (this.state && this.state.autocomplete) {
      const lab = this.state.autocomplete.filter(v => v.label === event.target.value)
      if (lab && lab.length > 0) {
        console.log(lab[0].value)
        val = lab[0].value
      }
    }

    this.setState({
      location: val,
      term: event.target.value,
    });
    this.handleLocationTerm();
    //  setTimeout(this.clearterm,0)
    //  this.clearterm()
  }

  render() {
    return (
      <div className="SearchBar">
        <datalist id="suggestion">
          {this.state.autocomplete &&
            this.state.autocomplete.map(values => (
              <option value={values.label}>
                {values.value}
              </option>
            ))}
        </datalist>
        <label htmlFor="Location">
          Location
        </label>
        <input
          type="text"
          placeholder="Enter Location"
          onChange={this.handleLocation}
          list="suggestion"
          id="Location"
        />
        <label htmlFor="doj">
          Checkin
        </label>
        <input placeholder="date" type="date" onChange={this.handleCheckInDate} id="doj"/>

            <label htmlFor="return">
            CheckOut
          </label>
          <input
            placeholder="CheckOut"
            type="date"
            onChange={this.handleCheckOutDate}
            id="return"
          />
        <button onClick={this.searchHotels}>SEARCH</button>
      </div>
    );
  }
}
export default SearchHotels
