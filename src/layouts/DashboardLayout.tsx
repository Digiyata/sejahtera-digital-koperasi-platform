
import React, { useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Home, 
  Users, 
  CreditCard, 
  Handshake, 
  Calendar, 
  Book, 
  HelpCircle, 
  User, 
  Wallet, 
  PiggyBank, 
  Receipt, 
  LogOut 
} from "lucide-react";

const DashboardLayout: React.FC = () => {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect based on user role
  useEffect(() => {
    if (!isLoading && user) {
      // If user is at /dashboard, redirect to the appropriate role-specific dashboard
      if (location.pathname === "/dashboard") {
        navigate(`/dashboard/${user.role}`);
      }
    }
  }, [user, isLoading, location.pathname, navigate]);

  // Get sidebar menu items based on user role
  const getSidebarMenuItems = () => {
    if (user?.role === "admin") {
      return [
        { name: "Dashboard", path: "/dashboard/admin", icon: <Home size={20} /> },
        { name: "Keanggotaan", path: "/dashboard/admin/keanggotaan", icon: <Users size={20} /> },
        { name: "Transaksi", path: "/dashboard/admin/transaksi", icon: <CreditCard size={20} /> },
        { name: "Mitra", path: "/dashboard/admin/mitra", icon: <Handshake size={20} /> },
        { name: "Pegawai", path: "/dashboard/admin/pegawai", icon: <Calendar size={20} /> },
        { name: "Panduan", path: "/dashboard/admin/panduan", icon: <Book size={20} /> },
        { name: "Bantuan", path: "/dashboard/admin/bantuan", icon: <HelpCircle size={20} /> },
      ];
    } else {
      return [
        { name: "Dashboard", path: "/dashboard/user", icon: <Home size={20} /> },
        { name: "Data Pribadi", path: "/dashboard/user/data-pribadi", icon: <User size={20} /> },
        { name: "Simpanan", path: "/dashboard/user/simpanan", icon: <PiggyBank size={20} /> },
        { name: "Pinjaman", path: "/dashboard/user/pinjaman", icon: <Wallet size={20} /> },
        { name: "Riwayat Transaksi", path: "/dashboard/user/transaksi", icon: <Receipt size={20} /> },
      ];
    }
  };

  // If still loading or no user, show loading
  if (isLoading || !user) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 shadow-lg bg-white flex-col">
        <div className="h-16 flex items-center justify-center border-b">
          <span className="font-bold text-green-700 text-xl">Koperasi Sejahtera</span>
        </div>

        {/* User info */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-800 font-bold">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="px-2 pt-4 flex-grow">
          <ul className="space-y-1">
            {getSidebarMenuItems().map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t">
          <button
            onClick={logout}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <LogOut size={20} />
            <span>Keluar</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="h-16 border-b bg-white shadow-sm flex items-center justify-between px-4">
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Page title - dynamic based on route */}
          <h1 className="text-xl font-semibold text-gray-800">
            {location.pathname.split("/").pop()?.replace("-", " ").replace(/^\w/, c => c.toUpperCase()) || "Dashboard"}
          </h1>

          {/* User dropdown */}
          <div className="md:hidden flex items-center">
            <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center text-green-800 font-bold">
              {user.name.charAt(0)}
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
