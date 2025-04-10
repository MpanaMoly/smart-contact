'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/" },
 { name: "Order Service", href: "/checkout" },
 { name: "Log in", href: "/login" },
];

export default function NavLinks() {  
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href} className={clsx(
            'flex items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium text-gray-950 hover:bg-sky-100 hover:text-blue-400 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-400': pathname === link.href,
            },
          )}>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
