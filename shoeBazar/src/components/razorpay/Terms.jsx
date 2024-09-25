import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto p-4 text-gray">
      <h1 className="text-2xl font-bold mb-4 text-blue">Terms of Service</h1>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Overview</h2>
        <p>This website is operated by ShoeBazar. By using our site and services, you agree to these Terms of Service.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Online Store Terms</h2>
        <ul className="list-disc list-inside">
          <li>You must be of legal age in your region to use our services.</li>
          <li>You cannot use our products for illegal purposes.</li>
          <li>Any breach of the terms will result in termination of services.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">General Conditions</h2>
        <ul className="list-disc list-inside">
          <li>We reserve the right to refuse service at any time.</li>
          <li>Your content may be transferred unencrypted.</li>
          <li>You must not exploit any part of the service without our permission.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Accuracy of Information</h2>
        <p>We are not responsible for the accuracy of the information on the site. The material on this site is for general information only. We can modify site content at any time.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Modifications to Service and Prices</h2>
        <p>Prices are subject to change without notice. We may modify or discontinue the service at any time.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Products or Services</h2>
        <p>Some products/services are exclusively online and may have limited quantities. We try to display product colors and images accurately but cannot guarantee your monitor’s display. We can limit the sales of our products/services at our discretion.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Accuracy of Billing and Account Information</h2>
        <p>We may refuse or cancel orders and will notify you if we do so. You must provide accurate purchase and account information.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Optional Tools</h2>
        <p>We may provide access to third-party tools without warranties or conditions.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Third-Party Links</h2>
        <p>Our site may contain links to third-party websites which are not affiliated with us.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">User Comments, Feedback, and Other Submissions</h2>
        <p>You agree that we can use any comments you send us. We are not obligated to maintain comments in confidence or to pay compensation.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Personal Information</h2>
        <p>Your submission of personal information is governed by our Privacy Policy.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Errors, Inaccuracies, and Omissions</h2>
        <p>Occasionally there may be errors on our site which we can correct without prior notice.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-blue">Prohibited Uses</h2>
        <p>You are prohibited from using the site for unlawful purposes, violating laws, infringing on our or others' rights, submitting false information, etc.</p>
      </section>
    </div>
  );
};

export default Terms;
