"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "about",
  },
];

//   <motion.button
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.9 }}
//   />

const Navbar = () => {
  return (
    <div className="navbar bg-primary my-4 rounded-xl drop-shadow-2xl h-20">
      <Link href={"/"} className="mx-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="overflow-hidden hover:bg-base-100 h-12 rounded-xl"
        >
          <Image
            src="/seamoss.png"
            alt="logo"
            width={125}
            height={125}
            className="-mt-8"
          />
        </motion.div>
      </Link>

      <div className="flex-1 justify-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {categories.map((item) => (
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className=''>
              <Link
                key={item.href}
                href={item.href}
                className="mx-2 text-xl hover:bg-base-100"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="overflow-hidden "></div>
      </div>
      <div className="flex-none flex gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <AiOutlineShoppingCart size={30} />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
