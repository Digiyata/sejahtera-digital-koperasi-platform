
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Calculator, HelpCircle, Info } from "lucide-react";

const loanProducts = [
  {
    title: "Pinjaman Multiguna",
    description: "Pinjaman untuk berbagai keperluan pribadi seperti renovasi rumah, pendidikan, atau kesehatan",
    maxAmount: "Rp 100.000.000",
    term: "6 - 60 bulan",
    interestRate: "0.8% per bulan",
    requirements: [
      "Anggota Koperasi Astra min. 6 bulan",
      "Karyawan tetap Grup Astra",
      "Slip gaji 3 bulan terakhir",
      "Fotokopi KTP"
    ]
  },
  {
    title: "Pinjaman Pendidikan",
    description: "Pinjaman khusus untuk biaya pendidikan anak atau anggota keluarga dengan bunga lebih rendah",
    maxAmount: "Rp 50.000.000",
    term: "6 - 36 bulan",
    interestRate: "0.6% per bulan",
    requirements: [
      "Anggota Koperasi Astra min. 3 bulan",
      "Bukti penerimaan/pendaftaran sekolah",
      "Slip gaji 3 bulan terakhir",
      "Fotokopi KTP"
    ]
  },
  {
    title: "Pinjaman Darurat",
    description: "Pinjaman dengan proses pencairan cepat untuk kebutuhan mendesak",
    maxAmount: "Rp 20.000.000",
    term: "1 - 24 bulan",
    interestRate: "1% per bulan",
    requirements: [
      "Anggota Koperasi Astra aktif",
      "Surat keterangan keperluan",
      "Slip gaji bulan terakhir",
      "Fotokopi KTP"
    ]
  },
  {
    title: "Pinjaman Usaha",
    description: "Pinjaman untuk pengembangan usaha sampingan dengan skema pengembalian fleksibel",
    maxAmount: "Rp 75.000.000",
    term: "12 - 48 bulan",
    interestRate: "0.9% per bulan",
    requirements: [
      "Anggota Koperasi Astra min. 1 tahun",
      "Proposal usaha atau bukti usaha berjalan",
      "Slip gaji 3 bulan terakhir",
      "Fotokopi KTP dan NPWP"
    ]
  }
];

// Calculator initial values
const initialValues = {
  amount: 10000000,
  term: 24,
  interestRate: 0.8
};

