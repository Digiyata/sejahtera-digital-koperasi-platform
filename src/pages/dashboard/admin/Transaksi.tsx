
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    id: "TRX001",
    date: "22 Apr 2025",
    member: "Budi Santoso",
    type: "Simpanan Pokok",
    amount: "Rp 1.000.000",
    status: "success"
  },
  {
    id: "TRX002",
    date: "21 Apr 2025",
    member: "Siti Rahayu",
    type: "Pinjaman",
    amount: "Rp 5.000.000",
    status: "pending"
  },
  {
    id: "TRX003",
    date: "20 Apr 2025",
    member: "Ahmad Ridwan",
    type: "Angsuran",
    amount: "Rp 750.000",
    status: "success"
  },
  {
    id: "TRX004",
    date: "19 Apr 2025",
    member: "Dian Sastro",
    type: "Simpanan Wajib",
    amount: "Rp 250.000",
    status: "success"
  },
  {
    id: "TRX005",
    date: "18 Apr 2025",
    member: "Rina Marlina",
    type: "Penarikan",
    amount: "Rp 2.000.000",
    status: "rejected"
  }
];

const AdminTransaksi: React.FC = () => {
  const { user } = useRequireAuth("admin");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Transaksi</h1>
          <p className="text-gray-600">Catatan simpan, pinjam, dan tarik</p>
        </div>
        <Button>Tambah Transaksi</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Total Transaksi Hari Ini</div>
            <div className="text-2xl font-bold mt-2">12</div>
            <div className="text-sm text-green-500 mt-1">+2 dari kemarin</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Total Simpanan</div>
            <div className="text-2xl font-bold mt-2">Rp 25.450.000</div>
            <div className="text-sm text-green-500 mt-1">+4.5% minggu ini</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Total Pinjaman</div>
            <div className="text-2xl font-bold mt-2">Rp 125.750.000</div>
            <div className="text-sm text-red-500 mt-1">-2.1% minggu ini</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Rata-rata Transaksi</div>
            <div className="text-2xl font-bold mt-2">Rp 2.150.000</div>
            <div className="text-sm text-gray-500 mt-1">per transaksi</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Transaksi</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Anggota</TableHead>
                <TableHead>Tipe</TableHead>
                <TableHead>Jumlah</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.member}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      transaction.status === "success" 
                        ? "bg-green-100 text-green-800"
                        : transaction.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}>
                      {transaction.status === "success" ? "Sukses" 
                        : transaction.status === "pending" ? "Menunggu" 
                        : "Ditolak"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Detail</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTransaksi;
