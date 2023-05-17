interface SKDataItem {
  title: string;
  type: string;
  skOrBenefit?: Array<string>;
  img: string;
  button?: {
    text: string;
    link: string;
  }[];
  harga: string;
  regist: string;
}

const SKData: SKDataItem[] = [
  {
    title: "Syarat dan Ketentuan",
    type: "Kompetisi Kimia",
    img: "url('../../kompetisi.svg')",
    skOrBenefit: [
      "Siswa SMA/SMK/sederajat yang masih aktif baik kelas X/XI/XII pada tahun ajaran 2023/2024.",
      "Peserta DCF 2023 merupakan perwakilan dari sekolah maupun pribadi.",
      "Setiap sekolah tidak dibatasi banyaknya peserta yang didelegasikan.",
      "Peserta DCF 2023 diwajibkan mengunggah twibbon dan mengikuti akun Instagram @dcfundip.",
    ],
    button: [
      {
        text: "Buku Panduan",
        link: "https://drive.google.com/file/d/1eKcIWT9nABpkAwD0Wq2hPHkR0CklWnNB/view?usp=sharing",
      },
      {
        text: "Juknis Lomba",
        link: "/",
      },
    ],
    harga: "Rp 75.000,-/orang",
    regist: "/dashboard",
  },
  {
    title: "Syarat dan Ketentuan",
    type: "LKTI",
    img: "url('../../lkti.svg')",
    skOrBenefit: [
      "Siswa SMA/SMK/sederajat yang masih aktif baik kelas X/XI/XII pada tahun ajaran 2023/2024.",
      "Satu tim terdiri dari 2-3 siswa dari sekolah yang sama dan maksimal tergabung ke dalam 2 tim yang berbeda.",
      "Setiap karya tulis wajib dibimbing oleh seorang guru pembimbing.",
      "Peserta DCF 2023 diwajibkan mengunggah twibbon dan mengikuti akun Instagram @dcfundip",
    ],
    button: [
      {
        text: "Buku Panduan",
        link: "https://drive.google.com/file/d/1GR2EiNSyUxpP9yNIf_Q5gk5kdldSHHky/view?usp=sharing",
      },
      {
        text: "Juknis Lomba",
        link: "/",
      },
    ],
    harga: "Rp 80.000,-/Fullpaper",
    regist: "/dashboard",
  },
  {
    title: "Benefit",
    type: "Seminar Nasional",
    harga: "Gratis",
    img: "url('../../semnas.svg')",
    skOrBenefit: [
      "Memperluas relasi peserta.",
      "Memperoleh E-Certificate sebagai bukti bahwa peserta pernah mengikuti Seminar Nasional DCF 2023.",
      "Memperoleh kesempatan berdiskusi dengan pembicara.",
      "Pengetahuan baru yang dapat diterapkan dalam kehidupan sehari-hari.",
    ],
    regist: "/dashboard",
  },
];

export default SKData;
