"use client";
import { CartContext, useCartContext } from "../../context/CartContext";
import Navbar from "../components/Navbar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartContext>
      <section className="relative">
        <Navbar shop={true} />
        {children}
      </section>
    </CartContext>
  );
}
