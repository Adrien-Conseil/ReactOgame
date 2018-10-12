// import react
import React from 'react';
import {render} from 'react-dom';
//import * as serviceWorker from './serviceWorker';

// import router
//import {BrowserRouter, Match, Miss} from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import css
import './index.css';

//import component
import App from './App';
import Connexion from './components/connexion/Connection';
import NotFound from './components/notFound/notFound';


const Root =() => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Connexion} />
                    <Route path="/home" component={App} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

// render classique qui appel root
render(
    <Root />,
    document.getElementById('root')
);