import React from "react";
import "../App.css";

export default function Login(props) {
  return (
    <div className="container">
<<<<<<< HEAD
      <div><img src="/logo.png" className='loginLogo'/></div>
=======
      <div><img src="/web-development/logo.png" className='loginLogo'/></div>
>>>>>>> 546e3a5ebb405b48f0cf806ad03acd88d70aaee2
      <div className="heading">
        <h1>{props.heading}</h1>
        <h2>{props.subheading}</h2>
      </div>
      
      <div className="inputBox">
        <input type="text" placeholder={props.placeholder1} className="input" />
      </div>
      <div className={props.inputbox?"inputBox  ":'hidden'}>
        <input className="input" type="text" placeholder="your last name"/>
      </div>
      <div className="inputBox">
        <input type="text" placeholder="your email" className="input" />
      </div>
      <div className="inputBox">
        <input type="text" placeholder="your password" className="input" />
      </div>
      <div className="btn">{props.inputbox?"signup":'login'}</div>
      <p style={{ fontWeight: "bold", textAlign: "center" }}>or</p>
      <div className="iconBox">
        <span href='/' className="icon">G</span>
        <span href='/' className="icon">f</span>
      </div>
      <div>{!props.inputbox?"create an account":'do you have an account?'} <a href="/">{!props.inputbox?"signup":'login'}</a></div>
    </div>
  );
}
