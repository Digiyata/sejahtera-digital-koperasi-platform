
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LandingLayout: React.FC = () => {
  const location = useLocation();
  
  // Check if the current path is login or register to show a simplified header
  const isAuthPage = location.pathname.includes("/login") || location.pathname.includes("/register");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-astra-yellow text-astra-blue shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/landing/beranda" className="flex items-center space-x-2">
              <img src="/lovable-uploads/bc9ca972-4e26-4472-9102-2198dbb9fcc7.png" alt="Koperasi Astra Logo" className="h-10 w-auto" />
            </Link>
            
            {!isAuthPage && (
              <nav className="hidden md:flex space-x-8">
                <Link 
                  to="/landing/tentang" 
                  className={`font-medium hover:text-astra-dark-blue ${
                    location.pathname === "/landing/tentang" ? "font-bold" : ""
                  }`}
                >
                  TENTANG KAMI
                </Link>
                <Link 
                  to="/landing/pinjaman" 
                  className={`font-medium hover:text-astra-dark-blue ${
                    location.pathname === "/landing/pinjaman" ? "font-bold" : ""
                  }`}
                >
                  PINJAMAN
                </Link>
                <Link 
                  to="/landing/simpanan" 
                  className={`font-medium hover:text-astra-dark-blue ${
                    location.pathname === "/landing/simpanan" ? "font-bold" : ""
                  }`}
                >
                  SIMPANAN
                </Link>
                <Link 
                  to="/landing/berita" 
                  className={`font-medium hover:text-astra-dark-blue ${
                    location.pathname === "/landing/berita" ? "font-bold" : ""
                  }`}
                >
                  BERITA
                </Link>
                <Link 
                  to="/landing/hubungi" 
                  className={`font-medium hover:text-astra-dark-blue ${
                    location.pathname === "/landing/hubungi" ? "font-bold" : ""
                  }`}
                >
                  HUBUNGI KAMI
                </Link>
                <Link 
                  to="/landing/karir" 
                  className={`font-medium hover:text-astra-dark-blue ${
                    location.pathname === "/landing/karir" ? "font-bold" : ""
                  }`}
                >
                  KARIR
                </Link>
              </nav>
            )}
            
            {!isAuthPage && (
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full bg-transparent text-astra-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <Link
                  to="/landing/download"
                  className="hidden md:inline-flex items-center px-4 py-2 bg-astra-blue text-white font-bold rounded-full hover:bg-astra-dark-blue transition duration-200"
                >
                  DOWNLOAD APLIKASI
                </Link>
              </div>
            )}
            
            {/* Mobile menu button */}
            {!isAuthPage && (
              <button className="md:hidden text-astra-blue focus:outline-none">
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

      {/* Footer */}
      {!isAuthPage && (
        <>
          <footer className="bg-astra-blue text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Logo and Call to Action */}
                <div className="md:col-span-4">
                  <img src="/lovable-uploads/bc9ca972-4e26-4472-9102-2198dbb9fcc7.png" alt="Koperasi Astra Logo" className="h-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Mulai Persiapkan Masa Depanmu Sekarang</h3>
                  <Link 
                    to="/landing/download"
                    className="inline-flex items-center px-6 py-3 bg-astra-yellow text-astra-blue font-bold rounded-full mt-4 hover:bg-yellow-400 transition duration-200"
                  >
                    Download Aplikasi Koperasi Astra
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Navigation Links */}
                <div className="md:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold mb-4">Navigasi</h4>
                      <ul className="space-y-2">
                        <li><Link to="/landing/tentang" className="hover:underline">Tentang Kami</Link></li>
                        <li><Link to="/landing/berita" className="hover:underline">Berita & Promosi</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-4">Layanan</h4>
                      <ul className="space-y-2">
                        <li><Link to="/landing/simpanan" className="hover:underline">Simpanan</Link></li>
                        <li><Link to="/landing/pinjaman" className="hover:underline">Pinjaman</Link></li>
                        <li><Link to="/landing/karir" className="hover:underline">Karir</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-4">Kontak</h4>
                      <p className="mb-2">021-21242625</p>
                      <p className="mb-4">customer.care@koperasi-astra.com</p>
                      <h4 className="font-bold mb-2">Ada Pertanyaan?</h4>
                      <div className="flex space-x-2">
                        <a href="#" className="hover:text-astra-yellow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                        <a href="#" className="hover:text-astra-yellow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a href="#" className="hover:text-astra-yellow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm opacity-70">
                <p>Copyright © 2023 Koperasi Karyawan Astra International</p>
              </div>
            </div>
          </footer>
          
          {/* Customer Care Floating Button */}
          <div className="fixed bottom-6 right-6">
            <button className="flex items-center bg-astra-yellow text-astra-blue px-4 py-2 rounded-full font-bold shadow-lg hover:bg-yellow-400 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              CUSTOMER CARE
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LandingLayout;
