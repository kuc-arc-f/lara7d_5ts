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
/* user */
import userCreate from './components/user/Create';
import userLogin from './components/login';
/*  notes */
import notes from './components/notes/Index';
import noteShow from './components/notes/Show';
import noteCreate from './components/notes/Create';
import noteEdit from './components/notes/Edit';

//
function App() {
  return (
  <div className="App bg-white">
    <Router>
    <Navbar />
    <div>
    <Route exact path='/' component={Home} />
    <Route path='/test' component={Test} />
    {/* users */}
    <Route path='/user_create' component={userCreate} />
    <Route path='/login' component={userLogin} />      
    {/* tasks */}
    <Route path='/tasks' component={tasks} />
    <Route path='/task_create' component={taskCreate} />
    <Route path='/task_show/:id' component={taskShow} />
    <Route path='/task_edit/:id' component={taskEdit} />
    {/* notes */}
    <Route path='/notes' component={notes} />
    <Route path='/note_create' component={noteCreate} />
    <Route path='/note_show/:id' component={noteShow} />
    <Route path='/note_edit/:id' component={noteEdit} />
    </div>
    </Router>
  </div>
  )
}
//
ReactDOM.render(
  <App />, document.getElementById('app')
)