import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CustomerFavorites from "./components/CustomerFavorites";
import Carousel from "./components/Carousel";
import { getAllProducts } from '../lib/sanity.client'

export default async function Home() {
  const products = await getAllProducts();

  return (
    <>
      <Navbar />

      <Hero isVisible={true} />
      <CustomerFavorites />
      <Carousel products={products}/>
    </>
  );
}
