import React from 'react';
import Body from './Task1/Resume/Body';
import Header from './Task1/Resume/Header';
import Temperatureconverter from './Task2/Temperatureconverter/Temperatureconverter';
import Input from './Task2/userprofile/Input';
import Zomatoapi from './Task3/Zomatoapi';
import Navigation from './Components/Navigation';
import './Task2/userprofile/bootstrap/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path='/resume' component={Header} />
        <Route path='/resume' component={Body} />
        <Route path='/Zomatoapi' component={Zomatoapi} />
        <Route path='/temperatureconverter' component={Temperatureconverter} />
        <Route path='/userprofile' component={Input} />

      </div>
    </Router>
  
  
  );
}

export default App;
