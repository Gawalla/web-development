import Navbar from './components/navbar.js'
import Login from './components/login.js'
import React, {useState} from 'react'
import './App.css';
const  App=() =>{
  const [islogin ,setlogin]=useState(true)
    function authorization(e){
        if(islogin){
         setlogin(false)
         
         e.preventDefault()
         return false
        }else{
            setlogin(true)
         e.preventDefault()
         return true
        }
    }
    
  return (
    <>
        <Navbar islogin={islogin?'signup':'login'} setloginFunc={authorization}/>
        <main className='main'>

        <Login heading={islogin?'welcome!':'create account'} subheading={islogin?'glad to see you':'To get started'} placeholder1={islogin?'username':'your first name'} inputbox={islogin?false:true}/>
        </main>
        </>
  );
}

export default App;
