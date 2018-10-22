import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Connexion from './components/connexion/Connection';
import NotFound from './components/notFound/notFound';
import home from './page/home';
//import NavbarHome from "./components/navbar/navbar";
import Navbar from "./components/navbar/customNavBar";
import Navbarhomemade from './components/navbar/navbarhomemade';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbarhomemade/>
            <Route exact path="/" component={home} />
              <Route exact path="/login" component={Connexion} />
          </div>
        </Router>
    );
  }
}

export default App;
