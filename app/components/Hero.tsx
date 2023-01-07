"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineUserGroup, HiOutlineTruck } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi2";

const Hero = ({ isVisible }: any) => {
  return (
    // <AnimatePresence>
    // {/* {isVisible && ( */}
    <motion.section
      // key="Hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <Link href="/shop">
        <Image
          src="/seamoss.webp"
          width={1440}
          height={500}
          alt="Picture of the author"
        />
      </Link>

      <motion.div
        className="flex justify-center gap-20 bg-gray-100 p-10"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <div className="flex justify-center basis-1/3 gap-4 items-center">
          <div className="flex items-center">
            <HiOutlineUserGroup size={50} />
          </div>
          <div>
            <p className="text-xl">Over 100,000 customers</p>
            <p>Try seamoss today</p>
          </div>
        </div>

        <div className="flex justify-center basis-1/3 gap-4 items-center">
          <div className="flex items-center">
            <HiOutlineTruck size={50} />
          </div>
          <div>
            <p className="text-xl">Delivery Times</p>
            <p>4 weeks processing time + shipping</p>
          </div>
        </div>

        <div className="flex justify-center basis-1/3 gap-4 items-center">
          <div className="flex items-center">
            <HiOutlineSparkles size={50} />
          </div>
          <div>
            <p className="text-xl">Reviews (12,000+)</p>
            <p>Stars</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
    // {/* )} */}
    // {/* </AnimatePresence> */}
  );
};

export default Hero;
