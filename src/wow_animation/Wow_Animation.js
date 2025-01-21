// src/components/WowAnimation.js
import React, { useEffect } from 'react';
import WOW from 'wowjs'; // Import WOW.js
import 'animate.css'; // Import animate.css for animation styles

const Wow_Animation = ({ children, animation = "animate__fadeIn", delay = "0s", duration = "1s", offset = 100 }) => {
  useEffect(() => {
    // Initialize WOW.js when the component is mounted
    if (WOW && typeof WOW.WOW === 'function') {
      new WOW.WOW({
        offset: offset, // Optional: Customize the offset for triggering animations
        live: true, // Keep observing dynamically added elements
      }).init();
    } else {
      console.error('WOW.js is not properly initialized');
    }
  }, [offset]); // Re-run the effect if the offset value changes

  return (
    <div
      className={`wow ${animation} animate__animated`} // Class names for WOW.js and animate.css
      style={{ animationDelay: delay, animationDuration: duration }} // Dynamic delay and duration for the animation
    >
      {children} {/* The content that will be animated */}
    </div>
  );
};

export default Wow_Animation;
