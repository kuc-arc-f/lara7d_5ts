import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Test from './components/Test';
/* tasks */
import tasks from './components/tasks/Index';
import taskShow from './components/tasks/Show';
import taskCreate from './components/tasks/Create';
import taskEdit from './components/tasks/Edit';

//
function App() {
  return (
    <div className="App bg-white">
      <Router>
      <Navbar />
      <div>
      <Route exact path='/' component={Home} />
      <Route path='/test' component={Test} />
      {/* tasks */}
      <Route path='/tasks' component={tasks} />
      <Route path='/task_create' component={taskCreate} />
      <Route path='/task_show/:id' component={taskShow} />
      <Route path='/task_edit/:id' component={taskEdit} />
      </div>
      </Router>
    </div>
  )
}
//
ReactDOM.render(
  <App />, document.getElementById('app')
)