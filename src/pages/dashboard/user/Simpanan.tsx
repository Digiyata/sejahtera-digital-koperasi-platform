
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const UserSimpanan: React.FC = () => {
  const { user } = useRequireAuth("user");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Simpanan</h1>
      <p className="text-gray-600">Riwayat simpanan Anda</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-center text-gray-500">Halaman Simpanan User - Konten akan diimplementasikan</p>
      </div>
    </div>
  );
};

export default UserSimpanan;
