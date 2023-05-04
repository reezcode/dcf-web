interface SKDataItem {
    title: string;
    type: string;
    skOrBenefit?: Array<string>;
    button?: {
        text: string;
        link: string;
    }[];
    harga: string;
    regist: string;
}

const SKData : SKDataItem[] = [
    {
        title: "Syarat dan Ketentuan",
        type: "Kompetisi Kimia",
        skOrBenefit: [
            "Siswa SMA/SMK/sederajat yang masih aktif baik kelas X/XI/XII pada tahun ajaran 2023/2024.", 
            "Peserta DCF 2023 merupakan perwakilan dari sekolah maupun pribadi.", 
            "Setiap sekolah tidak dibatasi banyaknya peserta yang didelegasikan.",
            "Peserta DCF 2023 diwajibkan mengunggah twibbon dan mengikuti akun Instagram @dcfundip."
        ],
        button: [
            {
                text: "Buku Panduan",
                link: "/"
            },
            {
                text: "Juknis Lomba",
                link: "/"
            }
        ],
        harga: "Rp 99.999,-/orang",
        regist: "/"
    },
    {
        title: "Syarat dan Ketentuan",
        type: "LKTI",
        skOrBenefit: [
            "Siswa SMA/SMK/sederajat yang masih aktif baik kelas X/XI/XII pada tahun ajaran 2023/2024.", 
            "Satu tim terdiri dari 2-3 siswa dari sekolah yang sama dan maksimal tergabung ke dalam 2 tim yang berbeda.",
            "Setiap karya tulis wajib dibimbing oleh seorang guru pembimbing.",
            "Peserta DCF 2023 diwajibkan mengunggah twibbon dan mengikuti akun Instagram @dcfundip"
        ],
        button: [
            {
                text: "Buku Panduan",
                link: "/"
            },
            {
                text: "Juknis Lomba",
                link: "/"
            }
        ],
        harga: "Rp 99.999,-/tim",
        regist: "/"
    },
    {
        title: "Benefit",
        type: "Seminar Nasional",
        harga: "Gratis",
        skOrBenefit: [
            "Memperluas relasi peserta.", 
            "Memperoleh E-Certificate sebagai bukti bahwa peserta pernah mengikuti Seminar Nasional DCF 2023.",
            "Memperoleh kesempatan berdiskusi dengan pembicara.",
            "Pengetahuan baru yang dapat diterapkan dalam kehidupan sehari-hari.",
        ],
        regist: "/",
    },
]

export default SKData