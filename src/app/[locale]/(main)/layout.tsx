import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
