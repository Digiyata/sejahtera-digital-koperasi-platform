
import React from "react";
import { Link } from "react-router-dom";

// Mock data for requirements
const requirements = [
  { id: 1, text: "Warga Negara Indonesia", icon: "🇮🇩" },
  { id: 2, text: "Minimal berusia 17 tahun", icon: "📅" },
  { id: 3, text: "Mengisi formulir pendaftaran", icon: "📝" },
  { id: 4, text: "Membayar simpanan pokok", icon: "💰" },
  { id: 5, text: "Fotokopi KTP/Identitas", icon: "📄" },
  { id: 6, text: "Pas foto terbaru", icon: "🖼️" }
];

// Mock data for benefits
const benefits = [
  { id: 1, text: "Akses pinjaman dengan bunga rendah", icon: "💵" },
  { id: 2, text: "Bagi hasil SHU (Sisa Hasil Usaha) tahunan", icon: "📊" },
  { id: 3, text: "Pelatihan kewirausahaan gratis", icon: "🎓" },
  { id: 4, text: "Jaringan usaha sesama anggota", icon: "🤝" },
  { id: 5, text: "Konsultasi bisnis dan pendampingan", icon: "💼" },
  { id: 6, text: "Diskon khusus dari mitra koperasi", icon: "🏷️" }
];

// Registration steps
const registrationSteps = [
  {
    title: "Pengisian Formulir",
    description: "Lengkapi formulir pendaftaran dengan data diri dan informasi usaha (jika ada).",
    icon: "📋"
  },
  {
    title: "Unggah Dokumen",
    description: "Unggah berkas persyaratan seperti KTP, foto, dan dokumen pendukung lainnya.",
    icon: "📤"
  },
  {
    title: "Verifikasi",
    description: "Tim koperasi akan memverifikasi data dan berkas dalam 3-5 hari kerja.",
    icon: "✅"
  },
  {
    title: "Aktivasi",
    description: "Setelah disetujui, bayar simpanan pokok untuk mengaktifkan keanggotaan Anda.",
    icon: "🔐"
  }
];

const Keanggotaan: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Keanggotaan Koperasi Sejahtera</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Bergabunglah menjadi anggota Koperasi Sejahtera dan rasakan berbagai manfaat untuk kemajuan ekonomi Anda.
          </p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Syarat Keanggotaan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {requirements.map((item) => (
              <div key={item.id} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mr-4">{item.icon}</div>
                <p className="text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Manfaat Keanggotaan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mr-4">{benefit.icon}</div>
                <p className="text-gray-800">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Alur Pendaftaran
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {registrationSteps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-center text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Fees */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Biaya Keanggotaan
          </h2>
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-700 text-white py-4 px-6">
              <h3 className="text-xl font-semibold">Komponen Biaya</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="font-medium text-gray-800">Simpanan Pokok</p>
                  <p className="text-sm text-gray-600">Dibayar satu kali saat mendaftar</p>
                </div>
                <p className="font-bold text-green-700">Rp 500.000</p>
              </div>
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="font-medium text-gray-800">Simpanan Wajib</p>
                  <p className="text-sm text-gray-600">Dibayar rutin setiap bulan</p>
                </div>
                <p className="font-bold text-green-700">Rp 100.000/bln</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">Simpanan Sukarela</p>
                  <p className="text-sm text-gray-600">Tidak wajib, sesuai kemampuan</p>
                </div>
                <p className="font-bold text-green-700">Min. Rp 50.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Siap Bergabung Menjadi Anggota?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Ikuti langkah pendaftaran dan nikmati berbagai manfaat sebagai anggota Koperasi Sejahtera.
          </p>
          <Link
            to="/landing/login"
            className="inline-block px-6 py-3 bg-green-700 text-white font-bold rounded-full text-lg hover:bg-green-800 transition duration-200"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Pertanyaan Umum
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Berapa lama proses verifikasi keanggotaan?
              </h3>
              <p className="text-gray-600">
                Proses verifikasi keanggotaan membutuhkan waktu 3-5 hari kerja setelah semua dokumen diterima dengan lengkap.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Apakah ada batasan umur maksimum untuk menjadi anggota?
              </h3>
              <p className="text-gray-600">
                Tidak ada batasan umur maksimum, selama calon anggota masih produktif dan mampu berpartisipasi aktif dalam kegiatan koperasi.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Bagaimana cara mengajukan pinjaman setelah menjadi anggota?
              </h3>
              <p className="text-gray-600">
                Anggota dapat mengajukan pinjaman setelah minimal 3 bulan aktif sebagai anggota dengan mengisi formulir pengajuan pinjaman dan melengkapi persyaratan yang ditentukan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Keanggotaan;
