import { lusitana, roboto } from '@/app/ui/fonts';
import Image from "next/image";
export default function SmartContactLogo() {
  
  //className= {/*`${lusitana.className} antialiased flex flex-row items-center leading-none text-white`*/}
  return (
    <div className="flex flex-row items-center justify-items-center antialiased">
      
      <h2 className={`${roboto.className} text-xl font-extrabold font-stretch-extra-condensed text-zinc-700 tracking-widest antialiased`}>SMART CONTACT</h2>
    </div>
  );
}
