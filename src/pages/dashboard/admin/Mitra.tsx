
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

const partners = [
  {
    id: "PTR001",
    name: "Bank Sejahtera",
    type: "Lembaga Keuangan",
    program: "Pembiayaan UMKM",
    status: "active",
    startDate: "01 Jan 2025"
  },
  {
    id: "PTR002",
    name: "Asuransi Maju Bersama",
    type: "Asuransi",
    program: "Asuransi Kesehatan Anggota",
    status: "active",
    startDate: "15 Feb 2025"
  },
  {
    id: "PTR003",
    name: "PT Distribusi Utama",
    type: "Distributor",
    program: "Pengadaan Barang",
    status: "inactive",
    startDate: "10 Mar 2025"
  },
  {
    id: "PTR004",
    name: "Yayasan Pendidikan Indonesia",
    type: "Pendidikan",
    program: "Beasiswa Anggota",
    status: "active",
    startDate: "05 Apr 2025"
  }
];

const AdminMitra: React.FC = () => {
  const { user } = useRequireAuth("admin");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">List Mitra</h1>
          <p className="text-gray-600">Data mitra dan status kerjasama</p>
        </div>
        <Button>Tambah Mitra</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Total Mitra</div>
            <div className="text-2xl font-bold mt-2">15</div>
            <div className="text-sm text-green-500 mt-1">+2 mitra baru</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Mitra Aktif</div>
            <div className="text-2xl font-bold mt-2">12</div>
            <div className="text-sm text-gray-500 mt-1">80% dari total</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Total Program</div>
            <div className="text-2xl font-bold mt-2">8</div>
            <div className="text-sm text-blue-500 mt-1">4 dalam pengembangan</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nama Mitra</TableHead>
                <TableHead>Jenis</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Mulai Kerjasama</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partners.map((partner) => (
                <TableRow key={partner.id}>
                  <TableCell className="font-medium">{partner.id}</TableCell>
                  <TableCell>{partner.name}</TableCell>
                  <TableCell>{partner.type}</TableCell>
                  <TableCell>{partner.program}</TableCell>
                  <TableCell>{partner.startDate}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      partner.status === "active" 
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {partner.status === "active" ? "Aktif" : "Tidak Aktif"}
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

export default AdminMitra;