const Pinjaman: React.FC = () => {
  const [calculatorValues, setCalculatorValues] = React.useState(initialValues);
  
  // Calculate monthly installment
  const calculateInstallment = () => {
    const principal = calculatorValues.amount;
    const monthlyInterestRate = calculatorValues.interestRate / 100;
    const termMonths = calculatorValues.term;
    
    // Calculate monthly payment using the formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const monthlyPayment = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termMonths) / 
                          (Math.pow(1 + monthlyInterestRate, termMonths) - 1);
    
    const totalPayment = monthlyPayment * termMonths;
    const totalInterest = totalPayment - principal;
    
    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest)
    };
  };

  const result = calculateInstallment();

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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Pinjaman Koperasi Astra</h1>
              <p className="text-lg mb-8">
                Solusi finansial dengan bunga rendah dan proses cepat untuk memenuhi berbagai kebutuhan anggota Koperasi Astra.
              </p>
              <Link
                to="/landing/register"
                className="inline-flex items-center px-6 py-3 bg-astra-yellow text-astra-blue font-bold rounded-full hover:bg-yellow-400 transition duration-200"
              >
                Ajukan Pinjaman
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-white opacity-20 blur-lg"></div>
                <div className="relative z-10 bg-white bg-opacity-30 p-6 rounded-full">
                  <Calculator className="w-28 h-28 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Program Pinjaman
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanProducts.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-astra-blue transition-colors">
                <h3 className="text-xl font-bold text-astra-blue mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Maks. Pinjaman</p>
                    <p className="font-semibold text-astra-blue">{product.maxAmount}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Jangka Waktu</p>
                    <p className="font-semibold text-astra-blue">{product.term}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Bunga</p>
                    <p className="font-semibold text-astra-blue">{product.interestRate}</p>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Persyaratan:</h4>
                <ul className="space-y-1 mb-6">
                  {product.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/landing/register"
                  className="inline-flex items-center text-astra-blue font-medium text-sm hover:underline"
                >
                  Ajukan Sekarang
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-astra-blue text-center">
            Kalkulator Pinjaman
          </h2>
          <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
            Simulasikan pinjaman Anda untuk melihat estimasi angsuran bulanan dan total pembayaran.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-astra-blue">Isi Data Simulasi</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Jumlah Pinjaman</label>
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
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
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
                        <option value={12}>12 Bulan</option>
                        <option value={24}>24 Bulan</option>
                        <option value={36}>36 Bulan</option>
                        <option value={48}>48 Bulan</option>
                        <option value={60}>60 Bulan</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Suku Bunga (% per bulan)</label>
                      <select
                        value={calculatorValues.interestRate}
                        onChange={(e) => setCalculatorValues({
                          ...calculatorValues,
                          interestRate: parseFloat(e.target.value)
                        })}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-astra-blue"
                      >
                        <option value={0.6}>0.6% - Pinjaman Pendidikan</option>
                        <option value={0.8}>0.8% - Pinjaman Multiguna</option>
                        <option value={0.9}>0.9% - Pinjaman Usaha</option>
                        <option value={1.0}>1.0% - Pinjaman Darurat</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-astra-blue">Hasil Simulasi</h3>
                  
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-2">
                      <p className="text-gray-700">Angsuran per Bulan</p>
                      <p className="text-2xl font-bold text-astra-blue">{formatToIDR(result.monthlyPayment)}</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-2">
                      <p className="text-gray-700">Total Bunga</p>
                      <p className="text-xl font-semibold text-astra-blue">{formatToIDR(result.totalInterest)}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700">Total Pembayaran</p>
                      <p className="text-xl font-semibold text-astra-blue">{formatToIDR(result.totalPayment)}</p>
                    </div>

                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-yellow-500 mr-2 shrink-0 mt-0.5" />
                        <p className="text-sm text-yellow-700">
                          Semakin lama jangka waktu, semakin kecil angsuran bulanan tetapi total bunga akan lebih besar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-gray-400 mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-500">
                    Simulasi ini bersifat ilustratif. Jumlah sebenarnya dapat berbeda berdasarkan hasil analisa kredit dan kebijakan pinjaman yang berlaku.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-astra-blue text-center">
            Proses Pengajuan
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process line */}
              <div className="hidden md:block absolute left-[15%] top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {/* Process steps */}
              <div className="space-y-12">
                <div className="relative flex">
                  <div className="hidden md:flex items-center justify-center w-[30%]">
                    <div className="w-12 h-12 bg-astra-yellow rounded-full flex items-center justify-center z-10 border-4 border-white">
                      <span className="font-bold text-astra-blue">1</span>
                    </div>
                  </div>
                  <div className="w-full md:w-[70%]">
                    <div className="flex md:hidden items-center mb-4">
                      <div className="w-10 h-10 bg-astra-yellow rounded-full flex items-center justify-center mr-4">
                        <span className="font-bold text-astra-blue">1</span>
                      </div>
                      <h3 className="text-lg font-bold text-astra-blue">Pengajuan</h3>
                    </div>
                    <h3 className="hidden md:block text-lg font-bold text-astra-blue mb-2">Pengajuan</h3>
                    <p className="text-gray-700">
                      Isi formulir pengajuan pinjaman melalui aplikasi atau website Koperasi Astra. Sertakan informasi tentang jumlah, tujuan, dan jangka waktu pinjaman yang diinginkan.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="hidden md:flex items-center justify-center w-[30%]">
                    <div className="w-12 h-12 bg-astra-yellow rounded-full flex items-center justify-center z-10 border-4 border-white">
                      <span className="font-bold text-astra-blue">2</span>
                    </div>
                  </div>
                  <div className="w-full md:w-[70%]">
                    <div className="flex md:hidden items-center mb-4">
                      <div className="w-10 h-10 bg-astra-yellow rounded-full flex items-center justify-center mr-4">
                        <span className="font-bold text-astra-blue">2</span>
                      </div>
                      <h3 className="text-lg font-bold text-astra-blue">Verifikasi</h3>
                    </div>
                    <h3 className="hidden md:block text-lg font-bold text-astra-blue mb-2">Verifikasi</h3>
                    <p className="text-gray-700">
                      Tim Koperasi Astra akan memverifikasi data pengajuan dan kelengkapan dokumen. Proses ini biasanya membutuhkan waktu 2-3 hari kerja.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="hidden md:flex items-center justify-center w-[30%]">
                    <div className="w-12 h-12 bg-astra-yellow rounded-full flex items-center justify-center z-10 border-4 border-white">
                      <span className="font-bold text-astra-blue">3</span>
                    </div>
                  </div>
                  <div className="w-full md:w-[70%]">
                    <div className="flex md:hidden items-center mb-4">
                      <div className="w-10 h-10 bg-astra-yellow rounded-full flex items-center justify-center mr-4">
                        <span className="font-bold text-astra-blue">3</span>
                      </div>
                      <h3 className="text-lg font-bold text-astra-blue">Persetujuan</h3>
                    </div>
                    <h3 className="hidden md:block text-lg font-bold text-astra-blue mb-2">Persetujuan</h3>
                    <p className="text-gray-700">
                      Setelah verifikasi berhasil, pengajuan pinjaman akan disetujui dan Anda akan menerima notifikasi persetujuan beserta rincian pinjaman.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="hidden md:flex items-center justify-center w-[30%]">
                    <div className="w-12 h-12 bg-astra-yellow rounded-full flex items-center justify-center z-10 border-4 border-white">
                      <span className="font-bold text-astra-blue">4</span>
                    </div>
                  </div>
                  <div className="w-full md:w-[70%]">
                    <div className="flex md:hidden items-center mb-4">
                      <div className="w-10 h-10 bg-astra-yellow rounded-full flex items-center justify-center mr-4">
                        <span className="font-bold text-astra-blue">4</span>
                      </div>
                      <h3 className="text-lg font-bold text-astra-blue">Pencairan</h3>
                    </div>
                    <h3 className="hidden md:block text-lg font-bold text-astra-blue mb-2">Pencairan</h3>
                    <p className="text-gray-700">
                      Dana pinjaman akan ditransfer ke rekening bank Anda dalam waktu 1-2 hari kerja setelah persetujuan. Anda akan menerima notifikasi ketika dana telah dicairkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-astra-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-astra-blue">
            Perlukan Dana Sekarang?
          </h2>
          <p className="text-astra-blue max-w-2xl mx-auto mb-8">
            Ajukan pinjaman dengan bunga kompetitif dan proses yang mudah bersama Koperasi Astra.
          </p>
          <Link
            to="/landing/register"
            className="inline-flex items-center px-6 py-3 bg-astra-blue text-white font-bold rounded-full text-lg hover:bg-astra-dark-blue transition duration-200"
          >
            Mulai Pengajuan
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pinjaman;
