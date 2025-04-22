
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PiggyBank, CheckCircle, HelpCircle } from "lucide-react";

// Define the simpanan products
const simpananProducts = [
  {
    title: "Simpanan Pokok",
    description: "Dana awal yang harus disetorkan anggota saat bergabung dengan Koperasi Astra. Simpanan ini menjadi bukti keanggotaan dan hanya dapat diambil saat keanggotaan berakhir.",
    amount: "Rp 1.000.000",
    icon: "💰",
    features: [
      "Dibayarkan sekali saat pendaftaran",
      "Tidak dapat diambil selama menjadi anggota",
      "Bukti kepemilikan koperasi",
      "Tanpa biaya administrasi"
    ]
  },
  {
    title: "Simpanan Wajib",
    description: "Simpanan rutin yang wajib dibayarkan oleh anggota setiap bulan. Besarnya ditentukan dalam Anggaran Dasar dan dapat diambil saat keanggotaan berakhir.",
    amount: "Rp 300.000/bulan",
    icon: "📅",
    features: [
      "Pembayaran rutin bulanan",
      "Mempengaruhi jumlah SHU yang diterima",
      "Dapat diambil saat keanggotaan berakhir",
      "Dipotong langsung dari gaji"
    ]
  },
  {
    title: "Simpanan Berjangka",
    description: "Program simpanan dengan jangka waktu tertentu dengan bunga kompetitif. Cocok untuk anggota yang ingin merencanakan keuangan jangka menengah.",
    amount: "Min. Rp 5.000.000",
    icon: "🔒",
    features: [
      "Jangka waktu 3, 6, atau 12 bulan",
      "Bunga kompetitif hingga 6% per tahun",
      "Dapat dijadikan jaminan pinjaman",
      "Pencairan mudah saat jatuh tempo"
    ]
  },
  {
    title: "Simpanan Sukarela",
    description: "Simpanan yang dapat dilakukan secara fleksibel oleh anggota. Besarnya tidak ditentukan dan dapat diambil kapan saja sesuai kebutuhan anggota.",
    amount: "Bebas",
    icon: "✨",
    features: [
      "Setoran fleksibel",
      "Dapat diambil sewaktu-waktu",
      "Mendapatkan bagi hasil tahunan",
      "Bebas biaya administrasi"
    ]
  }
];

// Calculator initial values
const initialValues = {
  amount: 5000000,
  term: 12
};

