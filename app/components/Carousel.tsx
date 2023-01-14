"use client";

import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { AnimatePresence, motion } from "framer-motion";

const Carousel = ({ products }: any) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setSeconds((seconds) => seconds + 1);
    // }, 2000);
    // return () => clearInterval(interval);
    // console.log(carousel?.current?.scrollWidth, carousel?.current?.offsetWidth);
    setWidth(
      carousel.current
        ? // @ts-ignore
          carousel.current.scrollWidth - carousel.current.offsetWidth + 10
        : 0
    );
  }, []);
  return (
      <motion.div
        className="cursor-grab my-8 mx-28 p-2 overflow-hidden"
        initial={{ opacity: 0, y: -500 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, x: -500 }}
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex lg:flex-row justify-start gap-8"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {products.map((product: any) => (
            <li key={product._id} className="list-none">
              <Card product={product} />
            </li>
          ))}
        </motion.div>
      </motion.div>
  );
};

export default Carousel;
