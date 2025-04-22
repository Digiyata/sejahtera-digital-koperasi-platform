
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const AdminPanduan: React.FC = () => {
  const { user } = useRequireAuth("admin");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Panduan</h1>
      <p className="text-gray-600">Cara penggunaan sistem admin</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-center text-gray-500">Halaman Panduan Admin - Konten akan diimplementasikan</p>
      </div>
    </div>
  );
};

export default AdminPanduan;
