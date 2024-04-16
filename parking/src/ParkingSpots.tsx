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
            <div>
                {parkingSpots.length > 0 && parkingSpots.map(parkingSpot => (
                    <div key={parkingSpot.name} className="bg-gray-100 p-4 my-4 rounded shadow">
                        <p className="text-gray-800 font-bold">Name: {parkingSpot.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParkingSpots;