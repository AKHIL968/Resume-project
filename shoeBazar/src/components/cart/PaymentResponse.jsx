import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handlePaymentResponse } from '../../services/paymentService';

const PaymentResponse = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get('order_id');
    const paymentStatus = searchParams.get('txStatus');

    if (orderId && paymentStatus) {
      handlePaymentResponse(orderId, paymentStatus)
        .then(() => {
          // Redirect based on payment status
          if (paymentStatus === 'SUCCESS') {
            navigate('/order-confirmation');
          } else {
            navigate('/payment-failed');
          }
        })
        .catch(error => {
          console.error('Error handling payment response:', error);
          navigate('/error');
        });
    }
  }, [location, navigate]);

  return <div>Processing your payment...</div>;
};

export default PaymentResponse;
