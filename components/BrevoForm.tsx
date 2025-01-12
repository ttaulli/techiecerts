// components/BrevoForm.tsx
import React from 'react';

const BrevoForm: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
        width="540"
        height="400"
        src="https://00312574.sibforms.com/serve/MUIFAFjRH1F8Q2k5oi4rDiaq_l2kzNfFv5P7e_hT3v8xJPHwXqT7UDkjVsqTd0YJJt6VVL0r15i-W0UXs-2CLKnoLuquBv4JJOeWBh-hdDpzWXrmnSLI9LpW2l3k_xxCzSsecVYQxw2d8o6xNKaNUNmgxqGyr46uPO-55gZCupgW7_N-5TnuMr8z_huoL3iXkyLXlrX89o4NkVGj"
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{
          display: 'block',
          margin: '0 auto',
          maxWidth: '100%',
        }}
      ></iframe>
    </div>
  );
};

export default BrevoForm;
