
import React, { useState } from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Member {
  id: string;
  name: string;
  email: string;
  ktp: string;
  address: string;
  status: "active" | "inactive";
}

// Sample data
const sampleMembers: Member[] = [
  {
    id: "1",
    name: "Budi Santoso",
    email: "budi@example.com",
    ktp: "3171234567890001",
    address: "Jl. Sudirman No. 123, Jakarta",
    status: "active"
  },
  {
    id: "2",
    name: "Siti Rahayu",
    email: "siti@example.com",
    ktp: "3171234567890002",
    address: "Jl. Thamrin No. 456, Jakarta",
    status: "active"
  },
  {
    id: "3",
    name: "Ahmad Ridwan",
    email: "ahmad@example.com",
    ktp: "3171234567890003",
    address: "Jl. Gatot Subroto No. 789, Jakarta",
    status: "inactive"
  }
];

const AdminKeanggotaan: React.FC = () => {
  const { user } = useRequireAuth("admin");
  const [members] = useState<Member[]>(sampleMembers);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddNew = () => {
    setSelectedMember(null);
    setShowForm(true);
  };

  const handleEdit = (member: Member) => {
    setSelectedMember(member);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pengaturan Anggota</h1>
        <Button onClick={handleAddNew}>Tambah Anggota</Button>
      </div>

      {/* Member Form */}
      {showForm && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              {selectedMember ? "Edit Anggota" : "Tambah Anggota"}
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Lengkap</label>
                  <Input 
                    defaultValue={selectedMember?.name}
                    placeholder="Masukkan nama lengkap" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email"
                    defaultValue={selectedMember?.email}
                    placeholder="Masukkan email" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nomor KTP</label>
                  <Input 
                    defaultValue={selectedMember?.ktp}
                    placeholder="Masukkan nomor KTP" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <select 
                    defaultValue={selectedMember?.status}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  >
                    <option value="active">Aktif</option>
                    <option value="inactive">Tidak Aktif</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Alamat</label>
                  <Input 
                    defaultValue={selectedMember?.address}
                    placeholder="Masukkan alamat lengkap" 
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Batal
                </Button>
                <Button type="submit">
                  {selectedMember ? "Simpan" : "Tambah"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Members Table */}
      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Nomor KTP</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.ktp}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      member.status === "active" 
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {member.status === "active" ? "Aktif" : "Tidak Aktif"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(member)}>
                      Edit
                    </Button>
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

export default AdminKeanggotaan;
