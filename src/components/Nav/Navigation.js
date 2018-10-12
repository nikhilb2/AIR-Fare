import React from "react";
import "./Navigation.css";
import { Link } from 'react-router-dom'
const Navigation =() => (
  <nav>
  <ul className="nav justify-content-end ">
    <li className="navItem ">
      <Link to='/' ><div className="nav-link active text-white">Home</div></Link>
    </li>
    <li className="navItem" title="About">
      <Link to='/about'><div className="nav-link active text-white">About</div></Link>
    </li>
    <li className="navItem active" title="Services">
      <Link to='/services'><div className="nav-link active text-white">Services</div></Link>
    </li>
    </ul>
    </nav>
  )
export default Navigation
