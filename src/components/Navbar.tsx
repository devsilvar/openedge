import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, MessageCircle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { logo } from '@/assets';

// Utility for clean tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Navigation Item Configuration
 * Single source of truth for navigation items
 */
const NAV_ITEMS = [
  { name: 'Operations', href: '/operating-system' },
  { name: 'Business Health Check', href: '/book-health-check' },
  { name: 'Training', href: '/training' },
  { name: 'About Us', href: '/about' },
] as const;

/**
 * NavLink Component
 * Reusable navigation link with consistent styling
 */
interface NavLinkItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function NavLinkItem({ href, children, className, onClick }: NavLinkItemProps) {
  return (
    <NavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'text-[15px] font-medium transition-all duration-300 px-4 py-2 rounded-lg',
          isActive
            ? 'text-brandBlueSoft bg-blue-50 font-semibold'
            : 'text-navMuted hover:text-navText hover:bg-blue-50',
          className,
        )
      }
    >
      {children}
    </NavLink>
  );
}

/**
 * Desktop Navigation Component
 */
function DesktopNav() {
  return (
    <nav className='hidden md:flex items-center gap-8'>
      {NAV_ITEMS.map((item) => (
        <NavLinkItem key={item.name} href={item.href}>
          {item.name}
        </NavLinkItem>
      ))}
    </nav>
  );
}

/**
 * Mobile Navigation Component
 */
function MobileNav({ onItemClick }: { onItemClick: () => void }) {
  return (
    <div className='md:hidden border-t border-gray-200 bg-navBg'>
      <div className='px-6 py-6 space-y-5'>
        {NAV_ITEMS.map((item) => (
          <NavLinkItem
            key={item.name}
            href={item.href}
            onClick={onItemClick}
            className='block'
          >
            {item.name}
          </NavLinkItem>
        ))}
        <a
          href='https://wa.me/2347047544000'
          target='_blank'
          rel='noopener noreferrer'
          className='w-full'
        >
          <button className='w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-[15px] font-semibold py-3 rounded-full flex items-center justify-center gap-2'>
            <MessageCircle size={18} />
            WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
}

/**
 * Logo Component
 */
function Logo() {
  return (
    <Link to='/' className='flex items-center gap-3'>
      <img src={logo} alt='Open Edge' className='h-16 w-auto object-contain' />
      <span className='text-[17px] font-semibold text-navText tracking-tight'></span>
    </Link>
  );
}

/**
 * Mobile Toggle Button Component
 */
function MobileToggle({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className='md:hidden text-navText'
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}

/**
 * CTA Button Component
 */
function CTAButton() {
  return (
    <div className='hidden md:block'>
      <a
        href='https://wa.me/2347047544000'
        target='_blank'
        rel='noopener noreferrer'
      >
        <button className='bg-[#25D366] hover:bg-[#20BA5A] text-white text-[15px] font-semibold px-6 py-2 rounded-full shadow-sm transition flex items-center gap-2'>
          <MessageCircle size={18} />
          WhatsApp
        </button>
      </a>
    </div>
  );
}

/**
 * Navbar Component
 * Main navigation component that composes all sub-components
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 shadow-sm z-50 backdrop-blur-sm bg-white/95'>
      <div className='mx-auto px-6 lg:px-8 max-w-[1280px]'>
        <div className='flex items-center justify-between h-[68px]'>
          <Logo />
          <DesktopNav />
          <CTAButton />
          <MobileToggle isOpen={isOpen} onClick={handleToggle} />
        </div>
      </div>

      {isOpen && <MobileNav onItemClick={handleItemClick} />}
    </header>
  );
}
