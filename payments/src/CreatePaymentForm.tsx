import React, { FormEvent, useState } from 'react';

const CreatePaymentForm = () => {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [user, setUser] = useState('');

    const createPayment = async () => {
        try {
            const response = await fetch(`http://localhost:8083/payments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount, description, user })
            });
            if (!response.ok) {
                throw new Error('Failed to create payment');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        createPayment();
    }

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-red-500">Create payment form</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="amount"
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
                        User
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="user"
                        type="text"
                        placeholder="User"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
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

export default CreatePaymentForm;
