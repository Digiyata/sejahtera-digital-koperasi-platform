
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const LandingLayout: React.FC = () => {
  const location = useLocation();
  
  // Check if the current path is login or register to show a simplified header
  const isAuthPage = location.pathname.includes("/login") || location.pathname.includes("/register");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/landing/beranda" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Koperasi Sejahtera</span>
            </Link>
            
            {!isAuthPage && (
              <nav className="hidden md:flex space-x-8">
                <Link 
                  to="/landing/beranda" 
                  className={`font-medium hover:text-green-200 ${
                    location.pathname === "/landing/beranda" ? "underline underline-offset-4" : ""
                  }`}
                >
                  Beranda
                </Link>
                <Link 
                  to="/landing/tentang" 
                  className={`font-medium hover:text-green-200 ${
                    location.pathname === "/landing/tentang" ? "underline underline-offset-4" : ""
                  }`}
                >
                  Tentang
                </Link>
                <Link 
                  to="/landing/program" 
                  className={`font-medium hover:text-green-200 ${
                    location.pathname === "/landing/program" ? "underline underline-offset-4" : ""
                  }`}
                >
                  Program
                </Link>
                <Link 
                  to="/landing/keanggotaan" 
                  className={`font-medium hover:text-green-200 ${
                    location.pathname === "/landing/keanggotaan" ? "underline underline-offset-4" : ""
                  }`}
                >
                  Keanggotaan
                </Link>
              </nav>
            )}
            
            {!isAuthPage && (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/landing/login" 
                  className="px-4 py-2 rounded-md bg-white text-green-700 font-medium hover:bg-green-100 transition duration-200"
                >
                  Login
                </Link>
              </div>
            )}
            
            {/* Mobile menu button */}
            {!isAuthPage && (
              <button className="md:hidden text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer - shown only on non-auth pages */}
      {!isAuthPage && (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Kontak</h3>
                <address className="not-italic">
                  <p>Jl. Koperasi No. 123</p>
                  <p>Jakarta Pusat, 10110</p>
                  <p className="mt-2">Telepon: (021) 123-4567</p>
                  <p>Email: info@koperasisejahtera.id</p>
                </address>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Navigasi Cepat</h3>
                <ul className="space-y-2">
                  <li><Link to="/landing/tentang" className="hover:text-green-300">Tentang</Link></li>
                  <li><Link to="/landing/program" className="hover:text-green-300">Program</Link></li>
                  <li><Link to="/landing/keanggotaan" className="hover:text-green-300">Keanggotaan</Link></li>
                  <li><Link to="/landing/login" className="hover:text-green-300">Login</Link></li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Media Sosial</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-green-300">Facebook</a>
                  <a href="#" className="hover:text-green-300">Instagram</a>
                  <a href="#" className="hover:text-green-300">Twitter</a>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Berlangganan Info</h3>
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Email Anda" 
                    className="px-3 py-2 rounded-l-md text-gray-800 w-full"
                  />
                  <button 
                    type="submit" 
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md transition duration-200"
                  >
                    Kirim
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
              <p>&copy; {new Date().getFullYear()} Koperasi Sejahtera. Hak Cipta Dilindungi.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default LandingLayout;
