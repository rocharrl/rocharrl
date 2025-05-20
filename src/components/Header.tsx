
import React, { useState } from 'react';
import { CTAButton } from './ui/cta-button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Links de navegação
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Soluções', href: '#cloud-types' },
    { name: 'Vantagens', href: '#advantages' },
    { name: 'DHI', href: '#dhi' },
    { name: 'Pilares', href: '#pillars' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img 
              src="/lovable-uploads/c43749d9-634f-4495-8dd3-d17b263c18c9.png" 
              alt="NaturalCloud by Newsupri" 
              className="h-10 md:h-12"
            />
          </a>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-naturalCloud-green font-medium text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
          <CTAButton variant="primary" size="sm">
            Fale com um Especialista
          </CTAButton>
        </nav>

        {/* Menu mobile button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-naturalCloud-green font-medium text-base transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <CTAButton variant="primary" size="default" className="mt-2">
                Fale com um Especialista
              </CTAButton>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
