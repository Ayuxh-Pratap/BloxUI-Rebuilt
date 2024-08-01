"use client"

import React, { useEffect } from 'react';

const DrawIO = () => {
  useEffect(() => {
    const iframe = document.getElementById('drawio-iframe');

    const receiveMessage = (event) => {
      if (event.origin !== 'https://embed.diagrams.net') {
        return;
      }

      try {
        const data = JSON.parse(event.data);
        // Handle messages from the Draw.io editor
        console.log(data);
      } catch (error) {
        console.error('Error parsing message from Draw.io:', error);
      }
    };

    window.addEventListener('message', receiveMessage, false);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('message', receiveMessage);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        id="drawio-iframe"
        title="DrawIO"
        width="100%"
        height="100%"
        src="https://embed.diagrams.net/?embed=1"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default DrawIO;
