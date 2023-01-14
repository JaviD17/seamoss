"use client";
import Link from "next/link";
import { useRef } from "react";
import {
  HiOutlinePlus,
  HiOutlineMinus,
  HiOutlineShoppingCart,
  HiOutlineArrowLeft,
} from "react-icons/hi";

import { useCartContext } from "../../context/CartContext";
import { AnimatePresence, motion } from "framer-motion";

const Cart = ({ show }: any) => {
  const cartRef = useRef<any>(null);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    showCart,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useCartContext();

  const handleCheckout = async () => {
    //  stripe checkout
  };

  return (
    <motion.section
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      key={"cart"}
      className="bg-slate-100 absolute right-0 top-0 h-screen w-1/2"
      ref={cartRef}
    >
      <div className="p-4">
        <button
          type="button"
          className="flex hover:bg-green-300 px-4 py-2 rounded-full items-center"
          onClick={() => setShowCart(!showCart)}
        >
          <HiOutlineArrowLeft size={30} />
          <span>Your Cart</span>
          <span>({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="text-center my-16">
            <h3>Your shopping bag is empty</h3>
            <Link href={"/shop"}>
              <button
                type="button"
                onClick={() => setShowCart(!showCart)}
                className="px-4 py-2 hover:bg-cyan-300 rounded-full my-2"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Cart;
