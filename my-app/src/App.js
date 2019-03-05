import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './component/Acceuil/Aceuil';
import About from './component/Apropos/apropos';
import Contact from './component/contact/contact';
import './App.css';

import './component/Acceuil/acceuil.css';
import './component/Apropos/apropos.css';
import './component/contact/contact.css';

class App extends Component {
  render() {
    return (
        <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/acceuil">Acceuil</Link>
                    </li>
                    <li>
                      <Link to="/about">apropos</Link>
                    </li>
                    <li>
                      <Link to="/contact">contact</Link>
                    </li>
                  </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/acceuil" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </div>
        </Router>
    );
  }
}

export default App;