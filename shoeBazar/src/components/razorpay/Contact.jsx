import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue">Contact Us</h1>
      <div className="space-y-6 text-gray">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue">Address</h2>
          <p>
            59 Swami Nagar<br />
            Bhuwana<br />
            Udaipur, Rajasthan 313001
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue">Email</h2>
          <a href="mailto:maliakhil26@gmail.com" className="text-blue-600 hover:underline">
            maliakhil26@gmail.com
          </a>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue">Phone</h2>
          <a href="tel:+918619414632" className="text-blue-600 hover:underline">
            +91 861 941 4632
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;