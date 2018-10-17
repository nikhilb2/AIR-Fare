import React from 'react'
import SearchHotels from "../SearchHotels/SearchHotels.js";
import { Amadeus } from "../../utils/Amadeus.js";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loading:false,
      hotels:[]
    }
    this.searchHotelAmadeus=this.searchHotelAmadeus.bind(this)
  }
  searchHotelAmadeus(location, checkin, checkout) {
    this.setState({ loading: true });
    Amadeus.SearchHotels(location, checkin, checkout).then(
      hotels => {
        this.setState({
          hotels,
          loading: false,
        });
      }
    );
  }
  render() {
    console.log(this.state.hotels)
    return   <div>
        <h1>About Book My Chhutti</h1>
        <SearchHotels searchHotels={this.searchHotelAmadeus} />
      </div>
  }
}
export default About
