import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Test from './components/Test';
//
function App() {
  return (
    <div className="App bg-white">
      <Router>
      <Navbar />
      <div>
      <Route exact path='/' component={Home} />
      <Route path='/test' component={Test} />

      </div>
      </Router>
    </div>
  )
}
//
ReactDOM.render(
  <App />, document.getElementById('app')
)