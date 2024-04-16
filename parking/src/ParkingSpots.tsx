import React, {useEffect, useState} from 'react';


interface ParkingSpot {
    car: string;
    location: string;
    name: string;
    occupied: boolean;
    occupiedAt: string; // Assuming this is a timestamp
}

const ParkingSpots = () => {

    const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>([]);

    useEffect(() => {
        const fetchParkingSpots = async () => {
            try {
                const response = await fetch('http://localhost:8084/park');
                if (!response.ok) {
                    throw new Error('Failed to fetch parking spots');
                }
                const data = await response.json();
                setParkingSpots(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchParkingSpots();
    }, []);


    return (
        <div>
            <h1>Parking spots</h1>
            <div>{JSON.stringify(parkingSpots)}</div>
        </div>
    );
};

export default ParkingSpots;