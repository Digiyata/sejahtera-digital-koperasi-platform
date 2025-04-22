
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const UserTransaksi: React.FC = () => {
  const { user } = useRequireAuth("user");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Riwayat Transaksi</h1>
      <p className="text-gray-600">Semua aktivitas keuangan Anda</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-center text-gray-500">Halaman Transaksi User - Konten akan diimplementasikan</p>
      </div>
    </div>
  );
};

export default UserTransaksi;
