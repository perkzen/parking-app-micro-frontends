import React, {FormEvent, useState} from 'react';

const CreateParkingSpot = () => {
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');

    const createParkingSpot = async () => {
        try {
            const response = await fetch(`http://localhost:8084/park`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ location, name })
            });
            if (!response.ok) {
                throw new Error('Failed to create parking spot');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        createParkingSpot();
    }

    return (
        <div className="max-w-md mx-auto">
            <h1 className={"text-red-500"}>Create parking spot form</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};


export default CreateParkingSpot;