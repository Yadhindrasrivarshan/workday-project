import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {app} from '../mockfirebase.js'
import { AuthContext } from "./Auth.js";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import './login.css'

const Login = ({ history }) => {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      console.log(event.target.elements);
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const Redirect_Signup=()=>{
     return <Redirect to='/'/>
       
  }

  const  currentUser  = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    // <div>
    //   <h1>Log in</h1>
    //   <form onSubmit={handleLogin}>
    //     <label>
    //       Email
    //       <input name="email" type="email" placeholder="Email" />
    //     </label>
    //     <label>
    //       Password
    //       <input name="password" type="password" placeholder="Password" />
    //     </label>
    //     <button type="submit">Log in</button>
       
    //   </form>
    //   <button onClick={event =>  window.location.href='/signup'}>Click here to Signup</button>
    // </div>
  
                    <div className="center">
                        <h1 style={{fontSize:"30px",color:"dodgerblue"}}>Employee Login</h1>
                         <form method="post" onSubmit={handleLogin}>
                         <div className="txt_field">
                         <input name="email" type="text" required/>
                            <span></span>
                            <label>Username</label>
                            </div>
                            <div className="txt_field">
                            <input name="password" type="password" required/>
                            <span></span>
                            <label>Password</label>
                            </div>
                            <input type="submit" value="Login"/>
                            <div className="signup_link">
                            Not a member? <a href="/signup">Signup</a>
                         </div>
                         </form>
                    </div>
    
  );
};

export default withRouter(Login);

