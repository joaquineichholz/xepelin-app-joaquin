import logo from './../logo.svg';
import './../css/App.css';
import Login from './Login';
import Sheet from './Sheet';
import { Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Route exact path="/"component={Login}/>
      <Route exact path="/home"component={Sheet}/>
    </div>
  );
}
