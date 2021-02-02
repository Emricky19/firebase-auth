import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
const [ error, setError ] = useState('')
const [ loading, setloading ] = useState(false)

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(passwordRef.current.value !== confirmPasswordRef.current.value){
        return setError('Passwords do not match')
    }
    try{
        setError('')
        setloading(true)
        await signup(emailRef.current.value, passwordRef.current.value);
    }catch(err){
        console.log(err);
        setError('Failed to create account')
    }
    
    setloading(false)
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" required />
            </Form.Group>

            <Form.Group controlId="confirm-password">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control ref={confirmPasswordRef} type="password" required />
            </Form.Group>

            <Button disabled={loading} type="submit" block>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-1000 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
};

export default Signup;
