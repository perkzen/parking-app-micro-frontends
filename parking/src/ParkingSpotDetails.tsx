import React, {useState} from 'react';

const ParkingSpotDetails = () => {
    const [name, setName] = useState<string>('')
    const [parkingSpot, setParkingSpot] = useState<any>(null);

    const fetchParkingSpot = async () => {
        try {
            const response = await fetch(`http://localhost:8084/park/${name}`);
            if (!response.ok) {
                throw new Error('Failed to fetch parking spot');
            }
            const data = await response.json();
            setParkingSpot(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Parking Spot details</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter parking spot name"
                className="p-2 border border-gray-300 rounded"
            />

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={fetchParkingSpot}>Search
            </button>

            <div>{JSON.stringify(parkingSpot)}</div>

        </div>
    );
};

export default ParkingSpotDetails;