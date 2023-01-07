import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CustomerFavorites from "./components/CustomerFavorites";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero isVisible={true} />
      <CustomerFavorites />
    </>
  );
}
