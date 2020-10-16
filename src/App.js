import React from "react";
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TaskList from "./components/TaskList";

import { Container } from "bloomer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Task Management</h1>
      </header>
      <Router>
        <Switch>
            <Route path="/" exact component={TaskList}/>
            <Route path="/:task_number">
              <Container>
                <TaskList />
              </Container>
            </Route>
            <Route path="*">
              <h2>Page Not Found!</h2>
              <Link to="/">Return to Homepage</Link>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
