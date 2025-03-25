import React from 'react';
// import motion
import { motion } from 'framer-motion';

const Copyright = () => {
  return (
    <div className="text-center py-6 border-b border-white bg-primary-500 text-gray">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0 }}
          className="tracking-[0.02em] text-gray-500"
        >
          &copy; 2025
          <span className="font-semibold text-gray-200">Wiggle Digital</span>
          All Rights Reserved T&Cs Refunds & Returns PAIA Privacy Policy Disclaimer
        </motion.div>
      </div>
    </div>
  );
};

export default Copyright;
