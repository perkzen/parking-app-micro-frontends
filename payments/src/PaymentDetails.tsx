import React, {useState} from 'react';

const PaymentDetails = () => {
    const [id, setId] = useState<string>('')
    const [payment, setPayment] = useState<any>(null);

    const fetchPayment = async () => {
        try {
            const response = await fetch(`http://localhost:8083/payments/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch payment');
            }
            const data = await response.json();
            setPayment(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={e => setId(e.target.value)}
                placeholder="Enter payment ID"
                className="p-2 border border-gray-300 rounded"
            />
            <button onClick={fetchPayment}>Search</button>

            <div>{JSON.stringify(payment)}</div>

        </div>
    );
};

export default PaymentDetails;