import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CounterPage from './Pages/Counter';
import UsersPage from './Pages/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="/">
            <CounterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
