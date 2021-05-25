import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {app} from '../mockfirebase.js'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="center">
    <h1 style={{fontSize:"30px",color:"dodgerblue"}}>Employee SignUp</h1>
     <form method="post" onSubmit={handleSignUp}>
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
        Have a Login? <a href="/login">SignIn</a>
     </div>
     </form>
</div>
  );
};

export default withRouter(SignUp);
