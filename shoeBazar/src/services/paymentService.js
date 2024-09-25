import axios from 'axios';

const CASHFREE_TEST_URL = 'https://sandbox.cashfree.com/pg';
const APP_ID = 'TEST102840957484fe9eae9861be2b6b59048201';
const SECRET_KEY = 'cfsk_ma_test_3c7733e8678cfa85b602fff278e9abf5_5ea42ba5';

export const createPaymentOrder = async (userId, cartItems, total, address) => {
  try {
    // Create a unique order ID (you might want to generate this on your backend)
    const orderId = `order_${Date.now()}_${userId}`;

    // Create a payment order with Cashfree
    const response = await axios.post(
      `${CASHFREE_TEST_URL}/orders`,
      {
        order_id: orderId,
        order_amount: total,
        order_currency: 'INR',
        customer_details: {
          customer_id: userId,
          customer_email: 'customer@example.com', // You should get this from your user data
          customer_phone: '9999999999' // You should get this from your user data
        },
        order_meta: {
          return_url: `https://yourwebsite.com/payment-response?order_id=${orderId}`
        }
      },
      {
        headers: {
          'x-client-id': 'TEST102840957484fe9eae9861be2b6b59048201',
          'x-client-secret': 'cfsk_ma_test_3c7733e8678cfa85b602fff278e9abf5_5ea42ba5',
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error creating payment order:', error);
    throw error;
  }
};