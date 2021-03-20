import React, { useContext, useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from '../AuthContext/AuthContext';

import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase.config'
import { UserContext } from '../../App';



export default function Login() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };



    const handleFbSignIn = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbProvider)
        .then((result) => {
            const {displayName} = result.user;
            const signedInUser = {
                name: displayName
            }
            setLoggedInUser(signedInUser)
            history.replace(from);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setError('Failed to log in')
        });
    }


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/destination')
        }
        catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }



    return (
        <AuthProvider>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '100vh' }}
            >
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </div>
                    <div>
                        <button style={{marginTop: '50px', marginLeft: '100px'}} onClick={handleFbSignIn}>Sign In Using Facebook</button>
                    </div>
                </div>

            </Container>

        </AuthProvider>
    );
};
