class LktiModel {
  email_ketua: string;
  nama_ketua: string;
  judul: string;
  email_anggota1: string;
  nama_anggota1: string;
  email_anggota2: string;
  nama_anggota2: string;
  asal_sekolah: string;
  link_abstrak: string;
  link_fullpaper: string;
  nilai_abstrak: number;
  nilai_fullpaper: number;
  link_pembayaran: string;
  verifikasi_pembayaran: string;
  status: string;
  constructor(
    email_ketua: string,
    nama_ketua: string,
    judul: string,
    email_anggota1: string,
    nama_anggota1: string,
    email_anggota2: string,
    nama_anggota2: string,
    asal_sekolah: string,
    link_abstrak: string,
    link_fullpaper: string,
    nilai_abstrak: number,
    nilai_fullpaper: number,
    link_pembayaran: string,
    verifikasi_pembayaran: string,
    status: string
  ) {
    this.email_ketua = email_ketua;
    this.nama_ketua = nama_ketua;
    this.judul = judul;
    this.email_anggota1 = email_anggota1;
    this.nama_anggota1 = nama_anggota1;
    this.email_anggota2 = email_anggota2;
    this.nama_anggota2 = nama_anggota2;
    this.asal_sekolah = asal_sekolah;
    this.link_abstrak = link_abstrak;
    this.link_fullpaper = link_fullpaper;
    this.nilai_abstrak = nilai_abstrak;
    this.nilai_fullpaper = nilai_fullpaper;
    this.link_pembayaran = link_pembayaran;
    this.verifikasi_pembayaran = verifikasi_pembayaran;
    this.status = status;
  }
}
