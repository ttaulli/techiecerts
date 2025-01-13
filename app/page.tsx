import React from 'react';

const BrevoForm: React.FC = () => {
  return (
    <>

      <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Welcome to TechieCerts.com</h1>
          <p className="text-gray-700 mb-4">
            This is where you will find updates for Tom Taull&apos;s upcoming book about the AI-900 exam.
          </p>
          <p className="text-gray-700 mb-6">
            Also, if you want to be notified of updates, you can sign up for the newsletter below.
          </p>
          <div className="h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-lg shadow-md">
            <iframe
              className="w-full h-full"
              src="https://00312574.sibforms.com/serve/MUIFAFjRH1F8Q2k5oi4rDiaq_l2kzNfFv5P7e_hT3v8xJPHwXqT7UDkjVsqTd0YJJt6VVL0r15i-W0UXs-2CLKnoLuquBv4JJOeWBh-hdDpzWXrmnSLI9LpW2l3k_xxCzSsecVYQxw2d8o6xNKaNUNmgxqGyr46uPO-55gZCupgW7_N-5TnuMr8z_huoL3iXkyLXlrX89o4NkVGj"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrevoForm;


