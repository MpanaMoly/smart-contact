import Link from 'next/link';
import FooterLinks from '@/app/ui/home/footer-links';

export default function Footer() {
  return (
    <div className="flex items-start justify-around space-x-4 ml-4 p-2">
      <div className='flex flex-col' >
        <span className='text-sm text-zinc-500'> © Copyright 2025 Smart-Contact.com | All rights reserved </span>
        <span className='text-sm text-zinc-500'>Smart Action LTD</span>
        <span className='text-sm text-zinc-500'>MANCHESTER</span>
      </div>
      <div className='flex flex-col' >
        <span className='text-sm text-zinc-500'>support@smart-contact.pro</span>
        <span className='text-sm text-zinc-500'>+33 5 64 31 02 42</span>
        
      </div>
      <div className="flex gap-4">
          <FooterLinks />
      </div>
    </div>
  );
}
