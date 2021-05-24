import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Layout from './components/Layout'
import Login from './Login/Login'
import PersonalDetails from './pages/PersonalDetails';
import SkillSet from './pages/SkillSet';
import TeamDetails from './pages/TeamDetails';
import {useLocation} from 'react-router-dom'

function App() {
  let location=useLocation()
  
  return (
  <div>
      { location.pathname==='/login'?
      
     ( <Route path="/login" exact>
        {console.log(location.pathname)}
        <Login/>
      </Route>):(
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
      )}
   </div>
  );
}

export default App;

