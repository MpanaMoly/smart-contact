import Link from 'next/link';
import FooterLinks from '@/app/ui/home/footer-links';

export default function Footer() {
  return (
    <div className="flex items-center justify-items-center space-x-4 ml-4 p-2">
      <div className='flex' >
        <span className='text-sm'>Copyright Smart Contact ©️</span>
      </div>
      <div className="flex gap-4">
          <FooterLinks />
      </div>
    </div>
  );
}
