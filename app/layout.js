import "./globals.css";

import Footer from "./ui/home/footer";
import { inter, lusitana, roboto } from "./ui/fonts";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
            {children}
            <Footer />
      </body>
    </html>
  );
}
