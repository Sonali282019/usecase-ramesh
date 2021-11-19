import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';




import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';

{/*import Applycc from './components/Applycc';

import Contact from './components/Contact';
import CreditCards from './components/CreditCards';
import About from './components/About';
import CheckStatus from './components/CheckStatus';
import Ccdetails from './components/Ccdetails';
import Visa from './components/Visa';

import PrivateRoute from './components/Route/PrivateRoute';*/}



function App() {
  

  const [Auth,setSuth]=useState(false);

  return (
    
    <Router>
    <Switch>
        <Route exact path ="/home" component={Home}/>
        <Route exact path="/" component={Login}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        
        
        {/*<Route path="/Applycc" component={Applycc}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/CreditCards" component={CreditCards}></Route> 
        <Route path="/About" component={About}></Route>
        <Route path="/CheckStatus" component={CheckStatus}></Route>
        <Route path="/Ccdetails" component={Ccdetails}></Route>
  <Route path="/Visa" component={Visa}></Route>*/}
        {/* <PrivateRoute exact path="/CreditCards" a={Auth} component={CreditCards} /> */}
        {/* <PrivateRoute exact path="/Dashboard" a={Auth} component={Dashboard} /> */}
        {/* <PrivateRoute exact path="/Applycc" a={Auth} component={Applycc} />
        <PrivateRoute exact path="/Contact" a={Auth} component={Contact} />
        <PrivateRoute exact path="/About" a={Auth} component={About} />
        <PrivateRoute exact path="/CheckStatus" a={Auth} component={CheckStatus} />
        <PrivateRoute exact path="/Ccdetails" a={Auth} component={Ccdetails} />
        <PrivateRoute exact path="/Visa" a={Auth} component={Visa} /> */}
      </Switch>
 </Router>
  );
}

export default App;
