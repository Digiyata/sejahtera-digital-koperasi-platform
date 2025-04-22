
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Landing pages
import LandingLayout from "./layouts/LandingLayout";
import Beranda from "./pages/landing/Beranda";
import Tentang from "./pages/landing/Tentang";
import Program from "./pages/landing/Program";
import Keanggotaan from "./pages/landing/Keanggotaan";
import Login from "./pages/landing/Login";
import Register from "./pages/landing/Register";

// Dashboard pages - Admin
import DashboardLayout from "./layouts/DashboardLayout";
import AdminDashboard from "./pages/dashboard/admin/Dashboard";
import AdminKeanggotaan from "./pages/dashboard/admin/Keanggotaan";
import AdminTransaksi from "./pages/dashboard/admin/Transaksi";
import AdminMitra from "./pages/dashboard/admin/Mitra";
import AdminPegawai from "./pages/dashboard/admin/Pegawai";
import AdminPanduan from "./pages/dashboard/admin/Panduan";
import AdminBantuan from "./pages/dashboard/admin/Bantuan";

// Dashboard pages - User
import UserDashboard from "./pages/dashboard/user/Dashboard";
import UserDataPribadi from "./pages/dashboard/user/DataPribadi";
import UserSimpanan from "./pages/dashboard/user/Simpanan";
import UserPinjaman from "./pages/dashboard/user/Pinjaman";
import UserTransaksi from "./pages/dashboard/user/Transaksi";

// Not Found
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Landing Pages */}
            <Route path="landing" element={<LandingLayout />}>
              <Route path="beranda" element={<Beranda />} />
              <Route path="tentang" element={<Tentang />} />
              <Route path="program" element={<Program />} />
              <Route path="keanggotaan" element={<Keanggotaan />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            
            {/* Dashboard Routes */}
            <Route path="dashboard" element={<DashboardLayout />}>
              {/* Admin Routes */}
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin/keanggotaan" element={<AdminKeanggotaan />} />
              <Route path="admin/transaksi" element={<AdminTransaksi />} />
              <Route path="admin/mitra" element={<AdminMitra />} />
              <Route path="admin/pegawai" element={<AdminPegawai />} />
              <Route path="admin/panduan" element={<AdminPanduan />} />
              <Route path="admin/bantuan" element={<AdminBantuan />} />
              
              {/* User Routes */}
              <Route path="user" element={<UserDashboard />} />
              <Route path="user/data-pribadi" element={<UserDataPribadi />} />
              <Route path="user/simpanan" element={<UserSimpanan />} />
              <Route path="user/pinjaman" element={<UserPinjaman />} />
              <Route path="user/transaksi" element={<UserTransaksi />} />
              
              {/* Default redirect based on role will be handled by the DashboardLayout */}
              <Route index element={<Navigate to="admin" replace />} />
            </Route>
            
            {/* Redirect root to landing/beranda */}
            <Route path="/" element={<Navigate to="/landing/beranda" replace />} />
            
            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
