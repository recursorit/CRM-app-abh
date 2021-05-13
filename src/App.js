import React from 'react'
import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <Container fluid className="App">
      <Switch>
        <Route exact path="/" >
          <Login />
        </Route>
        <Route path="/register" >
          <Register />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
