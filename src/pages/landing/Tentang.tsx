
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock data for company milestones
const milestones = [
  { 
    year: "1990", 
    title: "Pendirian Koperasi Astra", 
    description: "Didirikan pada tanggal 25 Juni 1990 dan disahkan dengan Akta Badan Hukum No. 9256 tanggal 14 Juli 1990" 
  },
  { 
    year: "1995", 
    title: "Pengembangan Layanan Simpan Pinjam", 
    description: "Mulai menyediakan layanan simpan pinjam untuk anggota" 
  },
  { 
    year: "2000", 
    title: "Perluasan Cakupan Anggota", 
    description: "Mencakup semua karyawan tetap di seluruh anak perusahaan Grup Astra" 
  },
  { 
    year: "2010", 
    title: "Digitalisasi Layanan", 
    description: "Implementasi sistem digital untuk manajemen keanggotaan dan transaksi" 
  },
  { 
    year: "2015", 
    title: "Peluncuran Program Kesejahteraan", 
    description: "Inisiatif program kesejahteraan baru untuk anggota" 
  },
  { 
    year: "2020", 
    title: "Aplikasi Mobile Koperasi Astra", 
    description: "Peluncuran aplikasi mobile untuk kemudahan akses layanan" 
  }
];

// Mock data for team members
const managementTeam = [
  { 
    name: "Agus Baskoro", 
    position: "Ketua Umum", 
    photo: "/images/team-1.jpg"
  },
  { 
    name: "Diana Pertiwi", 
    position: "Sekretaris", 
    photo: "/images/team-2.jpg" 
  },
  { 
    name: "Budi Santoso", 
    position: "Bendahara", 
    photo: "/images/team-3.jpg" 
  },
  { 
    name: "Siti Rahayu", 
    position: "Manajer Operasional", 
    photo: "/images/team-4.jpg" 
  }
];

// Mock data for company values
const companyValues = [
  {
    icon: "🤝",
    title: "Kerjasama",
    description: "Kami meyakini bahwa kerjasama yang baik antar anggota akan membawa hasil yang maksimal"
  },
  {
    icon: "💼",
    title: "Profesionalisme",
    description: "Kami berkomitmen untuk menjalankan koperasi dengan standar profesional tertinggi"
  },
  {
    icon: "🔄",
    title: "Keberlanjutan",
    description: "Kami fokus pada pertumbuhan jangka panjang dan keberlanjutan untuk semua anggota"
  },
  {
    icon: "💡",
    title: "Inovasi",
    description: "Kami terus berinovasi dalam layanan untuk memenuhi kebutuhan anggota yang berkembang"
  }
];

const Tentang: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-astra-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tentang Koperasi Astra</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Didirikan untuk meningkatkan kesejahteraan karyawan tetap Grup Astra melalui berbagai program dan layanan koperasi.
          </p>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-astra-yellow p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-astra-blue">Visi</h2>
              <p className="text-astra-blue text-lg">
                "Menjadi koperasi terbaik yang memberikan nilai tambah berkelanjutan kepada anggota dan perusahaan."
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-astra-blue">Misi</h2>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-astra-blue font-bold">•</span>
                  <span>Memberikan pelayanan terbaik kepada anggota</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-astra-blue font-bold">•</span>
                  <span>Mengembangkan produk dan layanan yang inovatif</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-astra-blue font-bold">•</span>
                  <span>Menerapkan tata kelola koperasi yang baik</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-astra-blue font-bold">•</span>
                  <span>Menjaga pertumbuhan usaha yang berkelanjutan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Sejarah Koperasi Astra
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-astra-blue"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex flex-col md:flex-row">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                    <h3 className="text-xl font-bold text-astra-blue mb-2">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                  
                  {/* Timeline marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:top-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 bg-astra-yellow rounded-full flex items-center justify-center border-4 border-white">
                      <span className="font-bold text-astra-blue text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:order-2' : 'md:pr-12 md:text-right'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Nilai-Nilai Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-astra-blue mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Tim Manajemen
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.src = "https://via.placeholder.com/300x200?text=Team+Member";
                    }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-astra-blue">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-astra-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-astra-blue">
            Bergabung Dengan Koperasi Astra
          </h2>
          <p className="text-astra-blue max-w-2xl mx-auto mb-8">
            Nikmati berbagai manfaat dan layanan yang kami sediakan untuk membantu meningkatkan kesejahteraan Anda.
          </p>
          <Link
            to="/landing/register"
            className="inline-flex items-center px-6 py-3 bg-astra-blue text-white font-bold rounded-full text-lg hover:bg-astra-dark-blue transition duration-200"
          >
            Daftar Sekarang
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
