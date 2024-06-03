import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here I will send the email to backend or perform any other action later
    console.log(`Submitting email: ${email}`);
    // Clear the input field after submission
    setEmail('');
    // Set subscribed state to true
    setSubscribed(true);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Join Our Newsletter</h2>
        {subscribed ? (
          <p className="text-green-600 text-center mb-4">Thank you for subscribing!</p>
        ) : (
          <>
            <p className="text-gray-700 text-center mb-4">Stay up-to-date with our latest news and promotions.</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <div className="flex items-center">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="py-3 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-6 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
