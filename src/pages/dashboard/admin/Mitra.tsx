
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const AdminMitra: React.FC = () => {
  const { user } = useRequireAuth("admin");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">List Mitra</h1>
      <p className="text-gray-600">Data mitra dan status kerjasama</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-center text-gray-500">Halaman Mitra Admin - Konten akan diimplementasikan</p>
      </div>
    </div>
  );
};

export default AdminMitra;
