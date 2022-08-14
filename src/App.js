import React from "react";

import "./App.css";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <div>
      <Header />
      
      <Router>
      <Switch>

        <Route exact path="/"><Home /></Route>
        <Route path="/contactus"><ContactUs /></Route>
        
      </Switch>
      </Router>
<br></br>
      <Footer />

    </div>
  );
}

export default App;
