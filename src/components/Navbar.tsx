import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, User, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { currentUser } from '@/data/mockData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/browse', label: 'Browse' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Leaf className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-display text-xl font-semibold text-foreground">99Dresses</span>
            <span className="text-xs font-body text-muted-foreground">2.0</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/list">
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                List Item
              </Button>
            </Link>
            <Link to="/dashboard" className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1 text-primary font-medium">
                <span>{currentUser.credits}</span>
                <span className="text-muted-foreground">credits</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-sm py-2 ${
                    isActive(link.path)
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/list" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full gap-2">
                  <Plus className="h-4 w-4" />
                  List Item
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
