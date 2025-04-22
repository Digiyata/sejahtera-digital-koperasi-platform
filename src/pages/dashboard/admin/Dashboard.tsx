
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const AdminDashboard: React.FC = () => {
  const { user } = useRequireAuth("admin");

  // Mock data for dashboard statistics
  const statistics = {
    totalMembers: 1247,
    activeMembers: 1072,
    inactiveMembers: 175,
    totalBalance: "Rp 2.850.000.000",
    activeLoans: 143,
    loanAmount: "Rp 1.325.000.000",
    newMembersThisMonth: 28
  };

  // Mock data for recent activities
  const recentActivities = [
    { id: 1, type: "Pendaftaran Anggota Baru", name: "Dian Sastro", date: "22 Apr 2025", status: "Sukses" },
    { id: 2, type: "Pengajuan Pinjaman", name: "Budi Setiawan", date: "21 Apr 2025", status: "Menunggu" },
    { id: 3, type: "Transaksi Simpanan", name: "Rina Marlina", date: "20 Apr 2025", status: "Sukses" },
    { id: 4, type: "Pengajuan Pinjaman", name: "Ahmad Junaedi", date: "19 Apr 2025", status: "Ditolak" },
    { id: 5, type: "Transaksi Simpanan", name: "Sri Wahyuni", date: "18 Apr 2025", status: "Sukses" }
  ];

  if (!user) {
    return null; // Will be redirected by useRequireAuth
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Admin</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Total Anggota</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">{statistics.totalMembers}</p>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-green-500">{statistics.activeMembers} Aktif</span>
            <span className="text-gray-500">{statistics.inactiveMembers} Tidak Aktif</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Total Dana</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">{statistics.totalBalance}</p>
          <div className="mt-2 text-sm">
            <span className="text-green-500">+2.4% dari bulan lalu</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Pinjaman Aktif</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">{statistics.activeLoans}</p>
          <div className="mt-2 text-sm">
            <span className="text-gray-500">Senilai {statistics.loanAmount}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Anggota Baru Bulan Ini</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">{statistics.newMembersThisMonth}</p>
          <div className="mt-2 text-sm">
            <span className="text-green-500">+12% dari bulan lalu</span>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800">Aktivitas Terbaru</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipe
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentActivities.map((activity) => (
                <tr key={activity.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {activity.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      activity.status === "Sukses" 
                        ? "bg-green-100 text-green-800"
                        : activity.status === "Menunggu"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}>
                      {activity.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900">
                    <a href="#">Detail</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts & Additional Info (simplified for this demo) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-64 flex items-center justify-center">
          <p className="text-gray-500">Grafik Pertumbuhan Anggota</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-64 flex items-center justify-center">
          <p className="text-gray-500">Grafik Transaksi Keuangan</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
