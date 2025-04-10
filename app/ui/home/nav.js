'use client'
import Link from 'next/link';
import NavLinks from '@/app/ui/home/nav-links';
import SmartContactLogo from '@/app/ui/smart-contact-logo';

export default function Nav() {
  return (
    <div className='fixed inset-x-0 top-0 z-10 border-b-1 border-gray-950 bg-white mt-4'>
      
            <div className="flex h-14 items-center justify-between gap-8 px-4 md:pr-10 sm:px-6"> 
              
              <Link href="/" className='flex items-center gap-4'>
                <SmartContactLogo/>
              </Link> 
            
            
                    <div className="flex items-center gap-6 max-md:hidden">
                      <NavLinks />
                    </div>
            </div>
    </div>
  );
}
