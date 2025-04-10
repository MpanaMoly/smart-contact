import "./globals.css";

import Footer from "./ui/home/footer";
import { inter, lusitana, roboto } from "./ui/fonts";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-4 m-4">
            {children}
            <Footer />
      </body>
    </html>
  );
}
