import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import ProductList from '../containers/ProductList';
import Dashboard from '../containers/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/products" component={ProductList} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
};

export default App;
