import React from 'react'
import SearchBar from "../SearchBar/SearchBar.js";
import { Amadeus } from "../../utils/Amadeus.js";
import Slideshow from "../SlideShow/SlideShow"
import Flights from "../flights/Flights.js";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      loading: false,
      autocomplete: [],
      currency1:"",
    };
    this.searchAmadeus = this.searchAmadeus.bind(this);
  }
  searchAmadeus(origin, destination, date, returnOrOneWay, returnDate,currency,directFlight,adults,childs,infants) {
    this.setState({ loading: true });
    Amadeus.search(origin, destination, date, returnOrOneWay, returnDate,currency,directFlight,adults,childs,infants).then(
      flights => {
        this.setState({
          flights,
          loading: false,
          currency1:currency,
          });
      }
    );
  }

  render(){
    return(
  <div>
  <br />
    <h3>Welcome bookmychhutti.com!</h3>
    <div className="displayin"><SearchBar searchAmadeus={this.searchAmadeus} loading={this.state.loading} />
    <div className="slideshow"><Slideshow /></div></div>
    <Flights currency1={this.state.currency1} flights={this.state.flights} totalItenraries={this.state.flights.length} queryCounter={this.state.queryCounter} queryCounterAdd={this.queryCounterAdd}/>
    <p>Book My Chhutti is committed to serve customers with professional care and give them optimum satisfaction. We inspire people to travel and explore to further enrich their lives. We aim to meet and supersede all tourism requirements by using advance technology to ensure a fast and efficient service to our clients.</p>
  </div>
)}
}
export default Home
