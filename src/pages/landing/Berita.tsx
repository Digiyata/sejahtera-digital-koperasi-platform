
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

// Define news articles data
const newsArticles = [
  {
    id: 1,
    date: "13 FEBRUARI 2023",
    title: "SEMINAR Bulan K3 Nasional: Penguatan Kapasitas Sumber Daya Manusia Dalam Mendukung Penerapan Sistem Manajemen K3 Untuk Meningkatkan Produktivitas",
    excerpt: "Meningkatkan produktivitas dan keselamatan kerja di beberapa sektor usaha yang dijalankan oleh Koperasi Astra Grup (PT. SIGA PT. KBI, PT. KMA dan PT. SDK).",
    image: "/images/news-1.jpg",
    author: "Tim Komunikasi",
    category: "Event",
    link: "/landing/berita/1"
  },
  {
    id: 2,
    date: "30 DESEMBER 2023",
    title: "Koperasi Astra Jaga Kesehatan Mental Karyawan di Era Digital",
    excerpt: "Sebagai wujud nyata kepedulian terhadap kesejahteraan karyawan, Koperasi Astra mengadakan KONGKOW (Koperas Ngobrol Konco Dolan) bertema Menjaga Kesehatan Mental di Era Digital.",
    image: "/images/news-2.jpg",
    author: "Tim Kesehatan",
    category: "Kesejahteraan",
    link: "/landing/berita/2"
  },
  {
    id: 3,
    date: "10 OKTOBER 2023",
    title: "Ketua Umum Pengurus Koperasi Astra, Agus Baskoro, Raih Penghargaan Tokoh Koperasi Indonesia 2024",
    excerpt: "Ketua Umum Pengurus Koperasi Astra Agus Baskoro dianugerahi penghargaan sebagai Tokoh Koperasi Indonesia Tahun 2024 di sektor Koperasi Karyawan.",
    image: "/images/news-3.jpg",
    author: "Tim Humas",
    category: "Penghargaan",
    link: "/landing/berita/3"
  },
  {
    id: 4,
    date: "5 SEPTEMBER 2023",
    title: "Koperasi Astra Rayakan HUT ke-33 dengan Program Pemberdayaan UMKM",
    excerpt: "Dalam rangka merayakan HUT ke-33, Koperasi Astra meluncurkan program pemberdayaan UMKM untuk anggota dan masyarakat sekitar.",
    image: "/images/news-4.jpg",
    author: "Tim Keuangan",
    category: "Program",
    link: "/landing/berita/4"
  },
  {
    id: 5,
    date: "21 AGUSTUS 2023",
    title: "Rapat Anggota Tahunan 2023: Koperasi Astra Catat Pertumbuhan Aset 15%",
    excerpt: "Dalam Rapat Anggota Tahunan (RAT) 2023, Koperasi Astra melaporkan pertumbuhan aset sebesar 15% dibandingkan tahun sebelumnya.",
    image: "/images/news-5.jpg",
    author: "Tim Keuangan",
    category: "Keuangan",
    link: "/landing/berita/5"
  },
  {
    id: 6,
    date: "7 JULI 2023",
    title: "Koperasi Astra Luncurkan Aplikasi Mobile untuk Kemudahan Transaksi Anggota",
    excerpt: "Koperasi Astra meluncurkan aplikasi mobile baru yang memudahkan anggota untuk melakukan berbagai transaksi dan mengakses informasi koperasi.",
    image: "/images/news-6.jpg",
    author: "Tim IT",
    category: "Teknologi",
    link: "/landing/berita/6"
  },
];

// Define promotion data
const promotions = [
  {
    id: 1,
    title: "Promo Bunga Spesial Pinjaman Pendidikan",
    description: "Dapatkan bunga spesial 0.5% per bulan untuk Pinjaman Pendidikan selama periode Juni - Agustus 2023.",
    validUntil: "31 Agustus 2023",
    image: "/images/promo-1.jpg",
    link: "/landing/promo/1"
  },
  {
    id: 2,
    title: "Bonus Simpanan Berjangka 3 Bulan",
    description: "Tambahan bonus 1% untuk penempatan Simpanan Berjangka minimal Rp 10 juta dengan jangka waktu 3 bulan.",
    validUntil: "30 September 2023",
    image: "/images/promo-2.jpg",
    link: "/landing/promo/2"
  }
];

const Berita: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("news");

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-astra-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Berita & Promosi</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Dapatkan informasi terbaru tentang kegiatan, program, dan penawaran spesial dari Koperasi Astra.
          </p>
        </div>
      </section>

      {/* Tab Selection */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <button
              onClick={() => setActiveTab("news")}
              className={`px-6 py-3 font-medium text-lg border-b-2 ${
                activeTab === "news" 
                  ? "border-astra-blue text-astra-blue" 
                  : "border-transparent text-gray-500 hover:text-astra-blue"
              }`}
            >
              Berita
            </button>
            <button
              onClick={() => setActiveTab("promos")}
              className={`px-6 py-3 font-medium text-lg border-b-2 ${
                activeTab === "promos" 
                  ? "border-astra-blue text-astra-blue" 
                  : "border-transparent text-gray-500 hover:text-astra-blue"
              }`}
            >
              Promosi
            </button>
          </div>
        </div>
      </section>

      {/* News Content */}
      {activeTab === "news" && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <div key={article.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.src = "https://via.placeholder.com/400x200?text=News+Image";
                    }}
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center text-xs bg-astra-yellow px-2 py-1 rounded text-astra-blue font-medium">
                        <Tag className="w-3 h-3 mr-1" />
                        <span>{article.category}</span>
                      </div>
                    </div>
                    <Link to={article.link}>
                      <h3 className="text-lg font-bold mb-2 text-astra-blue hover:text-astra-dark-blue transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <Link 
                        to={article.link}
                        className="inline-flex items-center text-astra-blue font-medium text-sm hover:underline"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Promotions Content */}
      {activeTab === "promos" && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {promotions.map((promo) => (
              <div key={promo.id} className="mb-8 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={promo.image} 
                      alt={promo.title} 
                      className="w-full h-full object-cover md:h-64"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.src = "https://via.placeholder.com/400x300?text=Promo+Image";
                      }}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-2">
                      <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">
                        Berlaku sampai {promo.validUntil}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-astra-blue">{promo.title}</h3>
                    <p className="text-gray-700 mb-4">{promo.description}</p>
                    <Link 
                      to={promo.link}
                      className="inline-flex items-center px-4 py-2 bg-astra-yellow text-astra-blue font-medium rounded-full hover:bg-yellow-400 transition-colors"
                    >
                      Lihat Detail Promo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Subscribe Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-astra-blue">
            Dapatkan Berita Terbaru
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang program, promosi, dan kegiatan Koperasi Astra.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Alamat Email Anda"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-astra-blue"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-astra-blue text-white font-medium rounded-full hover:bg-astra-dark-blue transition-colors"
              >
                Langganan
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Berita;
