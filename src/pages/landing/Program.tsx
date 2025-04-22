
import React from "react";

// Mock data for programs
const simpananPrograms = [
  {
    title: "Simpanan Pokok",
    description: "Simpanan yang wajib dibayarkan oleh anggota pada saat bergabung dengan koperasi. Simpanan ini tidak dapat diambil selama masih menjadi anggota.",
    amount: "Rp 500.000",
    icon: "💰"
  },
  {
    title: "Simpanan Wajib",
    description: "Simpanan yang wajib dibayarkan oleh anggota setiap bulan. Simpanan ini dapat diambil jika keanggotaan dinyatakan berakhir.",
    amount: "Rp 100.000/bulan",
    icon: "📅"
  },
  {
    title: "Simpanan Sukarela",
    description: "Simpanan yang dapat dibayarkan secara fleksibel oleh anggota. Besaran dan waktu pembayaran sesuai kemampuan dan keinginan anggota.",
    amount: "Minimal Rp 50.000",
    icon: "✨"
  }
];

const pinjamanPrograms = [
  {
    title: "Pinjaman Modal Usaha",
    description: "Fasilitas pinjaman bagi anggota untuk mengembangkan usaha dengan bunga rendah dan proses cepat.",
    terms: "Tenor 6-36 bulan, bunga 0.8% per bulan",
    maxAmount: "Hingga Rp 50 juta",
    icon: "📈"
  },
  {
    title: "Pinjaman Darurat",
    description: "Pinjaman jangka pendek untuk kebutuhan mendesak dengan proses persetujuan cepat.",
    terms: "Tenor 1-12 bulan, bunga 1% per bulan",
    maxAmount: "Hingga Rp 10 juta",
    icon: "🚑"
  }
];

const pelatihanPrograms = [
  {
    title: "Pelatihan UMKM",
    description: "Program pelatihan untuk pengembangan usaha mikro, kecil, dan menengah bagi anggota koperasi.",
    schedule: "Diselenggarakan setiap 3 bulan",
    benefits: "Sertifikat, materi, networking",
    icon: "🏢"
  },
  {
    title: "Literasi Keuangan",
    description: "Program edukasi tentang pengelolaan keuangan pribadi dan usaha untuk meningkatkan kesejahteraan anggota.",
    schedule: "Diselenggarakan setiap bulan",
    benefits: "Modul pelatihan, konsultasi gratis",
    icon: "📊"
  }
];

const mitraList = [
  {
    name: "Bank BRI",
    description: "Kerjasama penyaluran kredit UMKM dan fasilitas perbankan khusus anggota koperasi.",
    status: "Aktif",
    icon: "🏦"
  },
  {
    name: "Dinas Koperasi & UMKM",
    description: "Kerjasama dalam pengembangan kapasitas SDM dan pendampingan usaha.",
    status: "Aktif",
    icon: "🏛️"
  },
  {
    name: "Universitas Indonesia",
    description: "Kerjasama riset dan pengembangan model koperasi berkelanjutan.",
    status: "Aktif",
    icon: "🎓"
  },
  {
    name: "Asosiasi UMKM Indonesia",
    description: "Kerjasama perluasan pasar dan peningkatan kualitas produk anggota.",
    status: "Aktif",
    icon: "🤝"
  },
  {
    name: "PT. Telkom Indonesia",
    description: "Kerjasama digitalisasi koperasi dan pelatihan digital marketing.",
    status: "Dalam Perencanaan",
    icon: "📱"
  }
];

const Program: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Program Koperasi Sejahtera</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Berbagai program dan layanan untuk mendukung kesejahteraan dan kemajuan ekonomi anggota.
          </p>
        </div>
      </section>

      {/* Simpanan Programs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Program Simpanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {simpananPrograms.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <p className="font-medium text-green-700">{program.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pinjaman Programs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Program Pinjaman</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pinjamanPrograms.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <p className="text-gray-700"><span className="font-medium">Ketentuan:</span> {program.terms}</p>
                  <p className="font-medium text-green-700">{program.maxAmount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pelatihan Programs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Program Pelatihan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pelatihanPrograms.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <p className="text-gray-700"><span className="font-medium">Jadwal:</span> {program.schedule}</p>
                  <p className="text-gray-700"><span className="font-medium">Manfaat:</span> {program.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitra */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Program Kemitraan</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitra</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deskripsi</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mitraList.map((mitra, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-2xl mr-3">{mitra.icon}</div>
                          <div className="text-sm font-medium text-gray-900">{mitra.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">{mitra.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          mitra.status === "Aktif" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {mitra.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Tertarik Dengan Program Kami?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Jadilah anggota Koperasi Sejahtera dan manfaatkan berbagai program untuk memajukan ekonomi Anda.
          </p>
          <a 
            href="/landing/keanggotaan" 
            className="inline-block px-6 py-3 bg-green-700 text-white font-bold rounded-full text-lg hover:bg-green-800 transition duration-200"
          >
            Lihat Syarat Keanggotaan
          </a>
        </div>
      </section>
    </div>
  );
};

export default Program;
