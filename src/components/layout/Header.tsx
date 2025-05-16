import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import AccountPage from '@/pages/AccountPage';


const Header = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Will implement search functionality in future update
    console.log('Searching for:', searchQuery);
    // Navigate to search results page
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-medical-700">
              Samriddhi <span className="text-medical-500">Enterprises</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-medical-600 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-medical-600 font-medium">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-medical-600 font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-medical-600 font-medium">
              Contact
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-medical-600 font-medium">
              My Account
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-[200px] lg:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                size="icon" 
                variant="ghost" 
                className="absolute right-0 top-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <div className="flex items-center space-x-4">
              <Link to="/account">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-medical-600 text-white text-xs rounded-full">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link to="/cart" className="relative mr-2">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-medical-600 text-white text-xs rounded-full">
                  {cartItemsCount}
                </Badge>
              )}
            </Link>
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <form onSubmit={handleSearch} className="relative mb-4">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                size="icon" 
                variant="ghost" 
                className="absolute right-0 top-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-medical-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-medical-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-medical-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-medical-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/account" 
                className="text-gray-700 hover:text-medical-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                My Account
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
