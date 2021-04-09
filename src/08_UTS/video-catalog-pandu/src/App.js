import React from 'react';
import './App.css';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Video from './pages/Video/video';
import Contact from './pages/Contact/contact';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about"  component={About}/>
            <Route path="/video"  component={Video}/>
            <Route path="/contact"  component={Contact}/>
          </Switch>
    </Router>
  );
}

export default App;
