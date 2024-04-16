import React, { useState, useEffect } from 'react';

interface Car {
    id: string;
    owner: string;
    registrationPlate: string;
}

const CarsList = () => {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('http://localhost:8083/cars');
                if (!response.ok) {
                    throw new Error('Failed to fetch cars');
                }
                const data = await response.json();
                setCars(data); // Assuming the response directly contains the array of cars
            } catch (error) {
                console.error(error);
            }
        };
        fetchCars();
    }, []);

    const handleDeleteCar = async (carId: string) => {
        try {
            const response = await fetch(`http://localhost:8083/cars/${carId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete car');
            }
            // Remove the deleted car from the state
            setCars(prevCars => prevCars.filter(car => car.id !== carId));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Cars List</h1>
            <div className="grid grid-cols-1 gap-4">
                {cars.length > 0 && cars.map(car => (
                    <div key={car.id} className="bg-gray-100 p-4 my-4 rounded shadow flex justify-between items-center">
                        <div>
                            <p className="text-gray-800 font-bold">Car ID: {car.id}</p>
                            <p className="text-gray-800">Owner: {car.owner}</p>
                            <p className="text-gray-800">Registration Plate: {car.registrationPlate}</p>
                        </div>
                        <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleDeleteCar(car.id)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarsList;
