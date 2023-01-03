import { Source_Code_Pro } from "@next/font/google";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const inter = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} container mx-auto`}>
      <Navbar />
      <h1 className="text-4xl  text-center">Welcome to SeaMoss!</h1>
      <section className='mx-4'>
        <Card />
      </section>
    </main>
  );
}
