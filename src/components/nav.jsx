
import React, { useState } from 'react';
import { Search, Menu, X, User, ShoppingCart, Heart, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'Browse Games', href: '/browse' },
    { name: 'New Releases', href: '/new' },
    { name: 'Categories', href: '/categories' },
    { name: 'Deals', href: '/deals' },
    { name: 'Community', href: '/community' }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              GameVault
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  item.active
                    ? 'bg-purple-600/30 text-purple-300 border border-purple-500/50'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/50"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
              <User className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm border-t border-purple-500/20 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
              </div>

              {/* Mobile Nav Items */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    item.active
                      ? 'bg-purple-600/30 text-purple-300'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile User Actions */}
              <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white flex-1">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white flex-1">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;