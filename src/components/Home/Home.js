import React from 'react';
import RideCard from '../RideCard/RideCard';
import './Home.css';

const Home = () => {

    const rides = [
        {
            id: '01',
            name: 'BIKE',
            imgURL: 'https://i.ibb.co/TTpf0BD/bike.png'
        },
    
        {
            id: '02',
            name: 'CAR',
            imgURL: 'https://i.ibb.co/qsTLvMD/car.jpg'
        },
    
        {
            id: '03',
            name: 'BUS',
            imgURL: 'https://i.ibb.co/NLh7cQy/bus.png'
        },
    
        {
            id: '04',
            name: 'TRAIN',
            imgURL: 'https://i.ibb.co/sK885hz/train.png'
        }
    ];
    return (
        <div className="home">
            <div className="d-flex">
                {
                    rides.map(ride => <RideCard key={ride.id} ride={ride}></RideCard>)
                }
        
            </div>
        </div>

    );
};

export default Home;