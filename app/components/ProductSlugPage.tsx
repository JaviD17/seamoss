"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../../lib/sanity.client";
import { useState, useRef } from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi";

const PostSlugPage = ({ product }: any) => {
  const [selected, setSelected] = useState(product.mainImage);
  const [size, setSize] = useState(product.sizes[0].price);
  const [quantity, setQuantity] = useState(1);

  console.log(product);

  const slug = product?.slug;
  if (!slug) {
    notFound();
  }

  return (
    <>
      {!product ? (
        <p>loading...</p>
      ) : (
        <section className="grid grid-cols-2 gap-8 content-center m-16">
          {/* images */}
          <div>
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={urlFor(selected).width(800).height(600).url()}
                alt="sea moss"
                width={800}
                height={600}
                className="object-fill"
              />
            </motion.div>
            {/* carasouel */}
            <motion.ul
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="flex justify-center gap-4 my-4"
            >
              <li className="cursor-pointer">
                <Image
                  src={urlFor(product.mainImage).width(100).height(100).url()}
                  alt="sea moss"
                  width={100}
                  height={100}
                  onClick={() => setSelected(product.mainImage)}
                  className="object-fill rounded-xl"
                />
              </li>
              {product.productImages.map((item: any) => (
                <li key={item._key} className="cursor-pointer">
                  <Image
                    src={urlFor(item.asset).width(100).height(100).url()}
                    alt="sea moss"
                    width={100}
                    height={100}
                    onClick={() => setSelected(item.asset)}
                    className="object-fill rounded-xl"
                  />
                </li>
              ))}
            </motion.ul>
          </div>

          {/* product info */}
          <div className="border-2 rounded-xl">
            <h2 className="text-3xl mx-8 my-4 font-semibold">
              {product.title}
            </h2>
            <ul className="mx-14">
              {product.description.map((item: string, i: any) => (
                <li key={i} className="list-disc py-1">
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-start mx-10 mt-4 items-center">
              <HiStar className="text-green-500" size={30} />
              <HiStar className="text-green-500" size={30} />
              <HiStar className="text-green-500" size={30} />
              <HiStar className="text-green-500" size={30} />
              <HiStar className="text-green-500" size={30} />
              <p className="mx-2 text-lg">80 Reviews</p>
            </div>
            <div className="my-4 mx-10">
              <p className="text-2xl">${size}</p>
              <ul className="flex gap-4 justify-start my-4">
                {product.sizes.map((item: any) => (
                  <li>
                    <button
                      type="button"
                      className={`border px-4 py-2 rounded hover:bg-green-300 ${
                        item.price === size ? "bg-green-300" : ""
                      }`}
                      onClick={() => {
                        setSize(item.price);
                        setQuantity(1);
                      }}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-start my-8">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((prevQuantity) =>
                      prevQuantity <= 1 ? 1 : prevQuantity - 1
                    )
                  }
                  className="px-4 py-2 bg-slate-200 rounded-l"
                >
                  -
                </button>

                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="text-center bg-slate-100"
                />

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((prevQuantity) => prevQuantity + 1)
                  }
                  className="px-4 py-2 bg-slate-200 rounded-r"
                >
                  +
                </button>
              </div>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="px-4 py-2 bg-green-300 rounded-full"
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="px-4 py-2 bg-green-300 rounded-full"
                >
                  Buy Now
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostSlugPage;
