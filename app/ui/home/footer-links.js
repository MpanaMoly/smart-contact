import Link from "next/link";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Terms and Conditions of Service", href: "/services/terms-conditions" },
  { name: "Privacy Policy", href: "/services/privacy-policy" },
  { name: "Data Processing Agreement", href: "/services/dpa" },

];

export default function FooterLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <p className="text-sm">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
