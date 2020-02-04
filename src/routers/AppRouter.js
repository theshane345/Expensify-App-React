import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import React from 'react';
import Dashboard from '../components/ExpenseDashboardPage';
import Expense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/HelpPage';
import NotFound from '../components/404Page';
import NavHeader from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavHeader/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/create" component={Expense}/>
                <Route path="/edit/:id" component={EditExpense}/>
                <Route path="/help" component={Help}/>
                <Route component={NotFound}/> 
            </Switch>   
        </div>
    </BrowserRouter>
);

export default AppRouter;
