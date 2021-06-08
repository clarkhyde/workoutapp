import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
function App() {
  return (
    <body className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {LandingPage}/>
        </Switch>
      </BrowserRouter>
    </body>
  );
}

export default App;
