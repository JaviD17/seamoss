import React from "react";
import Navbar from "../components/Navbar";

export default async function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
    </>
  );
}
