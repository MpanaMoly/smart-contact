import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import SmartContactLogo from '@/app/ui/smart-contact-logo';
 import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function Nav() {
  return (
    <div className="flex space-x-4  items-center justify-items-center ml-4 pl-4 mb-4 shadow-md"> 
      
        <Link href="/">
          <SmartContactLogo/>
        </Link> 
      
      
        <div className="flex justify-center space-x-4 p-2">
          <NavLinks />
        </div>
        
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
    </div>
  );
}