const Simpanan: React.FC = () => {
  const [calculatorValues, setCalculatorValues] = React.useState(initialValues);
  
  // Calculate estimated interest
  const calculateInterest = () => {
    const baseRate = 0.055; // 5.5% per year
    const termFactor = calculatorValues.term <= 3 ? 0.8 : calculatorValues.term <= 6 ? 0.9 : 1;
    const interestRate = baseRate * termFactor;
    
    const monthlyInterest = calculatorValues.amount * interestRate / 12;
    const totalInterest = monthlyInterest * calculatorValues.term;
    const totalAmount = calculatorValues.amount + totalInterest;
    
    return {
      interestRate: (interestRate * 100).toFixed(1),
      monthlyInterest: Math.round(monthlyInterest),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount)
    };
  };

  const result = calculateInterest();

  // Format number to IDR
  const formatToIDR = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
      .format(number)
      .replace(/\,00$/, '');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-astra-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Simpanan Koperasi Astra</h1>
              <p className="text-lg mb-8">
                Simpanan yang aman untuk dana Anda dengan berbagai pilihan program yang menguntungkan. Mulai rencanakan masa depan Anda bersama Koperasi Astra.
              </p>
              <Link
                to="/landing/register"
                className="inline-flex items-center px-6 py-3 bg-astra-yellow text-astra-blue font-bold rounded-full hover:bg-yellow-400 transition duration-200"
              >
                Mulai Simpan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PiggyBank className="w-40 h-40 text-white opacity-20" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <PiggyBank className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simpanan Products */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Program Simpanan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {simpananProducts.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-astra-blue transition-colors">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">{product.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-astra-blue">{product.title}</h3>
                    <p className="text-gray-500">{product.amount}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <h4 className="font-semibold text-gray-800 mb-2">Fitur:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-astra-blue text-center">
            Kalkulator Simpanan Berjangka
          </h2>
          <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
            Simulasikan simpanan berjangka Anda untuk melihat potensi bunga yang akan diperoleh selama periode simpanan.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-astra-blue">Isi Data Simulasi</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Jumlah Simpanan</label>
                      <input
                        type="range"
                        min="1000000"
                        max="100000000"
                        step="1000000"
                        value={calculatorValues.amount}
                        onChange={(e) => setCalculatorValues({
                          ...calculatorValues,
                          amount: parseInt(e.target.value)
                        })}
                        className="w-full accent-astra-blue"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>1 Juta</span>
                        <span>{formatToIDR(calculatorValues.amount)}</span>
                        <span>100 Juta</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Jangka Waktu (Bulan)</label>
                      <select
                        value={calculatorValues.term}
                        onChange={(e) => setCalculatorValues({
                          ...calculatorValues,
                          term: parseInt(e.target.value)
                        })}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-astra-blue"
                      >
                        <option value={3}>3 Bulan</option>
                        <option value={6}>6 Bulan</option>
                        <option value={12}>12 Bulan</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-astra-blue">Hasil Simulasi</h3>
                  
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-2">
                      <p className="text-gray-700">Suku Bunga</p>
                      <p className="text-xl font-semibold text-astra-blue">{result.interestRate}% per tahun</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-2">
                      <p className="text-gray-700">Bunga per Bulan</p>
                      <p className="text-xl font-semibold text-astra-blue">{formatToIDR(result.monthlyInterest)}</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-2">
                      <p className="text-gray-700">Total Bunga</p>
                      <p className="text-xl font-semibold text-astra-blue">{formatToIDR(result.totalInterest)}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700">Total Simpanan + Bunga</p>
                      <p className="text-2xl font-bold text-astra-blue">{formatToIDR(result.totalAmount)}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-gray-400 mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-500">
                    Simulasi ini bersifat ilustratif. Jumlah sebenarnya dapat berbeda berdasarkan kebijakan suku bunga dan periode simpanan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Pertanyaan Umum
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-astra-blue">Bagaimana cara mulai simpanan di Koperasi Astra?</h3>
              <p className="text-gray-700">
                Untuk memulai simpanan, Anda harus menjadi anggota Koperasi Astra terlebih dahulu. Setelah terdaftar, Anda dapat langsung memulai dengan simpanan pokok dan wajib, serta memilih program simpanan lainnya yang sesuai kebutuhan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-astra-blue">Berapa minimal setoran untuk simpanan sukarela?</h3>
              <p className="text-gray-700">
                Tidak ada batas minimal untuk simpanan sukarela, Anda dapat menyetor berapa pun sesuai kemampuan. Namun, untuk mengoptimalkan pengembalian, kami menyarankan minimal Rp 100.000 per setoran.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-astra-blue">Bagaimana pembagian SHU untuk anggota?</h3>
              <p className="text-gray-700">
                Sisa Hasil Usaha (SHU) dibagikan secara proporsional berdasarkan partisipasi anggota dalam kegiatan koperasi dan jumlah simpanan wajib serta sukarela. Perhitungan dan pembagian dilakukan setiap akhir tahun buku setelah Rapat Anggota Tahunan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-astra-blue">Apakah simpanan saya di Koperasi Astra aman?</h3>
              <p className="text-gray-700">
                Ya, simpanan Anda aman karena Koperasi Astra diawasi langsung oleh Dinas Koperasi dan dikelola dengan prinsip tata kelola yang baik. Selain itu, kami memiliki cadangan risiko dan asuransi untuk menjamin keamanan dana anggota.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-astra-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-astra-blue">
            Siap Memulai Simpanan?
          </h2>
          <p className="text-astra-blue max-w-2xl mx-auto mb-8">
            Jadilah anggota Koperasi Astra dan nikmati kemudahan serta keuntungan dari program simpanan kami.
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

export default Simpanan;
