
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const UserDataPribadi: React.FC = () => {
  const { user } = useRequireAuth("user");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Data Pribadi</h1>
      <p className="text-gray-600">Lihat dan ubah data pribadi Anda</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-center text-gray-500">Halaman Data Pribadi User - Konten akan diimplementasikan</p>
      </div>
    </div>
  );
};

export default UserDataPribadi;
