import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

export default function RideCard({ride}) {
    const history = useHistory()
    const handleRide = (id) => {
        history.push(`/destination/${id}`);
    }
    return (
        <div>
            <Link to="/destination">
                <Card
                    style={{ width: '18rem', height: '20rem', margin: '200px 50px' }}
                    className="mb-2"
                >
                    <Card.Body>
                        <img style={{width: '200px', marginBottom: '100px'}} src={ride.imgURL} alt=""/>
                        <Card.Title style={{fontWeight: '400px'}}>{ride.name}</Card.Title>
                    </Card.Body>
                    <Button onClick={() => handleRide(ride.id)} variant="contained" color="primary"></Button>
                </Card>
            </Link>
        </div>
    );
};