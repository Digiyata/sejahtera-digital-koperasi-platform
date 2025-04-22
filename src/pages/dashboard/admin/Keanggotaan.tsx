
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const AdminKeanggotaan: React.FC = () => {
  const { user } = useRequireAuth("admin");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Pengaturan Anggota</h1>
      <p className="text-gray-600">Kelola data anggota koperasi</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-center text-gray-500">Halaman Pengaturan Anggota - Konten akan diimplementasikan</p>
      </div>
    </div>
  );
};

export default AdminKeanggotaan;
