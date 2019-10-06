import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//@ Auth
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//@ Layout
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
//@ Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <Navbar></Navbar>
                <Route exact path='/' component={Landing}></Route>
                <section className='container'>
                    <Switch>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </section>
            </Fragment>
        </Router>
    </Provider>
);

export default App;
