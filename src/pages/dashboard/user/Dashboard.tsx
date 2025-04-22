
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const UserDashboard: React.FC = () => {
  const { user } = useRequireAuth("user");

  // Mock data for user dashboard
  const userData = {
    balance: "Rp 2.750.000",
    loans: {
      active: 1,
      amount: "Rp 5.000.000",
      nextPayment: "28 April 2025",
      nextAmount: "Rp 500.000",
    },
    savings: [
      { type: "Simpanan Pokok", amount: "Rp 500.000" },
      { type: "Simpanan Wajib", amount: "Rp 1.200.000" },
      { type: "Simpanan Sukarela", amount: "Rp 1.050.000" }
    ],
    recentTransactions: [
      { id: 1, date: "20 Apr 2025", type: "Simpanan Wajib", amount: "Rp 100.000", status: "Sukses" },
      { id: 2, date: "15 Apr 2025", type: "Angsuran Pinjaman", amount: "Rp 500.000", status: "Sukses" },
      { id: 3, date: "10 Apr 2025", type: "Penarikan", amount: "Rp 200.000", status: "Sukses" },
      { id: 4, date: "05 Apr 2025", type: "Simpanan Sukarela", amount: "Rp 150.000", status: "Sukses" }
    ]
  };

  if (!user) {
    return null; // Will be redirected by useRequireAuth
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Anggota</h1>
      <p className="text-gray-600">Selamat datang kembali, <span className="font-semibold">{user.name}</span>!</p>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Balance Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-sm font-medium text-gray-500">Total Saldo</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">{userData.balance}</p>
          <button className="mt-4 text-sm text-green-600 hover:text-green-800">
            Lihat Detail Simpanan
          </button>
        </div>

        {/* Active Loans Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-sm font-medium text-gray-500">Pinjaman Aktif</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">{userData.loans.active} Pinjaman</p>
          <p className="text-sm text-gray-600 mt-1">Total: {userData.loans.amount}</p>
          <button className="mt-4 text-sm text-green-600 hover:text-green-800">
            Lihat Detail Pinjaman
          </button>
        </div>

        {/* Next Payment Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-sm font-medium text-gray-500">Pembayaran Berikutnya</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">{userData.loans.nextAmount}</p>
          <p className="text-sm text-gray-600 mt-1">Jatuh tempo: {userData.loans.nextPayment}</p>
          <button className="mt-4 text-sm text-green-600 hover:text-green-800">
            Bayar Angsuran
          </button>
        </div>
      </div>

      {/* Savings Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800">Ringkasan Simpanan</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jenis Simpanan
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jumlah
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userData.savings.map((saving, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {saving.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {saving.amount}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                  {userData.balance}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Transaksi Terakhir</h2>
          <a href="#" className="text-sm text-green-600 hover:text-green-800">Lihat Semua</a>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jenis
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jumlah
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userData.recentTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Loan Application Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Simulasi Pinjaman</h2>
        <p className="text-gray-600 mb-4">
          Rencanakan pinjaman untuk kebutuhan usaha atau personal Anda dengan bunga rendah.
        </p>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
          Simulasi Sekarang
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
