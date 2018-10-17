import React from "react";
import "./Flights.css";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { Amadeus } from "../../utils/Amadeus.js";
var moment = require('moment');
var format1 ='MMMM Do YYYY';
var format2='HH:mm'
var aviationJson = require("aviation-json");
var airlines = aviationJson.airlines;
var air2 =Object.keys(airlines)
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "20px"
  }
});
class Flights extends React.Component {
    render() {
    console.log(airlines)
    return (
      <div>
      {this.props.flights ? (
        this.props.flights.map(results => {
          return (
            <Paper className={this.props.classes.root} elevation={5}>
              <div className="fare">Fare {this.props.currency1} {results.fare.total_price}</div>{" "}
              {results.itineraries.map(results2 => (
                <div className="combine">
                  {" "}
                  <div>********</div>
                  Duration {results2.outbound.duration}{" "}
                  {results2.outbound.flights.map(result3 => (
                    <div>
                      Flight {" "} {airlines[air2.filter(key=>airlines[key].IATA===result3.operating_airline)]?airlines[air2.filter(key=>airlines[key].IATA===result3.operating_airline)].name:" "} {" "}
                      <strong>
                        {result3.operating_airline} {result3.flight_number}
                      </strong>{" "}
                      From <strong>{result3.origin.airport}</strong> Departure
                      on {moment(result3.departs_at).format(format1)} at {moment(result3.departs_at).format(format2)} To >>>>>>>{" "}
                      <strong>{result3.destination.airport}</strong> Arrival
                      on {moment(result3.arrives_at).format(format1)} at {moment(result3.arrives_at).format(format2)}
                      <br />
                    </div>
                  ))}
                  <br />
                  {results2.inbound?<div><strong>Return flight</strong>
                  <br /> Duration {results2.inbound.duration}
                  {results2.inbound.flights.map(result4 => (
                    <div>
                      Flight{" "}
                      <strong>
                        {result4.operating_airline} {result4.flight_number}
                      </strong>{" "}
                      From <strong>{result4.origin.airport}</strong> Departure on
                      {moment(result4.departs_at).format(format1)} at {moment(result4.departs_at).format(format2)} To >>>>>>>{" "}
                      <strong>{result4.destination.airport}</strong> Arrival
                      on {moment(result4.arrives_at).format(format1)} at {moment(result4.arrives_at).format(format2)}
                      <br />
                    </div>
                  ))}</div>:""}
                </div>
              ))}
            </Paper>
          );
        })
      ) : (
        <div>No results</div>
      )}
      </div>
    );
  }
}
export default withStyles(styles)(Flights);
