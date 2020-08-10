import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import ProductList from '../containers/ProductList';
import Dashboard from '../containers/Dashboard';
import ShowProduct from '../containers/ShowProduct';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/products/:id" component={ShowProduct} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
};

export default App;
