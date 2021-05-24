import React from 'react';
import './login.css'


const Mainlogin = (props) => {
    const {email, setEmail, password, setPassword,handleLogin,handleSignup, hasAccount,setHasAccount,emailError, passwordError}=props
    return (
        <section className="login">
             <div className="loginContainer">
                 <label>Username</label>
                 <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <p className="errorMsg">{emailError}</p>
                 <label>Password</label>
                 <input type="password" autoFocus required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                     {hasAccount?(
                     <>
                     <button className="btn2" onClick={handleLogin}>Sign in</button>
                     <p>
                        Dont have an account?
                        <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span>
                     </p>
                     </>
                     ):(
                        <>
                        <button className="btn2" onClick={handleSignup}>Sign Up</button>
                        <p>
                          Have an account? 
                          <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span>
                        </p>
                        </>

                     )}
                 </div>
             </div>
        </section>
    )
}

export default Mainlogin
