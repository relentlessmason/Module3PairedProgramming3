import React from "react";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>

<Router>
      <Header />
   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contactus" component={ContactUs} />
  
 </Switch>
      <Footer />
 </Router> 
    </div>
  );
}

export default App;
