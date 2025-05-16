import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Google Fonts - Poppins (modern, clean medical font) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/account">Account</Link> */}
          </nav>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
