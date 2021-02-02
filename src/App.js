import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./components/Signup";


import { Container } from "react-bootstrap";

const App = () => {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
};

export default App;
