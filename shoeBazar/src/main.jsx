import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IcW0kSD6K1obIVgu1BCOCoa62W8LrAAaKGQLoAFiJZXEGhyjZzttTHhh70zVOTLC1jNs1IRSQIbr2JT0igs2EQn00fbOmNIsN'); 
ReactDOM.createRoot(document.getElementById('root')).render(
  <Elements  stripe={stripePromise}>
    <App />
  </Elements>,
)
