import {Router, Route,Switch,Link,NavLink} from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/ExpenseDashboardPage';
import Expense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/404Page';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history ={history}>
        <div>
            
            <Switch>
                <PublicRoute path="/" component={Login} exact={true}/>
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/create" component={Expense}/>
                <PrivateRoute path="/edit/:id" component={EditExpense}/>
                <Route component={NotFound}/> 
            </Switch>   
        </div>
    </Router>
);

export default AppRouter;
