import "./globals.css";
import Nav from "./ui/home/nav";
import Footer from "./ui/home/footer";
import { inter, lusitana, roboto } from "./ui/fonts";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col ml-4 mr-4 mt-0 pl-4 pr-4 antialiased shadow-xl rounded-2xl`}>
              <Nav />   
            {children}
            <Footer />
          
      
      </body>
    </html>
  );
}
