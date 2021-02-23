import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";
import "./App.css";

import AuthProvider from "./contexts/authContext";

import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

import PrivateRoute from "./routeGuards/PrivateRoute";
import AuthRouteGuard from "./routeGuards/authRouteGuard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <AuthRouteGuard path="/login" component={Login} />
          <AuthRouteGuard path="/signup" component={Signup} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
