
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

const attendance = [
  {
    id: "1",
    employee: "Dewi Lestari",
    position: "Customer Service",
    date: "22 Apr 2025",
    checkIn: "08:00",
    checkOut: "17:00",
    status: "present"
  },
  {
    id: "2",
    employee: "Joko Widodo",
    position: "Marketing",
    date: "22 Apr 2025",
    checkIn: "08:15",
    checkOut: "17:00",
    status: "late"
  },
  {
    id: "3",
    employee: "Sarah Amanda",
    position: "Teller",
    date: "22 Apr 2025",
    checkIn: "-",
    checkOut: "-",
    status: "absent"
  },
  {
    id: "4",
    employee: "Rudi Hartono",
    position: "Supervisor",
    date: "22 Apr 2025",
    checkIn: "07:55",
    checkOut: "17:00",
    status: "present"
  }
];

const AdminPegawai: React.FC = () => {
  const { user } = useRequireAuth("admin");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Daftar Hadir</h1>
          <p className="text-gray-600">Absensi harian pegawai</p>
        </div>
        <Button>Download Laporan</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Total Pegawai</div>
            <div className="text-2xl font-bold mt-2">24</div>
            <div className="text-sm text-gray-500 mt-1">Aktif</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Hadir</div>
            <div className="text-2xl font-bold mt-2">20</div>
            <div className="text-sm text-green-500 mt-1">83% dari total</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Terlambat</div>
            <div className="text-2xl font-bold mt-2">3</div>
            <div className="text-sm text-yellow-500 mt-1">12% dari total</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Tidak Hadir</div>
            <div className="text-2xl font-bold mt-2">1</div>
            <div className="text-sm text-red-500 mt-1">4% dari total</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pegawai</TableHead>
                <TableHead>Posisi</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Jam Masuk</TableHead>
                <TableHead>Jam Keluar</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendance.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.employee}</TableCell>
                  <TableCell>{record.position}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.checkIn}</TableCell>
                  <TableCell>{record.checkOut}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      record.status === "present" 
                        ? "bg-green-100 text-green-800"
                        : record.status === "late"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}>
                      {record.status === "present" ? "Hadir" 
                        : record.status === "late" ? "Terlambat" 
                        : "Tidak Hadir"}
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

export default AdminPegawai;
