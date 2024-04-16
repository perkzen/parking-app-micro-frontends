import React, { FormEvent, useState } from 'react';

const AddCarForm = () => {
    const [owner, setOwner] = useState('');
    const [registrationPlate, setRegistrationPlate] = useState('');

    const addCar = async () => {
        try {
            const response = await fetch(`http://localhost:8083/cars`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ owner, registrationPlate })
            });
            if (!response.ok) {
                throw new Error('Failed to add car');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        addCar();
    }

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-red-500">Add car form</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="owner">
                        Owner
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="owner"
                        type="text"
                        placeholder="Owner"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registrationPlate">
                        Registration Plate
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="registrationPlate"
                        type="text"
                        placeholder="Registration Plate"
                        value={registrationPlate}
                        onChange={(e) => setRegistrationPlate(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCarForm;
