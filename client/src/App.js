import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import LoginPage from './Components/LoginPage/LoginPage.js';

function App() {
  return (
    <body className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {LandingPage}/>
          <Route path = "/register" component = {RegistrationPage}/>
          <Route path = "/login" component = {LoginPage}/> 
        </Switch>
      </BrowserRouter>
    </body>
  );
}

export default App;
