
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

const tickets = [
  {
    id: "TKT001",
    date: "22 Apr 2025",
    member: "Budi Santoso",
    subject: "Gagal Login",
    category: "Teknikal",
    priority: "high",
    status: "open"
  },
  {
    id: "TKT002",
    date: "21 Apr 2025",
    member: "Siti Rahayu",
    subject: "Pertanyaan Simpanan",
    category: "Informasi",
    priority: "medium",
    status: "in_progress"
  },
  {
    id: "TKT003",
    date: "20 Apr 2025",
    member: "Ahmad Ridwan",
    subject: "Update Data",
    category: "Administrasi",
    priority: "low",
    status: "closed"
  }
];

const AdminBantuan: React.FC = () => {
  const { user } = useRequireAuth("admin");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Bantuan</h1>
          <p className="text-gray-600">Pengaduan dan dukungan</p>
        </div>
        <Button>Tiket Baru</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Total Tiket</div>
            <div className="text-2xl font-bold mt-2">24</div>
            <div className="text-sm text-gray-500 mt-1">Bulan ini</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Belum Selesai</div>
            <div className="text-2xl font-bold mt-2">8</div>
            <div className="text-sm text-yellow-500 mt-1">Perlu ditindaklanjuti</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Dalam Proses</div>
            <div className="text-2xl font-bold mt-2">5</div>
            <div className="text-sm text-blue-500 mt-1">Sedang ditangani</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Selesai</div>
            <div className="text-2xl font-bold mt-2">11</div>
            <div className="text-sm text-green-500 mt-1">Minggu ini</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Tiket</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Anggota</TableHead>
                <TableHead>Subjek</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Prioritas</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.date}</TableCell>
                  <TableCell>{ticket.member}</TableCell>
                  <TableCell>{ticket.subject}</TableCell>
                  <TableCell>{ticket.category}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      ticket.priority === "high" 
                        ? "bg-red-100 text-red-800"
                        : ticket.priority === "medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                    }`}>
                      {ticket.priority === "high" ? "Tinggi" 
                        : ticket.priority === "medium" ? "Sedang" 
                        : "Rendah"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      ticket.status === "open" 
                        ? "bg-red-100 text-red-800"
                        : ticket.status === "in_progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                    }`}>
                      {ticket.status === "open" ? "Baru" 
                        : ticket.status === "in_progress" ? "Proses" 
                        : "Selesai"}
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

export default AdminBantuan;
