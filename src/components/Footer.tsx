import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { logo } from '@/assets';

export default function Footer() {
  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ];

  const resourceLinks = [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Contact', href: '/contact' },
  ];

  const policyLinks = ['Privacy Policy', 'Terms of Service'];

  return (
    <footer className='w-full bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#2563eb] pt-16 pb-8 px-6'>
      <div className='mx-auto' style={{ maxWidth: 'var(--container-max)' }}>
        {/* Top Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16'>
          {/* Brand Column */}
          <div className='max-w-xs'>
            <div className='flex items-center mb-5'>
              <img 
                src={logo} 
                alt='Open Edge' 
                className='h-12 w-auto object-contain mr-3 bg-white/90 rounded-lg p-1'
              />
              <span className='text-[18px] font-bold text-white tracking-tight'>
           
              </span>
            </div>

            <p className='text-[16px] text-white/80 leading-relaxed mb-6'>
              Open Edge is a hospitality solutions firm fixing the system and middle-management failures holding hospitality businesses back. We help hospitality owners build real wealth and a lasting legacy from their investments while developing operational leaders who can run hospitality businesses properly.
            </p>

            {/* Contact Info */}
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-[13px] text-white/70'>
                <MapPin size={16} className='text-white/60' />
                <span>Lagos, Nigeria</span>
              </div>
              <div className='flex items-center gap-3 text-[13px] text-white/70'>
                <Mail size={16} className='text-white/60' />
                <span>hello@openedgehospitality.com</span>
              </div>
              <div className='flex items-center gap-3 text-[13px] text-white/70'>
                <Phone size={16} className='text-white/60' />
                <span>07047544000</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className='text-[13px] font-bold uppercase tracking-wider text-white mb-6 relative'>
              Company
              <span className='absolute -bottom-2 left-0 w-8 h-0.5 bg-white/40 rounded-full' />
            </h4>
            <ul className='space-y-3.5'>
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-[14px] text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className='text-[13px] font-bold uppercase tracking-wider text-white mb-6 relative'>
              Resources
              <span className='absolute -bottom-2 left-0 w-8 h-0.5 bg-white/40 rounded-full' />
            </h4>
            <ul className='space-y-3.5'>
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-[14px] text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Newsletter */}
          <div>
            <h4 className='text-[13px] font-bold uppercase tracking-wider text-white mb-6 relative'>
              Stay Connected
              <span className='absolute -bottom-2 left-0 w-8 h-0.5 bg-white/40 rounded-full' />
            </h4>

            <p className='text-[13px] text-white/70 mb-4'>
              Follow us on social media for the latest updates
            </p>

            <div className='flex space-x-3'>
              <a
                href='#'
                className='w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 border border-white/20'
              >
                <Linkedin size={18} className='text-white' />
              </a>

              <a
                href='#'
                className='w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 border border-white/20'
              >
                <Twitter size={18} className='text-white' />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/20 mt-14 mb-8' />

        {/* Bottom Row */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-[13px] text-white/60'>
            © 2024 Open Edge Hospitality Solutions. All rights reserved.
          </p>

          <div className='flex justify-center space-x-8'>
            {policyLinks.map((item) => (
              <a
                key={item}
                href='#'
                className='text-[13px] text-white/60 hover:text-white transition-colors'
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
