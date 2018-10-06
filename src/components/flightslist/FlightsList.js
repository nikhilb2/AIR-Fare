import React from 'react';
import './FlightsList.css';
import Flights from '../flights/Flights';
class FlightsList extends React.Component {
  render() {
    return (<div className="BusinessList">
    <Flights />
    </div>)
  }
}
export default FlightsList
