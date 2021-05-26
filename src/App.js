import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import React,{useState} from 'react';
import Layout from './components/Layout'
import Login from './Login-fire/Login.js'
import PersonalDetails from './pages/PersonalDetails';
import SkillSet from './pages/SkillSet';
import TeamDetails from './pages/TeamDetails';
import {useLocation} from 'react-router-dom'
import PrivateRoute from './Login-fire/PrivateRoute';
import Home from './Login-fire/Home';
import SignUp from './Login-fire/SignUp';
import {app} from './mockfirebase'


function App() {
  let location=useLocation()

  var user=app.auth().currentUser
  // let [toggle,setToggle]=useState(false)
  let toggle

 if(user){
   toggle=true
 }
 else{
    toggle=false
 }

  
  return (
  <div>
      { location.pathname==='/login' &&   <Route exact path="/login" component={Login} />}
      <div>
      {location.pathname==='/' && !user &&  <Route exact path="/" component={()=>(<Redirect to='/login' />)}/>}
      </div>
      { location.pathname==='/signup' &&   <Route exact path="/signup" component={SignUp} />}
      
      {location.pathname!=='/login' && location.pathname!=='/signup' && 
           <Layout>
           <Switch>
             <Route exact path="/">
               <PersonalDetails/>
             </Route>
             <Route path="/skillset" exact>
               <SkillSet/>
             </Route>
             <Route path="/teamdetails" exact> 
               <TeamDetails/>
             </Route>
           </Switch>
           </Layout>
          }

   </div>
  );
}
//{location.pathname==='/' && <Route path='/login' component={()=><Redirect to='/login'/>}}

export default App;

