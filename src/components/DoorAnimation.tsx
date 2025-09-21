import React, { useEffect, useState } from 'react';

export function DoorAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide doors after 1 second
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[99999]"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999
      }}
    >
      {/* Top Door */}
      <div 
        className="absolute top-0 left-0 w-full h-1/2 bg-gray-900 animate-slide-up border-b border-gray-800"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          zIndex: 100000,
          background: 'linear-gradient(180deg, #111827 0%, #000000 100%)'
        }}
      />
      
      {/* Bottom Door */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 animate-slide-down border-t border-gray-800"
        style={{ 
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          zIndex: 100000,
          background: 'linear-gradient(0deg, #111827 0%, #000000 100%)'
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 99998
        }}
      />
    </div>
  );
}