import { Footer } from "./_components/Footer";
import { HeaderMain } from "./_components/HeaderMain";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderMain />
      {children}
      <Footer />
    </div>
  );
}
