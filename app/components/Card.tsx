"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../../lib/sanity.client";
import Link from "next/link";
import { HiStar, HiOutlineStar } from "react-icons/hi";

// export const MyComponent = () => (
//   <motion.button
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.9 }}
//   />
// )

const Card = ({ product }: any) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.0 }}
      className="w-[400px] shadow-xl shadow-slate-200/75 rounded-md overflow-hidden"
    >
      <Link href={`/shop/${product.slug}`}>
        <Image
          src={urlFor(product.mainImage).width(800).height(400).url()}
          alt="Shoes"
          width={800}
          height={400}
          className="object-cover"
        />
      </Link>
      <div className="h-40 max-h-40 p-4 text-center flex flex-col justify-between">
        <h2 className="font-semibold text-xl">{product.title}</h2>
        <div className="flex justify-center">
          <HiStar className="text-green-500" size={20} />
          <HiStar className="text-green-500" size={20} />
          <HiStar className="text-green-500" size={20} />
          <HiStar className="text-green-500" size={20} />
          <HiStar className="text-green-500" size={20} />
          <p className="mx-2">80 Reviews</p>
        </div>
        <p className="text-lg">$49.99</p>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="px-4 py-2 bg-green-300 rounded-full"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
