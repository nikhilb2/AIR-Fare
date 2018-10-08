import React from "react";
import "./SearchBar.css";
import { Amadeus } from "../../utils/Amadeus.js";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "DEL",
      destination: "BOM",
      date: "2018-12-19",
      returnDate:"",
      term:"",
      term2:"",
      autocomplete:[],
      returnOrOneWay:true
    };
    this.search = this.search.bind(this);
    this.handleOrigin = this.handleOrigin.bind(this);
    this.handleDestination = this.handleDestination.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleAmadeusTerm = this.handleAmadeusTerm.bind(this);
    this.handleOneway=this.handleOneway.bind(this);
    this.handleReturnDateChange=this.handleReturnDateChange.bind(this)
  }
  search() {
    this.props.searchAmadeus(
      this.state.origin,
      this.state.destination,
      this.state.date,
      this.state.returnOrOneWay,
      this.state.returnDate
    );
  }

  handleKeypress(event) {
    if (event.key === "Enter") {
      this.search();
    }
  }
  handleOrigin(event) {
    console.log(event.target.value);
    this.setState({ origin: event.target.value, term:event.target.value });
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
  handleReturnDateChange(event) {
    this.setState({returnDate:event.target.value})
  }

  handleOneway(event) {
    console.log(event.target.value)
    let inputValue = event.target.value
    if (inputValue==="true") {
    this.setState({returnOrOneWay:true})} else{
      this.setState({returnOrOneWay:false})}
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
        <div>
        <fieldset className="fieldset">
            <legend>Search Options</legend>

            <div >
                <input type="radio" id="oneway"
                       name="flight" value="true" defaultChecked onChange={this.handleOneway}/>
                <label htmlFor="oneway" className="radiobutton" >One Way</label>
            </div>

            <div >
              <input type="radio" id="return"
                       name="flight" value="false" onChange={this.handleOneway}/>
                <label htmlFor="return" className="radiobutton">with Return</label>
            </div>
        </fieldset><br />
        </div>
        <p>Origin</p><input type="text"
          placeholder="Enter Origin"
          onChange={this.handleOrigin}
          onKeyPress={this.handleKeypress}
          list="suggestions"
          />
        <p>Destination</p><input type="text"
          placeholder="Enter Destination"
          onChange={this.handleDestination}
          onKeyPress={this.handleKeypress}
          list="suggestions"
          />
        <p>Date of Journey</p><input placeholder="date"
          type="date"
          onChange={this.handleDate}
          />

          {!this.state.returnOrOneWay && ['Return Date', <input placeholder="Return date"
            type="date"
            onChange={this.handleReturnDateChange} disabled={this.state.returnOrOneWay}
            />]}

        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}
export default SearchBar;
