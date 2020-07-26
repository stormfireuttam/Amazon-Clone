import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from './StateProvider';
import {auth} from "./firebase";

function App() {
  const [{basket, user}, dispatch] = useStateValue();
  //useEffect <<<<<<<<<Powerful
  //Piece of code runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
    return () => {
      //any cleanup of code goes here
      unsubscribe();
    }
  }, []);

  console.log('USER is >>>>>>>>>>>>',user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          {/* Default Route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
