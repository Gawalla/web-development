import React ,{useState} from "react";

import "../App.css";
export default function Navbar(props) {
    
  return (
    <div class="navbar">
<<<<<<< HEAD
      <div className="logo"><img src="/logo.png"/></div>
=======
      <div className="logo"><img src="/web-development/logo.png"/></div>
>>>>>>> 546e3a5ebb405b48f0cf806ad03acd88d70aaee2
      <ul>
        <li>
          <a href={props.url}>{props.name1}</a>
        </li>

        <li>
          <a href={props.url}>{props.name2}</a>
        </li>

        <li>
          <a href={props.url}>{props.name3}</a>
        </li>

        <li>
        <a onClick={props.setloginFunc}  href={props.url}>{props.islogin}</a>
        </li>
      </ul>
    </div>
  );
  
}
Navbar.defaultProps = {
  name1: "home",
  name2: "service",
  name3: "about us",
  url: "/",
}
