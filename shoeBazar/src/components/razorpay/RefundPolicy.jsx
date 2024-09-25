import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue">Refund Policy</h1>
      
      <section className="mb-4 text-gray">
        <h2 className="text-xl font-semibold text-blue">Returns</h2>
        <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>
        <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
        <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers, or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>
        <p>Additional non-returnable items:</p>
        <ul className="list-disc list-inside">
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Some health and personal care items</li>
        </ul>
        <p>To complete your return, we require a receipt or proof of purchase.</p>
        <p>Please do not send your purchase back to the manufacturer.</p>
        <p>There are certain situations where only partial refunds are granted:</p>
        <ul className="list-disc list-inside">
          <li>Book with obvious signs of use</li>
          <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened.</li>
          <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
          <li>Any item that is returned more than 30 days after delivery</li>
        </ul>
      </section>

      <section className="mb-4 text-gray">
        <h2 className="text-xl font-semibold text-blue">Refunds (if applicable)</h2>
        <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
        <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days (e.g., 5-7 working days).</p>
      </section>

      <section className="mb-4 text-gray ">
        <h2 className="text-xl font-semibold text-blue">Late or missing refunds (if applicable)</h2>
        <p>If you haven’t received a refund yet, first check your bank account again.</p>
        <p>Then contact your credit card company, it may take some time before your refund is officially posted.</p>
        <p>Next contact your bank. There is often some processing time before a refund is posted.</p>
        <p>If you’ve done all of this and you still have not received your refund yet, please contact us at <a href="mailto:yourcompany@example.com">yourcompany@example.com</a>.</p>
      </section>

      <section className="mb-4 text-gray">
        <h2 className="text-xl font-semibold text-blue">Sale items (if applicable)</h2>
        <p>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>
      </section>

      <section className="mb-4 text-gray">
        <h2 className="text-xl font-semibold text-blue">Exchanges (if applicable)</h2>
        <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <a href="mailto:yourcompany@example.com">yourcompany@example.com</a> and send your item to: 59 Swami Nagar, Bhuwana, Udaipur, Rajasthan 313001.</p>
      </section>

      <section className="mb-4 text-gray">
        <h2 className="text-xl font-semibold text-blue">Gifts</h2>
        <p>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
        <p>If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and they will find out about your return.</p>
      </section>

      <section className="mb-4 text-gray">
        <h2 className="text-xl font-semibold text-blue">Shipping</h2>
        <p>To return your product, you should mail your product to: 59 Swami Nagar, Bhuwana, Udaipur, Rajasthan 313001.</p>
        <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
        <p>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>
        <p>If you are shipping an item over ₹5000, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>
      </section>
    </div>
  );
};

export default RefundPolicy;
