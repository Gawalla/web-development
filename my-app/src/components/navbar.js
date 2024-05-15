import React ,{useState} from "react";

import "../App.css";
export default function Navbar(props) {
    
  return (
    <div class="navbar">
      <div className="logo"><img src="/web-development/logo.png"/></div>
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
