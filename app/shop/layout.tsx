import Navbar from "../components/Navbar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section className="">{children}</section>
    </>
  );
}
