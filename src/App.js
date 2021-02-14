import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";

import Navbar from "./components/navbar";
import Home from "./components/Home";
import InputForm from "./components/InputForm";
import Login from "./components/Login";

import "./App.css";
import AuthProvider from "./contexts/authContext";
import Signup from "./components/Signup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/new" component={InputForm} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
