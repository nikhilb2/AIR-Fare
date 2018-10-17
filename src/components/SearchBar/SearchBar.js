import React from "react";
import "./SearchBar.css";
import { Amadeus } from "../../utils/Amadeus.js";
var moment = require('moment');
//import { Control,FormControl } from 'react-bootstrap'
var today = new Date()
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "DEL",
      originName: "",
      destination: "BOM",
      date: "2018-12-19",
      returnDate: "",
      term: "",
      term2: "",
      autocomplete: [],
      autocompleteD: [],
      returnOrOneWay: true,
      currency: "USD",
      directFlight: false,
      adults: "1",
      childs: "0",
      infants: "0"
    };
    this.search = this.search.bind(this);
    this.handleOrigin = this.handleOrigin.bind(this);
    this.handleDestination = this.handleDestination.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleOriginTerm = this.handleOriginTerm.bind(this);
    this.handleDestinationTerm = this.handleDestinationTerm.bind(this);
    this.handleOneway = this.handleOneway.bind(this);
    this.handleReturnDateChange = this.handleReturnDateChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleDirectFlight = this.handleDirectFlight.bind(this);
    this.handleAdult = this.handleAdult.bind(this);
    this.handleChild = this.handleChild.bind(this);
    this.handleInfant = this.handleInfant.bind(this);
    //    this.clearterm=this.clearterm.bind(this)
    //    this.clearterm2=this.clearterm2.bind(this)
  }
  search() {
    this.props.searchAmadeus(
      this.state.origin,
      this.state.destination,
      this.state.date,
      this.state.returnOrOneWay,
      this.state.returnDate,
      this.state.currency,
      this.state.directFlight,
      this.state.adults,
      this.state.childs,
      this.state.infants
    );
  }

  handleOrigin(event) {
    let val;
    if (this.state && this.state.autocomplete) {
      const lab = this.state.autocomplete.filter(v => v.label === event.target.value)
      if (lab && lab.length > 0) {
        console.log(lab[0].value)
        val = lab[0].value
      }

    }

    this.setState({
      origin: val,
      term: event.target.value,
    });
    this.handleOriginTerm();
    //  setTimeout(this.clearterm,0)
    //  this.clearterm()
  }
  /*  clearterm() {
    var termLength=this.state.term
    if(termLength.length===3) {this.setState({term:""})}
  }
  clearterm2() {
    var term2Length=this.state.term2
    if(term2Length.length===3) {this.setState({term2:""})}
  }*/
  handleDestination(event) {
    let val;
    if (this.state && this.state.autocompleteD) {
      const lab = this.state.autocompleteD.filter(v => v.label === event.target.value)
      if (lab && lab.length > 0) {
        console.log(lab[0].value)
        val = lab[0].value
      }

    }
    this.setState({
      destination: val,
      term2: event.target.value
    });
    this.handleDestinationTerm();
    //  setTimeout(this.clearterm2,0)
    //    this.clearterm2()
  }
  handleDate(event) {
    this.setState({ date: event.target.value });
  }
  handleReturnDateChange(event) {
    this.setState({ returnDate: event.target.value });
  }
  handleCurrencyChange(event) {
    this.setState({ currency: event.target.value });
  }

  handleOneway(event) {
    console.log(event.target.value);
    let inputValue = event.target.value;
    if (inputValue === "true") {
      this.setState({ returnOrOneWay: true });
    } else {
      this.setState({ returnOrOneWay: false });
    }
  }

  handleOriginTerm(term) {
    Amadeus.autocomplete(this.state.term).then(autocomplete => {
      this.setState({
        autocomplete
      });
    });
  }
  handleDestinationTerm(term2) {
    Amadeus.autocomplete(this.state.term2).then(autocompleteD => {
      this.setState({
        autocompleteD
      });
    });
  }
  handleDirectFlight() {
    let toggleDirectFlight = this.state.directFlight;
    if (toggleDirectFlight) {
      this.setState({ directFlight: false });
    } else {
      this.setState({ directFlight: true });
    }
  }
  handleAdult(event) {
    this.setState({ adults: event.target.value });
  }
  handleChild(event) {
    this.setState({ childs: event.target.value });
  }
  handleInfant(event) {
    this.setState({ infants: event.target.value });
  }
  render() {
    let newDate = `${moment(today).format('YYYY')}-${moment(today).format('MM')}-${moment(today).format('DD')}`
    console.log(newDate);
    return (
      <div className="SearchBar">
        <datalist id="suggestions">
          {this.state.autocomplete &&
            this.state.autocomplete.map(values => (
              <option value={values.label}>
                {values.value}
              </option>
            ))}
        </datalist>
        <datalist id="suggestionsD">
          {this.state.autocompleteD &&
            this.state.autocompleteD.map(values => (
              <option value={values.label}>{values.value}</option>
            ))}
        </datalist>
        <div className="border rounded text-white px-2 text-size">
          <fieldset id="fieldset">
            <label htmlFor="fieldset" className="label-margin"><strong>Search Options</strong></label>
            <div>
            <div >
              <input
                type="radio"
                id="oneway"
                name="flight"
                value="true"
                defaultChecked
                onChange={this.handleOneway}
              />
              <label htmlFor="oneway" className="label-margin">
                One Way
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="return"
                name="flight"
                value="false"
                onChange={this.handleOneway}
              />
              <label htmlFor="return" className="label-margin">
                with Return
              </label>
            </div>
            </div>
              <div>
              <input
                type="checkbox"
                id="directFlight"
                name="directFlight"
                value="true"
                onChange={this.handleDirectFlight}
              />
              <label htmlFor="directFlight">
                Direct Flights Only
              </label>
            </div>

            <div>
              <select onChange={this.handleCurrencyChange}>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="UAH">UAH</option>
              </select>{" "}
              Select Currency
            </div>
          </fieldset>

        </div>
        <label htmlFor="origin">
          Origin
        </label>
        <input
          type="text"
          placeholder="Enter Origin"
          onChange={this.handleOrigin}
          list="suggestions"
          id="origin"
        />
        <label htmlFor="destination">
          Destination
        </label>
        <input
          type="text"
          placeholder="Enter Destination"
          onChange={this.handleDestination}
          list="suggestionsD"
          id="destination"
        />
        <label htmlFor="doj">
          Date of Journey
        </label>
        <input placeholder="date" type="date" onChange={this.handleDate} id="doj" min={newDate}/>

        {!this.state.returnOrOneWay && [
          <label htmlFor="return">
            Return Date
          </label>,
          <input
            placeholder="Return date"
            type="date"
            onChange={this.handleReturnDateChange}
            disabled={this.state.returnOrOneWay}
            id="return"
            min={this.state.date}
          />
        ]}
        <div className="border rounded padding">
        <p className="label-margin text-size2">Passengers</p>
        <div>
          <div className="select">
            <select onChange={this.handleAdult}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>{" "}
            Adults{" "}
          </div>
          <div className="select">
            <select onChange={this.handleChild}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>{" "}
            Children{" "}
          </div>
          <div className="select">
            <select onChange={this.handleInfant}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>{" "}
            Infants{" "}
          </div>
        </div>
        </div>
        <button onClick={this.search}>SEARCH</button>
      </div>
    );
  }
}
export default SearchBar;
