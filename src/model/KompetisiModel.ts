class KompetisiModel {
  nama: string;
  email: string;
  asal_sekolah: string;
  nliai_ujicoba: number;
  nilai_ujian: number;
  link_pembayaran: string;
  status_pembayaran: string;
  constructor(
    nama: string,
    email: string,
    asal_sekolah: string,
    nliai_ujicoba: number,
    nilai_ujian: number,
    link_pembayaran: string,
    status_pembayaran: string
  ) {
    this.nama = nama;
    this.email = email;
    this.asal_sekolah = asal_sekolah;
    this.nliai_ujicoba = nliai_ujicoba;
    this.nilai_ujian = nilai_ujian;
    this.link_pembayaran = link_pembayaran;
    this.status_pembayaran = status_pembayaran;
  }
}
