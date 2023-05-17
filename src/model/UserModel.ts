class User {
  id_lomba?: number;
  email: string;
  no_hp: string;
  nama: string;
  asal_sekolah: string;
  upassword: string;
  ktm?: string;
  url: string;
  constructor(
    id_lomba: number,
    email: string,
    no_hp: string,
    nama: string,
    asal_sekolah: string,
    upassword: string,
    ktm: string,
    url: string
  ) {
    this.id_lomba = id_lomba;
    this.email = email;
    this.no_hp = no_hp;
    this.nama = nama;
    this.asal_sekolah = asal_sekolah;
    this.upassword = upassword;
    this.ktm = ktm;
    this.url = url;
  }
}

export default User;
