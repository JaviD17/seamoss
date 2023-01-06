import Navbar from "../components/Navbar";

export default function OurCompanyLayout({
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
