"use client"

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Excalidraw with no SSR
const Excalidraw = dynamic(() => import('@excalidraw/excalidraw').then(mod => mod.Excalidraw), {
  ssr: false
});

const DrawingTool = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Component is mounted in the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a placeholder until the client-side code is run
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '90vh' }}>
      <Excalidraw />
    </div>
  );
};

export default DrawingTool;