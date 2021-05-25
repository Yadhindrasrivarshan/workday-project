import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Layout from './components/Layout'
import Login from './Login-fire/Login.js'
import PersonalDetails from './pages/PersonalDetails';
import SkillSet from './pages/SkillSet';
import TeamDetails from './pages/TeamDetails';
import {useLocation} from 'react-router-dom'
import PrivateRoute from './Login-fire/PrivateRoute';
import Home from './Login-fire/Home';
import SignUp from './Login-fire/SignUp';

function App() {
  let location=useLocation()
  
  return (
  <div>
      { location.pathname==='/login' &&   <Route exact path="/login" component={Login} />}
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

export default App;

