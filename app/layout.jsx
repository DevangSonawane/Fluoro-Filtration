import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Fluoro Filtration",
  description: "Filtration sourcing and technical support for pharmaceutical and chemical manufacturers in India."
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Nav />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
