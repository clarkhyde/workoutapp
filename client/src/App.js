import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';

function App() {
  return (
    <body className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {LandingPage}/>
          <Route exact path = "/register" component = {RegistrationPage}/>
        </Switch>
      </BrowserRouter>
    </body>
  );
}

export default App;
