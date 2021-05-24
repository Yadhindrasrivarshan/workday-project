import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
const Login1=(props)=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const {email, setEmail, password, setPassword,handleLogin,handleSignup, hasAccount,setHasAccount,emailError, passwordError}=props
    return(
        <Grid>
            <Paper elevation={4} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Employee Log In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <Typography>{emailError}</Typography>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Typography>{passwordError}</Typography>

                 
                <div style={{marginBottom:"300px"}}
style={{borderTop:"20px"}}>
                     {hasAccount?(
                     <>
                     <Button variant="contained" style={btnstyle}color="primary" fullWidth onClick={handleLogin}>Sign in</Button>
                     <p>
                        Dont have an account?{"  "}
                        <span style={{color:"red",cursor:"pointer"}} onClick={()=>setHasAccount(!hasAccount)}>Sign up</span>
                     </p>
                     </>
                     ):(
                        <>
                        <Button variant="contained" style={btnstyle} color="primary" fullWidth onClick={handleSignup}>Sign Up</Button>
                        <p>
                          Have an account?{"  "}
                          <span style={{color:"red",cursor:"pointer"}} onClick={()=>setHasAccount(!hasAccount)}>Sign in</span>
                        </p>
                        </>

                     )}
                 </div>
            </Paper>
        </Grid>
    )
}

export default Login1