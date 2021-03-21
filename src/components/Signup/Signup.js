import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { emailSignUp } from '../AuthContext/AuthContext';


const Signup = () => {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const handleSignUp = () => {
        emailSignUp(email, pass)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPass = (e) => {
        setPass(e.target.value)
    }
    return (
        <>
        <Container>
            <Row className="justify-content-center align-items-center mt-5">
            <Col xs={12} md={6}>
                <div className="border rounded p-4 pb-5 form">
                    <h2>Signup</h2>
                    <form onSubmit={handleSignUp}>
                        <input type="text" name="firstName" id="firstName"required className="form-control mt-4" placeholder="First Name"/>
                        <input type="text" name="lastName" id="lastName"required className="form-control mt-4" placeholder="Last Name"/>
                        <input type="email" name="email" id="email"required className="form-control mt-4" onChange={getEmail} placeholder="Email"/>
                        <input type="password" name="password" id="password" required className="form-control mt-4" onChange={getPass} placeholder="Password"/>
                        <input type="submit" value="Create Account" className="form-control mt-4 btn-primary"/>
                        <p className="mt-4"><Link to="/login">Already have an account? Login</Link></p>
                    </form>
                </div>
            </Col>
            </Row>
        </Container>
        </>
    );
};
export default Signup;