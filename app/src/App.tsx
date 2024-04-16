import React from 'react'
import ReactDOM from 'react-dom/client'
import PaymentDetails from "payments/PaymentDetails";
import PaymentsList from "payments/PaymentsList";
import CreateParkingSpot from "parking/CreateParkingSpot";
import ParkingSpots from "parking/ParkingSpots";
import ParkingSpotDetails from "parking/ParkingSpotDetails";
import CreatePaymentForm from "payments/CreatePaymentForm";
import AddCarForm from "cars/AddCarForm";
import CarsList from "cars/CarsList";

import './index.scss'

const App = () => (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div className={"text-red-500"}>Name: app</div>
        <PaymentsList/>
        <CreatePaymentForm/>
        <PaymentDetails/>
        <ParkingSpots/>
        <CreateParkingSpot/>
        <ParkingSpotDetails/>
        <CarsList/>
        <AddCarForm/>
    </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App/>)
