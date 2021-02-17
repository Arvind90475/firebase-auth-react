import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";

import "./App.css";

import Navbar from "./components/navbar";
import Home from "./components/Home";
import InputForm from "./components/InputForm";
import Login from "./components/Login";

import AuthProvider from "./contexts/authContext";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./privateRoutes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/new" component={InputForm} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
