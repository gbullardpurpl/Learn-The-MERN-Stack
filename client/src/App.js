import React, { Component } from 'react';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import AppFooter from './components/AppFooter';

//import { Provider } from 'react-redux';
//import store from '../store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
        /*
        * Removed StrictMode from wrapping entire App due to findDOMNode deprecation
        * until a better solution is found to actually fix the issue, GBJ 06-10-22
        */
        <div className="App">
          <React.Fragment>
            <AppNavbar />
            <ShoppingList />
            <AppFooter />
          </React.Fragment>
        </div>
    );
  }
}

export default App;
