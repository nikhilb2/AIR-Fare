import React from "react";
import "./Flights.css";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
var moment = require('moment');
var format1 ='MMMM Do YYYY';
var format2='HH:mm'
var airlines = require('airlines-iata-codes');
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "20px"
  }
});
class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      noOfResults:20
    }
    this.loadMoreResults=this.loadMoreResults.bind(this)
  }
  loadMoreResults() {
    this.setState({noOfResults:this.state.noOfResults+20})
  }
    render() {
      const {noOfResults} = this.state
    //  console.log('totalItenraries'+totalItenraries)
    return (
      <div>
      {this.props.flights ? (
        this.props.flights.slice(0, noOfResults - 1).map(results => {
            return (
            <Paper className={this.props.classes.root} elevation={5}>
              <div className="fare">Fare {this.props.currency1} {results.fare.total_price}</div>{" "}
              {results.itineraries.map(results2 => {
                //const totalItenraries=this.props.totalItenraries
                //console.log(totalItenraries)
                //const noOfpage=Math.floor(totalItenraries/20);
                //console.log(noOfpage+1);
                //console.log(queryCounter);
                //console.log(this.state.noOfResults)
                return(
                <div className="combine">
                  {" "}
                  <div>********</div>
                  Duration {results2.outbound.duration}{" "}
                  {results2.outbound.flights.map(result3 => {
                    const airlineName = airlines.getAirlineName(result3.operating_airline)
                     return(
                    <div>
                      {typeof airlineName==='string' && airlineName} {" "}
                      <strong>
                        {result3.operating_airline} {result3.flight_number}
                      </strong>{" "}
                      From <strong>{result3.origin.airport}</strong> Departure
                      on <strong>{moment(result3.departs_at).format(format1)} at {moment(result3.departs_at).format(format2)}</strong> To >>>>>>>{" "}
                      <strong>{result3.destination.airport}</strong> Arrival
                      on <strong>{moment(result3.arrives_at).format(format1)} at {moment(result3.arrives_at).format(format2)}</strong>
                      <br />
                    </div>
                  )})}
                  <br />
                  {results2.inbound?<div><strong>Return flight</strong>
                  <br /> Duration {results2.inbound.duration}
                  {results2.inbound.flights.map(result4 => {
                    const airlineNameReturn=airlines.getAirlineName(result4.operating_airline)
                    return(
                    <div>
                      {typeof airlineNameReturn==='string' && airlineNameReturn} {" "}
                      <strong>
                        {result4.operating_airline} {result4.flight_number}
                      </strong>{" "}
                      From <strong>{result4.origin.airport}</strong> Departure on
                      {moment(result4.departs_at).format(format1)} at {moment(result4.departs_at).format(format2)} To >>>>>>>{" "}
                      <strong>{result4.destination.airport}</strong> Arrival
                      on {moment(result4.arrives_at).format(format1)} at {moment(result4.arrives_at).format(format2)}
                      </div>
                  )})}</div>:""}
                  <div><button>Book Now</button></div><br />
                </div>
              )})}
            </Paper>

          );
        })
      ) : (
        <div>No results</div>
      )}
      {this.props.flights.length>0?<button onClick={this.loadMoreResults}>Load More</button>:""}
      </div>
    );
  }
}
export default withStyles(styles)(Flights);
