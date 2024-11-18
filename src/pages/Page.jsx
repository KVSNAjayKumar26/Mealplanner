import { motion } from 'framer-motion';
import React from 'react'

const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: {opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100vw"},
};

const Page = ({ children }) => {
  return (
    <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
  );
};

export default Page;