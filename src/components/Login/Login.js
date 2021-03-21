import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import {facebookSignIn} from '../AuthContext/AuthContext'



const Login = () => {
    const [user, setUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleFacebook = () => {
        facebookSignIn()
        .then(result => {
            setUser(result.displayName);
            history.replace(from)
        })
    }

    return (
    <Container>
        <Row className="justify-content-center align-items-center mt-5">
        <Col xs={12} md={6}>
            <div className="border rounded p-4 form">
                <h2>Login</h2>
                <form action="">
                    <input type="email" name="email" id="email"required className="form-control mt-4" placeholder="Email"/>
                    <input type="password" name="password" id="password" required className="form-control mt-4" placeholder="Password"/>
                    <input type="submit" value="Login" className="form-control mt-4 btn-primary"/>
                </form>
            <p className="mt-4"><Link to="/signup">Create A New Account</Link></p>
            </div>
        </Col>
        </Row>
        <Row className="justify-content-center align-items-center mt-3">
            <button className="btn btn-primary ml-2" onClick={handleFacebook}>Continue with Facebook</button>
        </Row>
    </Container>
    );
};

export default Login;