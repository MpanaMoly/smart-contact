import Link from 'next/link';
import NavLinks from '@/app/ui/home/nav-links';
import SmartContactLogo from '@/app/ui/smart-contact-logo';
// import { PowerIcon } from '@heroicons/react/24/outline';

export default function Nav() {
  return (
    <div className="flex space-x-4  items-center justify-items-center m-4 p-2 shadow-md"> 
      <div className=' p-2'>
        <Link href="/">
          <SmartContactLogo/>
        </Link> 
      </div>
      
        <div className="flex justify-center space-x-4 p-2">
          <NavLinks />
        </div>
      
    </div>
  );
}
