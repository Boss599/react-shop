import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


const App = () =>{
    return (
        <BrowserRouter>
        <switch>
            <Layout>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login"component={Login} />
                <Route exact path="recovey-password" component={RecoveryPassword} />
                <Route component={NotFound} />
            </Layout>
        </switch>


        </BrowserRouter>

        );
        
}


export default App;