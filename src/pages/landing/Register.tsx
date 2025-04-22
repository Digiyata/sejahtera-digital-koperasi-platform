
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    agreeTOS: false,
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Nama lengkap harus diisi";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password harus diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.address.trim()) {
      newErrors.address = "Alamat harus diisi";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon harus diisi";
    }
    
    if (!file) {
      newErrors.idCard = "KTP harus diunggah";
    }
    
    if (!formData.agreeTOS) {
      newErrors.agreeTOS = "Anda harus menyetujui syarat dan ketentuan";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 2 && validateStep2()) {
      // Here you would normally send the data to your backend
      alert("Pendaftaran berhasil dikirim! Silakan cek email Anda untuk instruksi selanjutnya.");
      
      // Redirect to login page (in a real app)
      // navigate("/landing/login");
      
      // For this demo, we'll just reset the form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phone: "",
        agreeTOS: false,
      });
      setFile(null);
      setStep(1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Daftar Keanggotaan</h2>
          <p className="mt-2 text-sm text-gray-600">
            Lengkapi informasi di bawah untuk mendaftar sebagai anggota baru
          </p>
        </div>
        
        {/* Progress steps */}
        <div className="flex justify-between mb-8">
          <div className="flex flex-col items-center">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step === 1 ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}>
              1
            </div>
            <span className="text-xs mt-1">Informasi Akun</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step === 2 ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}>
              2
            </div>
            <span className="text-xs mt-1">Dokumen & Persetujuan</span>
          </div>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={`mt-1 appearance-none block w-full px-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={`mt-1 appearance-none block w-full px-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className={`mt-1 appearance-none block w-full px-3 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Konfirmasi Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className={`mt-1 appearance-none block w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>}
              </div>
              
              <div>
                <button
                  type="button"
                  onClick={nextStep}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Lanjut
                </button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Alamat Lengkap
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  className={`mt-1 appearance-none block w-full px-3 py-2 border ${errors.address ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Nomor Telepon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={`mt-1 appearance-none block w-full px-3 py-2 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="idCard" className="block text-sm font-medium text-gray-700">
                  Upload KTP/Identitas
                </label>
                <input
                  id="idCard"
                  name="idCard"
                  type="file"
                  accept="image/*"
                  className={`mt-1 appearance-none block w-full px-3 py-2 border ${errors.idCard ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                  onChange={handleFileChange}
                />
                {file && <p className="mt-1 text-xs text-green-600">File dipilih: {file.name}</p>}
                {errors.idCard && <p className="mt-1 text-xs text-red-600">{errors.idCard}</p>}
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTOS"
                    name="agreeTOS"
                    type="checkbox"
                    checked={formData.agreeTOS}
                    onChange={handleChange}
                    className={`focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded`}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeTOS" className="font-medium text-gray-700">
                    Saya menyetujui syarat dan ketentuan koperasi
                  </label>
                </div>
              </div>
              {errors.agreeTOS && <p className="mt-1 text-xs text-red-600">{errors.agreeTOS}</p>}
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Daftar
                </button>
              </div>
            </div>
          )}
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Sudah punya akun?{" "}
            <Link to="/landing/login" className="font-medium text-green-600 hover:text-green-500">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
