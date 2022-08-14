import React from "react";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
<Router>
      <Header />
      <Home />
      <Footer />
</Router>
    </div>
  );
}

export default App;
