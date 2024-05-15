import React ,{useState} from "react";

import "../App.css";
export default function Navbar(props) {
    
  return (
    <div class="navbar">
<<<<<<< HEAD
      <div className="logo"><img src="/jOmgOesl.png"/></div>
=======
      <div className="logo"><img src="j0mg0esl.png"/></div>
>>>>>>> b941fe23e2fd424b3d2495c0d88934bdd4d26d19
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
