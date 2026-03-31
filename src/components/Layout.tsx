import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: '首頁', path: '/' },
  { name: '學習與教學', path: '/teaching' },
  { name: '專案開發', path: '/projects' },
  { name: '個人專案', path: '/side-projects' },
  { name: 'SISU 小角落', path: '/sisu-corner' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-surface/70 backdrop-blur-md sticky top-0 z-50 shadow-[0_40px_40px_-15px_rgba(13,29,42,0.06)]">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-black text-primary tracking-tighter font-headline uppercase whitespace-nowrap">
          Ivan - This is me.
        </Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-headline text-base tracking-tight uppercase transition-all duration-300",
                  isActive 
                    ? "text-primary border-b-2 border-tertiary pb-1 font-bold" 
                    : "text-primary/60 font-medium hover:text-tertiary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 font-headline font-bold text-lg tracking-tight uppercase hover:opacity-90 transition-all active:scale-95">
          聯絡我
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto gap-4">
        <div className="font-body text-sm tracking-wide text-on-primary/80">
          © 2026, Ivan Personal Website.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-on-primary/80 font-body text-sm tracking-wide hover:text-tertiary underline decoration-wavy transition-all">GitHub</a>
          <a href="#" className="text-on-primary/80 font-body text-sm tracking-wide hover:text-tertiary underline decoration-wavy transition-all">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
