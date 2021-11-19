import React from 'react'
import { useHistory } from "react-router-dom";
import './Login.css';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default function Login() 
{
    const history = useHistory();
   
    const handleLogin = (e) => {
        e.preventDefault();
        history.push("/home");
    }
      
    return (
        <div>
           <div class="user">
    <header class="user__header">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
        <h1 class="user__title">LOGIN</h1>
    </header>
    
    <form class="form">
        <div class="form__group">
            <input type="text" placeholder="Username" class="form__input" />
        </div>
        
        <div class="form__group">
            <input type="password" placeholder="Password" class="form__input" />
        </div>
        
        
        <button class="btn" type="button" onClick={handleLogin}>Login</button>
        
        
        <button class="btn" type="button"><Link to="/Register" style={{color: "White"}}>SignUp</Link></button>
    </form>
</div>
            </div>
    )
}
