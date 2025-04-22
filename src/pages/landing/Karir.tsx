import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Users, Briefcase } from "lucide-react";

// Define job openings data
const jobOpenings = [
  {
    id: 1,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Jakarta",
    type: "Full Time",
    postedDate: "15 Juni 2023",
    description: "Memimpin tim marketing dalam mengembangkan dan mengimplementasikan strategi pemasaran untuk meningkatkan awareness dan pertumbuhan anggota koperasi.",
    requirements: [
      "Pendidikan S1/S2 Marketing atau bidang terkait",
      "Pengalaman min. 5 tahun di bidang marketing, 2 tahun sebagai manager",
      "Kemampuan analisis data dan pembuatan strategi pemasaran",
      "Komunikasi yang baik dan leadership"
    ]
  },
  {
    id: 2,
    title: "Financial Analyst",
    department: "Finance",
    location: "Jakarta",
    type: "Full Time",
    postedDate: "10 Juni 2023",
    description: "Melakukan analisis finansial, membuat laporan, dan memberikan rekomendasi untuk pengambilan keputusan keuangan koperasi.",
    requirements: [
      "Pendidikan S1 Akuntansi atau Keuangan",
      "Pengalaman min. 3 tahun sebagai financial analyst",
      "Menguasai software analisis keuangan dan Excel lanjutan",
      "Sertifikasi CFA/CFA Level 1 menjadi nilai tambah"
    ]
  },
  {
    id: 3,
    title: "Customer Service Officer",
    department: "Member Relations",
    location: "Jakarta",
    type: "Full Time",
    postedDate: "8 Juni 2023",
    description: "Menjadi garda terdepan dalam memberikan pelayanan prima kepada anggota koperasi dan menangani berbagai pertanyaan serta keluhan.",
    requirements: [
      "Pendidikan min. D3 segala jurusan",
      "Pengalaman min. 2 tahun di bidang customer service",
      "Komunikasi yang baik dan problem solving",
      "Mampu bekerja dalam tim dan di bawah tekanan"
    ]
  },
  {
    id: 4,
    title: "IT Support",
    department: "Information Technology",
    location: "Jakarta",
    type: "Full Time",
    postedDate: "5 Juni 2023",
    description: "Memberikan dukungan teknis untuk sistem dan infrastruktur IT koperasi serta membantu menyelesaikan masalah teknis yang dialami pengguna.",
    requirements: [
      "Pendidikan min. D3 Teknik Informatika atau setara",
      "Pengalaman min. 2 tahun di bidang IT support",
      "Menguasai troubleshooting hardware dan software",
      "Mampu bekerja dalam shift"
    ]
  }
];

// Define benefits data
const benefits = [
  {
    icon: "💰",
    title: "Paket Remunerasi Kompetitif",
    description: "Gaji pokok kompetitif dengan berbagai tunjangan dan bonus tahunan berdasarkan performa."
  },
  {
    icon: "🏥",
    title: "Asuransi Kesehatan",
    description: "Asuransi kesehatan komprehensif untuk karyawan dan keluarga inti dengan fasilitas cashless di berbagai rumah sakit."
  },
  {
    icon: "📚",
    title: "Pengembangan Karir",
    description: "Program pelatihan reguler, kesempatan rotasi, dan jalur karir yang jelas untuk pengembangan profesional."
  },
  {
    icon: "⏰",
    title: "Work-Life Balance",
    description: "Jam kerja yang fleksibel, cuti tahunan, dan berbagai kegiatan employee engagement untuk keseimbangan hidup."
  },
  {
    icon: "🎓",
    title: "Beasiswa Pendidikan",
    description: "Dukungan finansial untuk karyawan yang melanjutkan pendidikan formal atau sertifikasi profesional."
  },
  {
    icon: "🏆",
    title: "Program Penghargaan",
    description: "Pengakuan atas prestasi kerja melalui berbagai program penghargaan dan insentif khusus."
  }
];

