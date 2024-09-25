import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="container mx-auto p-4 text-gray">
      <h1 className="text-2xl font-bold mb-4 text-blue">Shipping Policy</h1>

      <p className="text-gray-700">
        It's important to start by clarifying to customers that your order processing times are separate from the shipping times they see at checkout. 
        All orders are processed within 5 to 7 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
      </p>
      <p className="text-gray-700">
        Include any other pertinent information towards the beginning, such as potential delays due to a high volume of orders or postal service problems that are outside of your control.
      </p>

      <h2 className="text-xl font-bold mt-4 text-blue">Domestic Shipping Rates and Estimates</h2>
      <p className="text-gray-700">
        For calculated shipping rates: Shipping charges for your order will be calculated and displayed at checkout. 
      </p>
      {/* <p className="text-gray-700">
        For simple flat rate shipping: We offer ₹X flat rate shipping to [list countries]. 
      </p> */}
      <p className="text-gray-700">
        You can also emphasize any free shipping thresholds you offer (e.g. free shipping for orders over ₹5000). For multiple shipping options, you can list carrier options, prices, and delivery times in a table.
      </p>

      <table className="table-auto w-full my-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-blue">Shipping option</th>
            <th className="px-4 py-2 text-left text-blue">Estimated delivery time</th>
            <th className="px-4 py-2 text-left text-blue">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-700">Option 1</td>
            <td className="border px-4 py-2 text-gray-700">2 to 3 business days</td>
            <td className="border px-4 py-2 text-gray-700">₹249</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-700">Option 2</td>
            <td className="border px-4 py-2 text-gray-700">4-5 to X business days</td>
            <td className="border px-4 py-2 text-gray-700">₹149</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-700">Option 3</td>
            <td className="border px-4 py-2 text-gray-700">5 to 7 business days</td>
            <td className="border px-4 py-2 text-gray-700">₹89</td>
          </tr>
        </tbody>
      </table>

      {/* <h2 className="text-xl font-bold mt-4 text-blue-600">Local Delivery</h2>
      <p className="text-gray-700">
        If you offer local delivery or in-store pickup to customers in your area, you can dedicate a section of your shipping policy page to explain the process or create a separate shipping page specifically for local customers. 
        Free local delivery is available for orders over ₹2499 within [area of coverage]. For orders under ₹2499, we charge ₹49 for local delivery.
      </p>
      <p className="text-gray-700">
        Deliveries are made from [delivery hours] on [available days]. We will contact you via text message with the phone number you provided at checkout to notify you on the day of our arrival. 
      </p>
      <p className="text-gray-700">
        You can list out the ZIP/postal codes you service and/or consider embedding a map here so customers can easily see if they are within your local delivery range.
      </p>

      <h2 className="text-xl font-bold mt-4 text-blue-600">In-store Pickup</h2>
      <p className="text-gray-700">
        You can skip the shipping fees with free local pickup at [Now only in Udaipur]. After placing your order and selecting local pickup at checkout, your order will be prepared and ready for pick up within 2 to 3 business days. We will send you an email when your order is ready along with instructions.
      </p>
      <p className="text-gray-700">
        Our in-store pickup hours are [9:00 AM - 9:00 PM] on [Monday - Saturday]. Please have your order confirmation email with you when you come.
      </p> */}

      {/* <h2 className="text-xl font-bold mt-4 text-blue-600">International Shipping</h2>
      <p className="text-gray-700">
        We offer international shipping to the following countries: [list of countries]. 
      </p>
      <p className="text-gray-700">
        If relevant you can also include countries you don’t ship to: At this time, we do not ship to [list of countries]. 
      </p>
      <p className="text-gray-700">
        If you’re using calculated shipping rates: Shipping charges for your order will be calculated and displayed at checkout. 
      </p>
      <p className="text-gray-700">
        If you offer multiple international shipping options, you can list them in a table as well. You can include broader delivery timelines (e.g. 8 to 20 days) for international shipping since expectations can vary greatly depending on the destination.
      </p>

      <table className="table-auto w-full my-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-blue-600">Shipping option</th>
            <th className="px-4 py-2 text-left text-blue-600">Estimated delivery time</th>
            <th className="px-4 py-2 text-left text-blue-600">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-700">Option 1</td>
            <td className="border px-4 py-2 text-gray-700">X to X business days</td>
            <td className="border px-4 py-2 text-gray-700">₹X</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-700">Option 2</td>
            <td className="border px-4 py-2 text-gray-700">X to X business days</td>
            <td className="border px-4 py-2 text-gray-700">₹X</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-700">Option 3</td>
            <td className="border px-4 py-2 text-gray-700">X to X business days</td>
            <td className="border px-4 py-2 text-gray-700">₹X</td>
          </tr>
        </tbody>
      </table> */}

      {/* <p className="text-gray-700">
        Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. [Your Company] is not responsible for these charges if they are applied and are your responsibility as the customer.
      </p> */}
    </div>
  );
};

export default ShippingPolicy;
