import "./globals.css";
import Nav from "./ui/home/nav";
import Footer from "./ui/home/footer";
import { inter, lusitana, roboto } from "./ui/fonts";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col m-4 p-4 antialiased shadow-2xl rounded-2xl">
              <Nav />   
            {children}
            <Footer />
          
      
      </body>
    </html>
  );
}
