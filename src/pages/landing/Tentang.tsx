
import React from "react";

// Mock data for team members
const teamMembers = [
  { 
    name: "Joko Widodo", 
    position: "Ketua", 
    photo: "👨‍💼", 
    bio: "Memiliki pengalaman 15 tahun dalam manajemen koperasi dan pengembangan komunitas." 
  },
  { 
    name: "Sri Mulyani", 
    position: "Sekretaris", 
    photo: "👩‍💼", 
    bio: "Latar belakang di bidang administrasi dan manajemen dokumen dengan 8 tahun pengalaman." 
  },
  { 
    name: "Bambang Sutrisno", 
    position: "Bendahara", 
    photo: "👨‍💼", 
    bio: "Ahli keuangan dengan pengalaman 10 tahun di berbagai lembaga keuangan mikro." 
  },
  { 
    name: "Dewi Lestari", 
    position: "Manajer Operasional", 
    photo: "👩‍💼", 
    bio: "Spesialis dalam pengelolaan operasional koperasi dan pengembangan program." 
  },
  { 
    name: "Agus Rahardjo", 
    position: "Manajer Pemasaran", 
    photo: "👨‍💼", 
    bio: "Memiliki keahlian dalam pengembangan jaringan dan pemasaran produk koperasi." 
  },
  { 
    name: "Ratna Sari", 
    position: "Koordinator Pelatihan", 
    photo: "👩‍💼", 
    bio: "Berpengalaman dalam merancang dan mengimplementasikan program pelatihan UMKM." 
  }
];

const Tentang: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tentang Koperasi Sejahtera</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Membangun kemandirian masyarakat melalui semangat gotong royong dan ekonomi kerakyatan sejak 2005.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Sejarah Singkat
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-4">
              Koperasi Sejahtera didirikan pada tahun 2005 oleh sekelompok warga yang peduli dengan kondisi ekonomi masyarakat sekitar. Berawal dari arisan warga yang dikelola secara terorganisir, koperasi ini kemudian berkembang menjadi lembaga keuangan mikro yang terpercaya.
            </p>
            <p className="text-gray-600 mb-4">
              Pada tahun 2010, Koperasi Sejahtera resmi mendapatkan badan hukum dan mulai memperluas layanan tidak hanya pada simpan pinjam, tetapi juga pelatihan keterampilan dan pengembangan usaha kecil menengah.
            </p>
            <p className="text-gray-600">
              Hingga saat ini, Koperasi Sejahtera telah memiliki lebih dari 1.200 anggota aktif dan telah membantu ratusan usaha kecil menengah untuk berkembang melalui program pinjaman modal dan pendampingan usaha.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">Visi</h2>
              <p className="text-lg text-gray-600">
                "Menjadi koperasi terdepan yang mampu meningkatkan kesejahteraan dan kemandirian ekonomi anggota serta masyarakat luas berdasarkan asas kekeluargaan."
              </p>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">Misi</h2>
              <ul className="text-gray-600 space-y-4 text-left">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Menyediakan layanan simpan pinjam yang adil dan terjangkau untuk anggota</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Mengembangkan program pendidikan dan pelatihan untuk meningkatkan kapasitas anggota</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Membangun kerjasama strategis dengan berbagai pihak untuk pengembangan usaha anggota</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Menerapkan pengelolaan koperasi yang profesional, transparan, dan akuntabel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Nilai-nilai Koperasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Kebersamaan</h3>
              <p className="text-gray-600">
                Kami percaya bahwa kesuksesan bersama dapat dicapai melalui gotong royong dan saling mendukung antar anggota.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Transparansi</h3>
              <p className="text-gray-600">
                Pengelolaan koperasi yang terbuka dan dapat dipertanggungjawabkan kepada seluruh anggota.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Keberlanjutan</h3>
              <p className="text-gray-600">
                Mengembangkan program dan layanan yang memperhatikan keberlanjutan ekonomi dan sosial jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Struktur Organisasi
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-green-100 text-green-800 rounded-lg px-4 py-2 mb-2">
                <h3 className="font-bold">Ketua</h3>
              </div>
              <div className="w-0.5 h-8 bg-gray-300"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 text-green-800 rounded-lg px-4 py-2 mb-2">
                  <h3 className="font-bold">Sekretaris</h3>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 text-green-800 rounded-lg px-4 py-2 mb-2">
                  <h3 className="font-bold">Bendahara</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mb-8">
              <div className="w-1/2 h-0.5 bg-gray-300 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-center">
                    <h3 className="font-medium">Manajer Operasional</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-center">
                    <h3 className="font-medium">Manajer Pemasaran</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-center">
                    <h3 className="font-medium">Koordinator Pelatihan</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Tim Koperasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-50 p-6 flex justify-center">
                  <div className="text-5xl">{member.photo}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-green-700 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
