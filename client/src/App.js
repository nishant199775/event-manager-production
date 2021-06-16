import React,{ useReducer, useState,createContext } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Navbar1 from './components/navbar';

import Attendence from './components/attendence';
import profile from './components/profile'
import home from './components/home';
import adminDash from './components/adminDash';

import createEvent from './components/Events';
import showEvents from './components/showEvents';
import signup from './components/signup';
import signin from './components/signin';
import Nav1 from './components/nav';
import registerForm from './components/registerForm';
import eventDetails from './components/eventDetails';
import paymentSuccess from './components/paymentSuccess'
import Unauthorized from './components/Unauthaorized';
import userDashboard from './components/userDash';
import {initialState,reducer} from '../src/reducers/RoleReducer'
import AboutUs from './components/aboutUs';
import registrantsDetails from './components/registrantsDetails';
import AllRegistrants from './components/allRegistrants';
export const RoleContext=createContext();

const App= (props) => {
  
  // const reducer
  
const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
      <RoleContext.Provider value={{state,dispatch}}>
    
    
    <Router>
    
    <Route path="/"  component={Navbar1}/>
      <Switch>
        <Route path="/" exact component={home}/>
        <Route path="/admin/dashboard" exact component={adminDash}/>
        <Route path="/attendence" exact component={Attendence}/>
        <Route path="/createEvent" exact component={createEvent}/>
        <Route path="/showEvent" exact component={showEvents}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/signin" exact component={signin}/>
        <Route path="/user/profile" exact component={profile}/>
        <Route path="/eventDetails" exact component={eventDetails}/>
        <Route path="/registerForm" exact component={registerForm}/>
        <Route path="/paymentSuccess" exact component={paymentSuccess}/>
        <Route path="/unauthorized" exact component={Unauthorized}/>
        <Route path="/user/Dashboard" exact component={userDashboard}/>
        <Route path="/aboutUs" exact component={AboutUs}/>
        <Route path="/registrant/details" exact component={registrantsDetails}/>
        <Route path="/allRegistrants" exact component={AllRegistrants}/>
        <Route path="/unauthorized" exact component={Unauthorized}/>
      </Switch>
    </Router>
    <Nav1/>
    </RoleContext.Provider>
    </div>
  );
}

export default App;
