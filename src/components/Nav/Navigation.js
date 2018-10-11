import React from "react";
import "./Navigation.css";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*const Home = () => (
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
);*/
class Navigation extends React.Component {
  render(){
  return<ul className="nav justify-content-end ">
    <li className="navItem ">
      <a class="nav-link active color" href="/home">Home</a>
    </li>
    <li className="navItem color" title="About" href="/about">
      <a class="nav-link active color" href="/about">About</a>
    </li>
    <li className="navItem color" title="Services" href="/services">
      <a class="nav-link active color" href="/services">Services</a>
    </li>
    </ul>
  }
}
  //<Router>

  /*  <div className="App-logo3">
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

*/
export default Navigation
