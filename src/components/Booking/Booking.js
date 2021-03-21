import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import map from '../../images/map.PNG'

const Booking = () => {
    return (
        <Container
            className="d-flex"
        >
            <Form className="align-items-center justify-content-center w-100" style={{ maxWidth: '400px', marginRight: '100px', marginTop: '100px' }}>
                <Form.Group>
                    <Form.Label>Pick From</Form.Label>
                    <Form.Control type="location" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pick To</Form.Label>
                    <Form.Control type="location" />
                </Form.Group>
                <Button style={{backgroundColor: 'gray'}} className="w-100" type="search">Search</Button>
            </Form>
            <div>
                <img style={{width: '600px', marginTop: '20px'}} src={map} alt=""/>
            </div>
        </Container>
    );
};

export default Booking;