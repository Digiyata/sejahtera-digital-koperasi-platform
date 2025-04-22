
import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "@/components/landing/HeroSlider";
import { ArrowRight } from "lucide-react";

// Define the program cards data
const programCards = [
  {
    title: "SIMPANAN",
    description: "Koperasi Astra mengelola dana simpanan anggota dalam bentuk Simpanan Berjangka. Dapat dikelola oleh Karyawan Tetap Astra yang sudah terdaftar menjadi anggota.",
    image: "/images/savings.jpg",
    buttonText: "Lihat Lebih Lanjut",
    buttonLink: "/landing/simpanan",
    type: "simpanan"
  },
  {
    title: "PINJAMAN",
    description: "Koperasi Astra menyediakan produk dan program pembiayaan untuk membantu memenuhi kebutuhan anggota.",
    image: "/images/loan.jpg", 
    buttonText: "Lihat Lebih Lanjut",
    buttonLink: "/landing/pinjaman",
    type: "pinjaman"
  }
];

// Define the news data array
const newsArticles = [
  {
    id: 1,
    date: "13 FEBRUARI 2023",
    title: "SEMINAR Bulan K3 Nasional: Penguatan Kapasitas Sumber Daya Manusia Dalam Mendukung Penerapan Sistem Manajemen K3 Untuk Meningkatkan Produktivitas",
    image: "/images/news-1.jpg",
    link: "/landing/berita/1"
  },
  {
    id: 2,
    date: "30 DESEMBER 2023",
    title: "Koperasi Astra Jaga Kesehatan Mental Karyawan di Era Digital",
    image: "/images/news-2.jpg",
    link: "/landing/berita/2"
  },
  {
    id: 3,
    date: "10 OKTOBER 2023",
    title: "Ketua Umum Pengurus Koperasi Astra, Agus Baskoro, Raih Penghargaan Tokoh Koperasi Indonesia 2024",
    image: "/images/news-3.jpg",
    link: "/landing/berita/3"
  }
];

const Beranda: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <section className="bg-astra-yellow">
        <HeroSlider />
      </section>

      {/* Program Cards Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {programCards.map((card, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white mb-4 text-sm md:text-base">{card.description}</p>
                <Link
                  to={card.buttonLink}
                  className="inline-flex items-center bg-white text-astra-blue px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-all"
                >
                  {card.buttonText}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* "Kami memfasilitasi" Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-astra-blue mb-6">
                Kami memfasilitasi hari ini untuk langkah cepat esok hari
              </h2>
              <p className="text-gray-700 mb-6">
                Bersiaplah untuk hari esok dengan langkah bijak hari ini. Temukan solusi simpanan dan pinjaman yang sesuai dengan kebutuhan Anda di Koperasi Astra.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="/images/facility.jpg" 
                alt="Fasilitas Koperasi Astra" 
                className="rounded-lg shadow-md max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/images/office.jpg" 
                alt="Koperasi Astra Office" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-astra-blue uppercase mb-2">TENTANG KAMI</h3>
              <h2 className="text-3xl font-bold text-astra-blue mb-4">Mewujudkan Kesejahteraan Karyawan Tetap Astra</h2>
              <p className="text-gray-700 mb-6">
                Didirikan pada tanggal 25 Juni 1990 dan disahkan dengan Akta Badan Hukum No. 9256 tanggal 14 Juli 1990, Koperasi Astra merupakan salah satu upaya PT Astra International, Tbk untuk memajukan kesejahteraan karyawan tetapnya di seluruh anak perusahaan Grup Astra melalui manfaat ekonomi yang dikelola Koperasi.
              </p>
              <Link 
                to="/landing/tentang"
                className="inline-flex items-center text-astra-blue font-medium hover:underline"
              >
                Lihat Selengkapnya
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-astra-blue mb-10">Berita & Promosi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <div key={article.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-lg font-semibold mb-4 line-clamp-2">{article.title}</h3>
                  <Link 
                    to={article.link}
                    className="inline-flex items-center text-astra-blue font-medium hover:underline text-sm"
                  >
                    Lihat Selengkapnya
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
