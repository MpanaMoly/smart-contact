//import { lusitana } from '@/app/ui/fonts';
import Image from "next/image";
export default function SmartContactLogo() {
  //className= {/*`${lusitana.className} antialiased flex flex-row items-center leading-none text-white`*/}
  return (
    <div className="flex flex-row items-center justify-items-center antialiased">
      <Image src="/logo.png" alt="smart contact logo" width={24} height={24} />
      <h2 className="text-xl bold text-zinc-900">SMART CONTACT</h2>
    </div>
  );
}
