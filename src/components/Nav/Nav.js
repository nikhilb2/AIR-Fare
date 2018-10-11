import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Nav.css";
const Home = () => (
  <div>
  </div>
);

const About = () => (
  <div>
  </div>
);

const Services = ({ match }) => (
  <div>
    <h2>Services</h2>
    <ul className='liststyle'>
      <li>
        <Link to={`${match.url}/hotel`}>Hotel Booking</Link>
      </li>
      <li>
        <Link to={`${match.url}/flight`}>Flight Booking</Link>
      </li>
      <li>
        <Link to={`${match.url}/taxi`}>Taxi</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a service.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
class Nav extends React.Component {
  render(){
  return <Router>
    <div className="App-logo3">
      <ul className='liststyle'>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/Services"> Services </Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Services" component={Services} />
    </div>
  </Router>
}
}


export default Nav;
