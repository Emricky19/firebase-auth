import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [error, setError] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setloading] = useState(false);

  const emailRef = useRef();

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      setloading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed tp reset password");
    }

    setloading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" ref={emailRef} required />
            </Form.Group>

            <Button disabled={loading} type="submit" block>
              Reset Password
            </Button>
            <div className="w-1000 text-center mt-2">
              <Link to="/login">Log In</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-1000 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
