"use client";

import { motion } from "framer-motion";

const CustomerFavorites = () => {
  return (
    <motion.section
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="container mx-auto p-24"
    >
      <h3 className="text-2xl text-center">
        Customer's Favorites - Get Our Top Flavors!
      </h3>
      <div className="h-2 w-32 bg-green-300 mx-auto mt-4"></div>
    </motion.section>
  );
};

export default CustomerFavorites;
