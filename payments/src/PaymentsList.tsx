import React, {useState, useEffect} from 'react';

interface Payment {
    id: string;
    amount: number;
    status: string;
    user: string;
    description: string;
    created_at: string;
    updated_at: string;
}

const PaymentsList = () => {
    const [payments, setPayments] = useState<Payment[]>([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch('http://localhost:8083/payments');
                if (!response.ok) {
                    throw new Error('Failed to fetch payments');
                }
                const data = await response.json();
                setPayments(data.payments);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPayments();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Payments List</h1>
            <div className="grid grid-cols-1 gap-4">
                {payments.length > 0 && payments.map(payment => (
                    <div key={payment.id} className="bg-gray-100 p-4 my-4 rounded shadow">
                        <p className="text-gray-800 font-bold">Payment ID: {payment.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentsList;