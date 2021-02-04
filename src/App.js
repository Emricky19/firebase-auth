import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Appbar from "./components/Appbar";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";

import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Appbar />
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/signup" component={Signup} />

                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </>
  );
};

export default App;
