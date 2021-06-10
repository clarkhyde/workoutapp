import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import LoginPage from './Components/LoginPage/LoginPage.js';
import ExerciseDetails from './Components/IndividualExercise/ExerciseDetails.js';
import EditExercisePage from './Components/EditExercisePage/EditExercisePage.js';
import AddNewExercisePage from './Components/AddNewExercisePage/AddNewExercisePage.js';

function App() {
  return (
    <body className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {LandingPage}/>
          <Route path = "/register" component = {RegistrationPage}/>
          <Route path = "/login" component = {LoginPage}/> 
          <Route path = "/exercise-details" component = {ExerciseDetails}/>
          <Route path = "/edit-exercise/" component = {EditExercisePage}/>
          <Route path = "/add-new-exercise" component = {AddNewExercisePage}/>
        </Switch>
      </BrowserRouter>
    </body>
  );
}

export default App;
