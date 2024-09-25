// functions/index.js

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Stripe = require('stripe');
const stripe = new Stripe('pk_test_51IcW0kSD6K1obIVgu1BCOCoa62W8LrAAaKGQLoAFiJZXEGhyjZzttTHhh70zVOTLC1jNs1IRSQIbr2JT0igs2EQn00fbOmNIsN'); // Replace with your Stripe secret key

admin.initializeApp();

exports.createPaymentIntent = functions.https.onRequest(async (req, res) => {
  const { amount } = req.body; // Amount should be in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr', // Change as needed
      payment_method_types: ['card', 'upi'], // Enable UPI payments
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});