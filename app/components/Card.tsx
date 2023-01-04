"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../../lib/sanity.client";

// export const MyComponent = () => (
//   <motion.button
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.9 }}
//   />
// )

const Card = ({ post }: any) => {
  console.log(post.mainImage);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="card w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <Image
          src={urlFor(post.mainImage).width(400).height(200).url()}
          alt="Shoes"
          width={400}
          height={200}
          className="object-cover"
        />
      </figure>
      <div className="card-body h-44">
        <h2 className="card-title">
          {post.title}
          <div className="badge badge-accent">New</div>
        </h2>
        <p>by {post.author.name}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Benefits</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
