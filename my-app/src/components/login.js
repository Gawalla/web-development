import React,{useEffect, useState} from "react";
import "../App.css";
import gallary from "../images/gallary.js";
import { Link } from "react-router-dom";
import { context } from "../context/context.js";
export default function Login(props) {
  const [form,setform]=useState({
    username:'',
    email:'',
    password:''
  })
  function handleform(e){
    setform({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  
  async function handlesubmit(params) {
    await  fetch('http://localhost:5000/',{
        method:'POST',
        body:JSON.stringify({
          usename:form.username,
          email:form.email,
          password:form.password
        }),
        headers:{
          'Content-type':'application/json; charset=UTF-8'
        }
      }).catch(err=>
        console.log(err))
      
    }
    
  return (
  

      <div className="container">
        <div>
          <img src={gallary.logo} className="loginLogo" />
        </div>
        <div className="heading">
          <h1>{props.heading}</h1>
          <h2>{props.subheading}</h2>
        </div>
        <form>
        <div className="inputBox">
        <input type="text" name="username" value={form.username}  onChange={(e)=>handleform(e)} placeholder="your name" className="input" />
        </div>
        <div className="inputBox">
          <input type="email" name="email" value={form.email}  onChange={(e)=>handleform(e)} placeholder="your email" className="input" />
        </div>
        <div className="inputBox">
          <input type="text" name="password" value={form.password}  onChange={(e)=>handleform(e)} placeholder="your password" className="input" />
        </div>
        <submit onClick={handlesubmit} className="btn">{props.inputbox ? "signup" : "login"}</submit>
        </form>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>or</p>
        <div className="iconBox">
          <span href="/" className="icon">
            G
          </span>
          <span href="/" className="icon">
            f
          </span>
        </div>
        <div>
          {!props.inputbox ? "create an account" : "do you have an account?"}{" "}
          <a href="/">{!props.inputbox ? "signup" : "login"}</a>
        </div>
      </div>
           
  );
}

