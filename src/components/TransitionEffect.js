import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true after the component has mounted
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* Only apply the animation if the component is mounted */}
      {isMounted && (
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary"
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      )}
      {/* Only apply the animation if the component is mounted */}
      {isMounted && (
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ delay:0.2,duration: 0.8, ease: 'easeInOut' }}
        />
      )}
      {/* Only apply the animation if the component is mounted */}
      {isMounted && (
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ delay:0.4,duration: 0.8, ease: 'easeInOut' }}
        />
      )}
    </>
  );
};

export default TransitionEffect;
