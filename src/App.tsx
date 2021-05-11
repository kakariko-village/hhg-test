import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Row, Col } from 'antd';
import Header from './Components/Header';
import CounterPage from './Pages/Counter';
import UsersPage from './Pages/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
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
      </div>
    </Router>
  );
}

export default App;
