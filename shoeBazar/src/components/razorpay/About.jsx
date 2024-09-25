import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue">About ShoeBazar</h1>
      <div className="space-y-4 text-gray">
        <p>
          Welcome to ShoeBazar, your one-stop destination for high-quality footwear. Founded by Akhil Mali, ShoeBazar has been serving shoe enthusiasts since 2024.
        </p>
        <p>
          At ShoeBazar, we believe that the right pair of shoes can change your day, your style, and your comfort. That's why we're committed to offering a wide range of shoes for every occasion, from casual sneakers to elegant formal wear.
        </p>
        <p>
          Our mission is to provide our customers with:
        </p>
        <ul className="list-disc pl-6">
          <li>Top-quality shoes from renowned brands</li>
          <li>Excellent customer service</li>
          <li>A seamless online shopping experience</li>
          <li>Competitive prices and great value</li>
        </ul>
        <p>
          We take pride in our curated collection, ensuring that every shoe we offer meets our high standards of quality, style, and comfort. Whether you're looking for the latest trends or timeless classics, ShoeBazar has got you covered.
        </p>
        <p>
          Thank you for choosing ShoeBazar. We look forward to helping you step out in style and comfort!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;