import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

export default function App() {
  const [{}, dispatch] = useStateValue();

  // Check if the user is login once during the initial render
  useEffect(() => {
    

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // if the user is logged in 
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // if the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  // React Router for the creation of Single Page Application 
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <BackToTop />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


