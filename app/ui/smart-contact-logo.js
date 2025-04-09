import { lusitana, roboto, ubuntu_mono } from '@/app/ui/fonts';
import Image from "next/image";
export default function SmartContactLogo() {
  

  return (
    <div className="flex flex-row items-center justify-items-center">
      
      <h2 className={`${roboto.className} text-2xl font-bold text-black tracking-tight  antialiased`}>Smart Contact</h2>
    </div>
  );
}
