
import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Hubungi: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [formSuccess, setFormSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSuccess(true);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after some time
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-astra-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan. Tim kami siap membantu Anda.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-astra-blue rounded-full p-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-astra-blue mb-2">Telepon</h3>
              <p className="text-gray-700">021-21242625</p>
              <p className="text-gray-700">021-21242626</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-astra-blue rounded-full p-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-astra-blue mb-2">Email</h3>
              <p className="text-gray-700">customer.care@koperasi-astra.com</p>
              <p className="text-gray-700">info@koperasi-astra.com</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-astra-blue rounded-full p-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-astra-blue mb-2">Alamat</h3>
              <p className="text-gray-700">Gedung Astra Tower Lt. 3</p>
              <p className="text-gray-700">Jl. Jend. Sudirman No. 5-6</p>
              <p className="text-gray-700">Jakarta Pusat 10220</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-astra-blue text-center">
              Kirim Pesan
            </h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              {formSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  Terima kasih! Pesan Anda telah terkirim. Tim kami akan menghubungi Anda segera.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nama Lengkap *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-astra-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-astra-blue"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-astra-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subjek *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-astra-blue"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Pesan *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-astra-blue"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-astra-blue text-white font-bold rounded-full hover:bg-astra-dark-blue transition duration-200"
                  >
                    Kirim Pesan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Map */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-astra-blue text-center">
            Lokasi Kantor
          </h2>
          
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* Replace this div with an actual map component */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
              <p>Google Maps akan ditampilkan di sini</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-astra-blue font-medium hover:underline"
            >
              Lihat di Google Maps
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Pertanyaan Umum
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-astra-blue">Berapa lama waktu respons untuk pertanyaan atau keluhan?</h3>
              <p className="text-gray-700">
                Kami berkomitmen untuk merespons semua pertanyaan dan keluhan dalam waktu 1-2 hari kerja. Untuk pertanyaan yang lebih kompleks, kami mungkin membutuhkan waktu lebih lama untuk investigasi.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-astra-blue">Bagaimana cara mengajukan komplain atau saran?</h3>
              <p className="text-gray-700">
                Anda dapat mengajukan komplain atau saran melalui formulir kontak di halaman ini, menghubungi call center kami, atau mengirimkan email langsung ke customer.care@koperasi-astra.com.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-astra-blue">Apakah ada jam operasional untuk layanan pelanggan?</h3>
              <p className="text-gray-700">
                Layanan pelanggan kami tersedia pada hari kerja (Senin-Jumat) dari pukul 08.00 hingga 17.00 WIB. Di luar jam tersebut, Anda dapat meninggalkan pesan dan tim kami akan menghubungi Anda pada hari kerja berikutnya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hubungi;
