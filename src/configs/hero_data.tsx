interface HeroDataItem {
    title: string;
    desc: string;
    button: {
        text: string;
        link: string;
    }[];
}

const HeroData : HeroDataItem[] = [
    {
        title: "Diponegoro Chemistry Fair 2023",
        desc: "Diponegoro Chemistry Fair 2023 merupakan suatu kegiatan Himpunan Mahasiswa Kimia Universitas Diponegoro.",
        button : [
            {
                text: "Kompetisi",
                link: "/kompetisi"
            },
            {
                text: "LKTI",
                link: "/lkti"
            },
            {
                text: "Seminar",
                link: "/semnas"
            },
        ]   
    },
    {
        title: "Kompetisi Kimia",
        desc: "Kompetisi Kimia merupakan suatu rangkaian kegiatan DCF 2023 sebagai ajang kompetisi di bidang akademik yang diikuti oleh siswa SMA/sederajat Nasional.",
        button: [
            {
                text: "Syarat Ketentuan",
                link: "/kompetisi/#sk"
            },
            {
                text: "Daftar",
                link: "/dashboard"
            },
        ]
    },
    {
        title: "Lomba Karya Tulis Ilmiah",
        desc: "Lomba Karya Tulis Ilmiah (LKTI) merupakan salah satu rangakaian kegiatan DCF 2023 yang berguna sebagai wadah peserta untuk menuangkan ide dan berinovasi dalam bentuk karya tulis ilmiah",
        button: [
            {
                text: "Syarat Ketentuan",
                link: "/lkti/#sk"
            },
            {
                text: "Daftar",
                link: "/dashboard"
            },
        ]
    },
    {
        title: "Seminar Nasional",
        desc: "Seminar Nasional diadakan sebagai acara penutup Diponegoro Chemistry Fair 2023.",
        button: [
            {
                text: "Benefit",
                link: "/semnas/#sk"
            },
            {
                text: "Daftar",
                link: "/dashboard"
            },
        ]
    }
]

export default HeroData