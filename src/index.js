import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter , Route} from "react-router-dom";
import Navbarhomemade from "./components/navbar/navbarhomemade";
import Home from "./page/home";
import Connexion from "./components/connexion/Connection";

const Root =() => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Navbarhomemade} />
                <Route exact path="/login" component={Connexion} />
                <Route exact path="/home" component={Home} />
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<Root/>, document.getElementById('root'));
