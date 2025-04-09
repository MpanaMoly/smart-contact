import Link from 'next/link';
import FooterLinks from '@/app/ui/home/footer-links';

export default function Footer() {
  return (
    <div className="flex items-start justify-around space-x-4 ml-4 p-2">
      <div className='flex flex-col' >
        <span className='text-sm/6 text-gray-700'> © Copyright 2025 Smart-Contact.com | All rights reserved </span>
        <span className='text-sm/6 text-gray-700'>Smart Action ltd</span>
        <span className='text-sm/6 text-gray-700'>Unit 7, Wilson Business Park, manchester M40 8WN, United </span>
      </div>
      <div className='flex flex-col' >
        <span className='text-sm/6 text-gray-700'>support@smart-contact.pro</span>
        <span className='text-sm/6 text-gray-700'>+33 5 64 31 02 42</span>
        
      </div>
      <div className="flex gap-4">
          <FooterLinks />
      </div>
    </div>
  );
}
