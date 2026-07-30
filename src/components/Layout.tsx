import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

type NavbarProps = {
  onOpenContactForm: () => void;
};

const navLinks = [
  { name: '首頁', path: '/' },
  { name: '個人專案', path: '/side-projects' },
  { name: '學習與教學', path: '/teaching' },
];

export function Navbar({ onOpenContactForm }: NavbarProps) {
  const location = useLocation();

  return (
    <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 shadow-[0_40px_40px_-15px_rgba(15,23,42,0.08)] border-b border-slate-200/70">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-black text-primary tracking-tighter font-headline uppercase whitespace-nowrap">
          Ivan.
        </Link>
        <div className="hidden md:flex gap-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-headline text-sm tracking-tight uppercase transition-all duration-300 border border-transparent px-4 py-2 rounded-full",
                  isActive 
                    ? "bg-white text-primary border-slate-200 font-semibold shadow-sm" 
                    : "text-primary/70 hover:bg-slate-100 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <button
          type="button"
          onClick={onOpenContactForm}
          className="border border-slate-200 text-primary px-6 py-2 rounded-full font-headline font-semibold text-sm uppercase hover:bg-slate-100 transition-all"
        >
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
          <a href="https://github.com/RickC-302" target="_blank" rel="noopener noreferrer" className="text-on-primary/80 font-body text-sm tracking-wide hover:text-tertiary underline decoration-wavy transition-all">GitHub</a>
          <a href="https://www.linkedin.com/in/ivanlam2121/" target="_blank" rel="noopener noreferrer" className="text-on-primary/80 font-body text-sm tracking-wide hover:text-tertiary underline decoration-wavy transition-all">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
