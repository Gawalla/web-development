import React ,{useState} from "react";
import gallary from  "../images/gallary";
import "../App.css";
export default function Navbar(props) {
    
  return (
    <div class="navbar">
<<<<<<< HEAD
      <div className="logo"><img src={gallary.logo}/></div>
=======
      <div className="logo"><img src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png"/></div>
>>>>>>> 60879cf7c21cbe196d866ea8bc6d9829baf4924b
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
