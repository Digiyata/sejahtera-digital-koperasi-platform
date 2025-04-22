
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Wallet,
  CreditCard,
  Calendar
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    newMembersThisMonth: 28,
    todayTransactions: 12
  };

  // Mock data for recent activities
  const recentActivities = [
    { id: 1, type: "Pendaftaran Anggota Baru", name: "Dian Sastro", date: "22 Apr 2025", status: "Sukses" },
    { id: 2, type: "Pengajuan Pinjaman", name: "Budi Setiawan", date: "21 Apr 2025", status: "Menunggu" },
    { id: 3, type: "Transaksi Simpanan", name: "Rina Marlina", date: "20 Apr 2025", status: "Sukses" },
    { id: 4, type: "Pengajuan Pinjaman", name: "Ahmad Junaedi", date: "19 Apr 2025", status: "Ditolak" },
    { id: 5, type: "Transaksi Simpanan", name: "Sri Wahyuni", date: "18 Apr 2025", status: "Sukses" }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Admin</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">Total Anggota</span>
            </div>
            <p className="text-2xl font-bold">{statistics.totalMembers}</p>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-green-500">{statistics.activeMembers} Aktif</span>
              <span className="text-gray-500">{statistics.inactiveMembers} Tidak Aktif</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">Total Dana</span>
            </div>
            <p className="text-2xl font-bold">{statistics.totalBalance}</p>
            <div className="text-sm text-green-500">+2.4% dari bulan lalu</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">Pinjaman Aktif</span>
            </div>
            <p className="text-2xl font-bold">{statistics.activeLoans}</p>
            <div className="text-sm text-gray-500">Senilai {statistics.loanAmount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">Transaksi Hari Ini</span>
            </div>
            <p className="text-2xl font-bold">{statistics.todayTransactions}</p>
            <div className="text-sm text-green-500">+5 dari kemarin</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipe</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.type}</TableCell>
                  <TableCell>{activity.name}</TableCell>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      activity.status === "Sukses" 
                        ? "bg-green-100 text-green-800"
                        : activity.status === "Menunggu"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}>
                      {activity.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Charts & Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Grafik Pertumbuhan Anggota</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <span className="text-gray-500">Grafik akan diimplementasikan</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Grafik Transaksi Keuangan</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <span className="text-gray-500">Grafik akan diimplementasikan</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
