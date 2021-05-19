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
import UserDashboard from './Components/UserDashboard';
import EditUser from './Components/editUser';
import AdminEdit from './Components/AdminEdit';

function App() {
  return (
    <Container fluid className="App p-0">
      <Switch>
        <Route exact path="/" >
          <Login />
        </Route>
        <Route path="/register" >
          <Register />
        </Route>
        <Route exact path="/login/:username" >
          <UserDashboard />
        </Route>
        <Route path="/login/:username/edit" >
          <EditUser />
        </Route>
        <Route path="/login/:username/AdminEdit" >
          <AdminEdit />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
