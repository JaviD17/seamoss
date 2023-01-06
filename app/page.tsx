import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Source_Code_Pro } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`${inter.className}`}>
        <Link href="/shop">
          <Image
            src="/seamoss.webp"
            width={1440}
            height={500}
            alt="Picture of the author"
          />
        </Link>
        <section className="mx-4"></section>
      </main>
    </>
  );
}
