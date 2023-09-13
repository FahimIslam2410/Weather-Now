import React, { useEffect, useState } from 'react';

const DemoRender = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/demo')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1 data-cy="message"> {message}</h1>
    </div>
  );
};

export default DemoRender;
