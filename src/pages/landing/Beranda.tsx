
import React from "react";
import { Link } from "react-router-dom";

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    text: "Koperasi Sejahtera membantu usaha saya berkembang melalui pinjaman modal dengan bunga yang sangat terjangkau.",
    name: "Budi Santoso",
    title: "Pemilik Warung Makan"
  },
  {
    id: 2,
    text: "Saya sangat terbantu dengan adanya pelatihan UMKM yang diadakan Koperasi Sejahtera, omset usaha saya meningkat 50% sejak bergabung.",
    name: "Siti Rahayu",
    title: "Pengusaha Batik"
  },
  {
    id: 3,
    text: "Simpanan sukarela di Koperasi Sejahtera memberikan imbal hasil yang lebih baik dibanding bank konvensional. Sangat direkomendasikan!",
    name: "Agus Wibowo",
    title: "Pedagang Sembako"
  }
];

// Mock data for programs
const programs = [
  { 
    title: "Simpanan Pokok", 
    description: "Dana awal yang wajib dibayarkan anggota saat bergabung dengan koperasi.",
    icon: "💰" 
  },
  { 
    title: "Pinjaman Usaha", 
    description: "Bantuan modal untuk anggota yang ingin mengembangkan usahanya.",
    icon: "📈" 
  },
  { 
    title: "Pelatihan UMKM", 
    description: "Program edukasi untuk meningkatkan kapasitas usaha anggota.",
    icon: "🎓" 
  },
  { 
    title: "Investasi Anggota", 
    description: "Kesempatan investasi dengan imbal hasil menarik untuk anggota.",
    icon: "💼" 
  },
];

const Beranda: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Bersama Koperasi Sejahtera, Raih Masa Depan Cerah!
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Bergabung dengan ribuan anggota kami dan nikmati manfaat ekonomi serta sosial untuk kesejahteraan bersama.
            </p>
            <Link
              to="/landing/login"
              className="inline-block px-6 py-3 bg-white text-green-700 font-bold rounded-full text-lg hover:bg-green-100 transition duration-200"
            >
              Gabung Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Tentang Koperasi Sejahtera</h2>
            <p className="text-gray-600 text-lg">
              Koperasi Sejahtera telah berdiri sejak 2005 dan melayani lebih dari 1000 anggota aktif. Kami berkomitmen untuk membangun ekonomi kerakyatan dan mendorong kemandirian masyarakat melalui koperasi.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800">
            Program Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1.200+</div>
              <div className="text-xl">Total Anggota</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Rp 2 M</div>
              <div className="text-xl">Dana Bergulir</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-xl">Mitra Aktif</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800">
            Apa Kata Anggota Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div 
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-lg border border-gray-100"
              >
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Siap Bergabung Dengan Kami?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Jadilah bagian dari komunitas Koperasi Sejahtera dan nikmati manfaat ekonomi untuk kesejahteraan bersama.
          </p>
          <Link
            to="/landing/login"
            className="inline-block px-6 py-3 bg-green-700 text-white font-bold rounded-full text-lg hover:bg-green-800 transition duration-200"
          >
            Gabung Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