const Karir: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-astra-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Karir di Koperasi Astra</h1>
              <p className="text-lg mb-8">
                Bergabunglah dengan tim kami untuk mengembangkan potensi diri dan berkontribusi dalam meningkatkan kesejahteraan masyarakat melalui layanan koperasi yang terbaik.
              </p>
              <a 
                href="#job-openings"
                className="inline-flex items-center px-6 py-3 bg-astra-yellow text-astra-blue font-bold rounded-full hover:bg-yellow-400 transition duration-200"
              >
                Lihat Lowongan
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-white bg-opacity-20 p-8 rounded-full">
                  <Users className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Mengapa Bergabung Dengan Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-astra-blue mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-astra-blue">Budaya Kerja Kami</h2>
              <p className="text-gray-700 mb-6">
                Di Koperasi Astra, kami menerapkan budaya kerja yang berfokus pada nilai-nilai berikut:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-astra-blue">Integritas</p>
                    <p className="text-gray-600">Menjunjung tinggi kejujuran, transparansi, dan etika kerja yang baik</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-astra-blue">Kolaborasi</p>
                    <p className="text-gray-600">Bekerja sama sebagai tim untuk mencapai tujuan bersama</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-astra-blue">Inovasi</p>
                    <p className="text-gray-600">Terus mengembangkan ide dan solusi baru untuk meningkatkan layanan</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-astra-blue">Layanan Prima</p>
                    <p className="text-gray-600">Selalu mengutamakan kepuasan anggota dalam setiap aspek pekerjaan</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <img 
                    src="/images/culture-1.jpg" 
                    alt="Team Meeting" 
                    className="w-full h-32 object-cover rounded mb-3"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300x200?text=Team+Meeting";
                    }}
                  />
                  <p className="text-sm text-gray-600 text-center">Weekly Meeting</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <img 
                    src="/images/culture-2.jpg" 
                    alt="Office Space" 
                    className="w-full h-32 object-cover rounded mb-3"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300x200?text=Office+Space";
                    }}
                  />
                  <p className="text-sm text-gray-600 text-center">Modern Workspace</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <img 
                    src="/images/culture-3.jpg" 
                    alt="Training Program" 
                    className="w-full h-32 object-cover rounded mb-3"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300x200?text=Training";
                    }}
                  />
                  <p className="text-sm text-gray-600 text-center">Training Program</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <img 
                    src="/images/culture-4.jpg" 
                    alt="Team Building" 
                    className="w-full h-32 object-cover rounded mb-3"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300x200?text=Team+Building";
                    }}
                  />
                  <p className="text-sm text-gray-600 text-center">Team Building</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="job-openings" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Lowongan Kerja
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-astra-blue mb-4">Filter Lowongan</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Departemen</label>
                    <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-astra-blue text-sm">
                      <option value="">Semua Departemen</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Finance">Finance</option>
                      <option value="IT">IT</option>
                      <option value="HR">Human Resources</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Lokasi</label>
                    <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-astra-blue text-sm">
                      <option value="">Semua Lokasi</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Surabaya">Surabaya</option>
                      <option value="Bandung">Bandung</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Tipe Pekerjaan</label>
                    <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-astra-blue text-sm">
                      <option value="">Semua Tipe</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-astra-blue text-white font-medium rounded hover:bg-astra-dark-blue transition-colors">
                    Terapkan Filter
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="space-y-4">
                {selectedJob ? (
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="text-astra-blue mb-4 flex items-center hover:underline"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Kembali ke daftar lowongan
                    </button>
                    
                    <h3 className="text-2xl font-bold text-astra-blue mb-2">{selectedJob.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{selectedJob.department}</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{selectedJob.location}</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{selectedJob.type}</span>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm text-gray-500">Posted on: {selectedJob.postedDate}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Deskripsi Pekerjaan</h4>
                      <p className="text-gray-700">{selectedJob.description}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-2">Persyaratan</h4>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="inline-flex items-center px-6 py-3 bg-astra-blue text-white font-medium rounded-full hover:bg-astra-dark-blue transition-colors">
                      <Briefcase className="h-5 w-5 mr-2" />
                      Lamar Sekarang
                    </button>
                  </div>
                ) : (
                  <>
                    {jobOpenings.map((job) => (
                      <div 
                        key={job.id} 
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedJob(job)}
                      >
                        <h3 className="text-lg font-bold text-astra-blue mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{job.department}</span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{job.location}</span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{job.type}</span>
                        </div>
                        <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                        <div className="flex justify-between items-center">
                          <p className="text-xs text-gray-500">Posted: {job.postedDate}</p>
                          <button className="text-astra-blue hover:underline flex items-center text-sm font-medium">
                            Lihat Detail
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Testimoni Karyawan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 mr-4 flex items-center justify-center">
                  <span className="text-gray-600 font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-astra-blue">Ahmad Suryadi</h4>
                  <p className="text-sm text-gray-500">Financial Analyst, 3 years</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Bekerja di Koperasi Astra memberi saya kesempatan belajar dan berkembang yang luar biasa. Program pengembangan karir yang jelas dan budaya kerja yang supportive membuat saya merasa dihargai sebagai karyawan."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 mr-4 flex items-center justify-center">
                  <span className="text-gray-600 font-bold">RK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-astra-blue">Rina Kusuma</h4>
                  <p className="text-sm text-gray-500">Marketing Manager, 5 years</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Yang saya sukai dari bekerja di Koperasi Astra adalah work-life balance yang baik dan kesempatan untuk berkontribusi pada misi sosial. Kami tidak hanya fokus pada profit, tapi juga kesejahteraan anggota koperasi."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 mr-4 flex items-center justify-center">
                  <span className="text-gray-600 font-bold">DP</span>
                </div>
                <div>
                  <h4 className="font-semibold text-astra-blue">Dimas Pratama</h4>
                  <p className="text-sm text-gray-500">IT Support, 2 years</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Lingkungan kerja yang kolaboratif dan dinamis membuat setiap hari bekerja di sini menyenangkan. Management yang supportive dan rekan kerja yang saling mendukung menciptakan atmosfer positif."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-astra-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-astra-blue">
            Bersiap Untuk Karir Yang Cerah
          </h2>
          <p className="text-astra-blue max-w-2xl mx-auto mb-8">
            Bergabunglah dengan tim Koperasi Astra dan jadilah bagian dari perjalanan kami untuk meningkatkan kesejahteraan masyarakat melalui layanan koperasi yang terbaik.
          </p>
          <a
            href="#job-openings"
            className="inline-flex items-center px-6 py-3 bg-astra-blue text-white font-bold rounded-full text-lg hover:bg-astra-dark-blue transition duration-200"
          >
            Telusuri Lowongan
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Karir;
