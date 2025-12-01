
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggleButton } from './theme-toggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map(link => document.querySelector(link.href));
      let currentSection = '#home';

      if (document.querySelector('#home') && window.scrollY < (document.querySelector('#home') as HTMLElement).offsetHeight) {
        currentSection = '#home';
      } else {
        for (const section of sections) {
          if (section && (section as HTMLElement).offsetTop <= window.scrollY + 100) {
            currentSection = `#${section.id}`;
          }
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItems = ({ isMobile }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => {
            if (isMobile) setMobileMenuOpen(false);
          }}
          className={cn(
            'relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
            activeLink === link.href ? 'text-primary' : 'text-foreground/80',
            isMobile && 'block w-full text-left text-base'
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
  
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/10 bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2 text-xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
            MD SUBBIR BIN HARUN
          </span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          <NavLinkItems />
        </nav>
        <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
                <a href="/MALIHA-MEHNAZ-Resume.pdf" download="Maliha_Mehnaz_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
            </Button>
            <ThemeToggleButton />
            <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-background">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Mobile Menu</SheetTitle>
                    <SheetDescription>
                      A navigation menu for mobile devices with links to different sections of the portfolio.
                    </SheetDescription>
                  </SheetHeader>
                <div className="flex h-full flex-col p-6">
                    <div className="flex justify-between items-center mb-8">
                        <Link href="#home" className="flex items-center gap-2 text-xl font-bold">
                           <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
                             MD SUBBIR BIN HARUN
                           </span>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                            <X />
                        </Button>
                    </div>
                    <nav className="flex flex-col gap-4">
                      <NavLinkItems isMobile />
                    </nav>
                    <div className='mt-auto'>
            <Button asChild className="mt-4 w-full">
              <a href="/MALIHA-MEHNAZ-Resume.pdf" download="Maliha_Mehnaz_Resume.pdf" onClick={() => setMobileMenuOpen(false)}>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
                    </div>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
