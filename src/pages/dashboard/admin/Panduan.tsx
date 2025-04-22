
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const guides = [
  {
    title: "Manajemen Anggota",
    description: "Panduan lengkap untuk mengelola data anggota koperasi",
    sections: [
      "Pendaftaran anggota baru",
      "Verifikasi data anggota",
      "Update profil anggota",
      "Penanganan resign anggota"
    ]
  },
  {
    title: "Transaksi Keuangan",
    description: "Cara mengelola berbagai jenis transaksi di sistem",
    sections: [
      "Proses simpanan",
      "Pengajuan pinjaman",
      "Pembayaran angsuran",
      "Penarikan dana"
    ]
  },
  {
    title: "Laporan dan Analisis",
    description: "Panduan membuat dan menganalisis laporan keuangan",
    sections: [
      "Laporan harian",
      "Rekap bulanan",
      "Analisis tren",
      "Export data"
    ]
  },
  {
    title: "Konfigurasi Sistem",
    description: "Petunjuk pengaturan sistem dan manajemen pengguna",
    sections: [
      "Pengaturan umum",
      "Manajemen user",
      "Backup data",
      "Keamanan sistem"
    ]
  }
];

const AdminPanduan: React.FC = () => {
  const { user } = useRequireAuth("admin");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Panduan</h1>
        <p className="text-gray-600">Cara penggunaan sistem admin</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        <Input
          className="pl-10"
          placeholder="Cari panduan..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
              <ul className="space-y-2">
                {guide.sections.map((section, sectionIndex) => (
                  <li key={sectionIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-700">{section}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Butuh bantuan lebih lanjut?</h3>
        <p className="text-green-600 mb-4">
          Tim support kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami jika ada pertanyaan.
        </p>
        <div className="flex space-x-4">
          <button className="text-green-600 hover:text-green-700 text-sm font-medium">
            Hubungi Support
          </button>
          <button className="text-green-600 hover:text-green-700 text-sm font-medium">
            FAQ
          </button>
          <button className="text-green-600 hover:text-green-700 text-sm font-medium">
            Video Tutorial
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanduan;
