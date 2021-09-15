import './App.css';
import Card from './Card';
import {Switch,Route} from "react-router-dom";
import CountryDetails from './CountryDetails';

function App() {
  
  return (
    <>
    <Switch>
      <Route exact path="/" component={Card}/> 
      <Route path="/card" component={Card}/> 
      <Route exact path="/country/:countryName" component={CountryDetails}/> 
    </Switch>
   

    </>

    
    
  );
}

export default App;
