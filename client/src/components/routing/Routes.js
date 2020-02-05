import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Dashboard from '../dashboard/Dashboard';
import AddTime from '../dashboard/AddTime';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/add-task" component={AddTime} />
                <Route exact component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes
