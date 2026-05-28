'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '#',
    children: [
      { label: "Chairman's Message", href: '/chairmanmessage' },
      { label: 'Board of Directors', href: '/board-of-directors' },
      { label: 'Management Team', href: '/management-team' },
    ],
  },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Drilling & Workover', href: '#' },
      { label: 'Directional Drilling', href: '#' },
      { label: 'Water Well', href: '#' },
      { label: 'Tubular Running Services', href: '#' },
      { label: 'Manpower', href: '#' },
      { label: 'BHA Rental', href: '#' },
      { label: 'Fishing Services', href: '#' },
    ],
  },
  { label: 'QHSE', href: '/qhse' },
  {
    label: 'Careers',
    href: '#',
    children: [{ label: 'Join Us', href: '/careers' }],
  },
  { label: 'Contact Us', href: '/contact' },
];

function DropdownMenu({ items }: { items: NavChild[] }) {
  return (
    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-slate-100 rounded-lg shadow-xl py-1 z-50">
      {items.map((child) => (
        <Link
          key={child.label}
          href={child.href}
          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium"
        >
          {child.label}
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav ref={navRef} className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-14 h-14">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-0NU6YcKMYEqn4H9EdvYbbZ0YRN3Mhn.png"
              alt="KDC - Kuwait Drilling CO. Logo"
              width={56}
              height={56}
              priority
              className="object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-bold text-base text-blue-700 tracking-wide">Kuwait Drilling CO.</span>
            <span className="text-xs text-slate-500 tracking-wider uppercase">K.S.C.C.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                  />
                )}
              </Link>
              {item.children && openDropdown === item.label && (
                <DropdownMenu items={item.children} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between py-2.5 px-3 text-slate-700 font-semibold hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-blue-100 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 px-2 text-sm text-slate-600 hover:text-blue-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2.5 px-3 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}
