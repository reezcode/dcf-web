import { EmptyLayout } from "@/components/layout";
import NavButton from "@/components/nav_button";
import Sidebar from "@/components/sidebar";
import NavDashboard from "@/configs/navigation_dashboard";
import { Button, TextInput } from "@mantine/core";
import { Cookies } from "react-cookie";
import {
  At,
  BrandWhatsapp,
  CircleX,
  FileUpload,
  School,
  UserCircle,
} from "tabler-icons-react";

interface dataProps {
  data: {
    nama: string;
    id_lomba: string;
    no_hp: string;
    asal_sekolah: string;
    ktm: string;
  };
}

interface dataCookies {
  email: string;
  isLoggedinIn: boolean;
}

export default function profil(props: dataProps) {
  async function dataCheck() {
    const response = await fetch("/api/auth/getData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const dataUser = await response.json();
  }
  dataCheck();
  return (
    <EmptyLayout pageTitle="Kompetisi">
      <div
        className="bg-center bg-cover lg:w-screen h-fit lg:h-screen"
        style={{
          backgroundImage: "url('../../bgform.svg')",
        }}
      >
        <div className="flex w-full h-full mb-4 backdrop-blur-3xl">
          <Sidebar />
          {/* pendaftaran */}
          <div className="w-full pb-16 h-fit lg:h-screen p-7">
            <h2 className="my-2 text-xl font-bold">Kompetisi Kimia</h2>
            <div className="flex flex-col h-full grid-cols-2 grid-rows-6 gap-4 md:grid ">
              <div className="flex items-center justify-center w-full h-full px-1 py-2 m-auto bg-white rounded-md shadow-lg grid-span-1 shadow-dcf-dark-brown/30">
                <Button
                  type="submit"
                  className="mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
                >
                  Buku Panduan
                </Button>
                <Button
                  type="submit"
                  className="mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
                >
                  Petunjuk Teknis
                </Button>
              </div>
              <div className="row-span-5 row-start-2 p-5 bg-white rounded-md shadow-lg shadow-dcf-dark-brown/30">
                <p className="text-[12px] text-black/60">
                  Formulir Pendaftaran
                </p>
                <div>
                  <TextInput
                    icon={<UserCircle size={20} />}
                    id="nama"
                    withAsterisk={true}
                    label="Nama Lengkap"
                    variant="filled"
                    placeholder="Moestafa"
                  />
                </div>
                <div>
                  <TextInput
                    icon={<School size={20} />}
                    label="Asal Sekolah"
                    id="asal_sekolah"
                    required
                    withAsterisk={true}
                    placeholder="SMA 3 Bekasi"
                    variant="filled"
                  />
                </div>
                <div>
                  <TextInput
                    icon={<At size={20} />}
                    id="input-email"
                    withAsterisk={true}
                    label="Email"
                    variant="filled"
                    placeholder="Moestafa1976@gmail.com"
                  />
                </div>
                <div>
                  <TextInput
                    icon={<BrandWhatsapp size={20} />}
                    id="telp"
                    withAsterisk={true}
                    label="Whatsapp"
                    variant="filled"
                    placeholder="08xxxx"
                  />
                </div>
                <div className="mx-auto my-4 w-fit">
                  <Button
                    type="submit"
                    className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
                  >
                    Konfirmasi Data
                  </Button>
                </div>
              </div>
              <div className="flex flex-col row-span-3 p-5 bg-white rounded-md shadow-lg shadow-dcf-dark-brown/30">
                <p className="text-[12px] text-black/60">Bukti Pembayaran</p>
                <div className="flex items-center self-center w-4/5 p-10 my-2 border-2 border-dashed rounded-md cursor-pointer border-dcf-dark-brown h-3/5">
                  <FileUpload size={50} strokeWidth={1} color={"#967E76"} />
                  <p className="mx-2 text-sm text-dcf-dark-brown">
                    Klik di sini untuk mengunggah bukti pembayaran
                  </p>
                </div>
                <Button
                  type="submit"
                  className="self-center w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
                >
                  Upload Bukti Pembayaran
                </Button>
              </div>
              <div className="flex flex-col row-span-3 p-5 bg-white rounded-md shadow-lg shadow-dcf-dark-brown/30">
                <p className="text-[12px] text-black/60">Status Registrasi</p>
                <div className="flex items-center mb-2">
                  <CircleX size={18} color="red" />
                  <p className="mx-2 text-sm">Belum Terverifikasi</p>
                </div>
                <p className="text-[12px] text-black/60">Kontak</p>
                <div className="flex items-center mb-2">
                  <BrandWhatsapp size={18} color="green" />
                  <p className="mx-2 text-sm">No CP</p>
                </div>
              </div>
            </div>
          </div>
          {/* pelaksanaan */}
          {/* <div className="w-full pb-16 h-fit lg:h-screen p-7">
                        <h2 className="my-2 text-xl font-bold">Kompetisi Kimia</h2>
                        <div className='flex flex-col w-full h-full grid-cols-2 grid-rows-6 gap-4 lg:grid'>
                            <div className="flex flex-col h-full row-span-3 p-5 bg-white bg-center rounded-md shadow-lg rows-span-3 shadow-dcf-dark-brown/3">
                                <div className='flex justify-between'>
                                    <p className="text-[12px] text-black/60">Uji Coba </p>
                                    <p className="self-end text-[12px] text-black/60">Due in 8 days</p>    
                                </div>
                                <div className='self-center my-2'>
                                    <div className='flex items-center'>
                                        <CircleCheck size={18} color='green' />
                                        <p className='mx-2'>Uji Coba akan dilakukan pada tanggal </p>
                                    </div>
                                    <div className='flex items-center'>
                                        <CircleCheck size={18} color='green' />
                                        <p className='mx-2'>Pastikan anda sudah membaca tata cara pelaksanaan ujian</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <CircleCheck size={18} color='green' />
                                        <p className='mx-2'>Apabila terdapat kesulitan atau error bisa hubungi kontak tertera</p>
                                    </div>
                                </div>
                                <Button type="submit" className="self-center w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Ikuti Uji Coba</Button>
                            </div>    
                            <div className="flex flex-col row-start-4 p-5 bg-white bg-center rounded-md shadow-lg h-fit rows-span-3 shadow-dcf-dark-brown/30">
                                <div className='flex justify-between'>
                                    <p className="text-[12px] text-black/60">Kompetisi</p>
                                    <p className="self-end text-[12px] text-black/60">Not started yet</p>    
                                </div>
                                <div className='self-center my-2 '>
                                    <div className='flex items-center'>
                                        <CircleCheck size={18} color='green' />
                                        <p className='mx-2'>Kompetisi akan dilakukan pada tanggal </p>
                                    </div>
                                    <div className='flex items-center'>
                                        <CircleCheck size={18} color='green' />
                                        <p className='mx-2'>Pastikan anda sudah membaca tata cara pelaksanaan ujian</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <CircleCheck size={18} color='green' />
                                        <p className='mx-2'>Apabila terdapat kesulitan atau error bisa hubungi kontak tertera</p>
                                    </div>
                                </div>
                                <Button type="submit" className="self-center w-fit bg-dcf-brown hover:bg-dcf-dark-brown/90">Ikuti Ujian</Button>
                            </div>
                            <div className='w-full row-span-4 p-5 bg-white rounded-md shadow-lg h-fit shadow-dcf-dark-brown/30 lg:p-2 xl:p-5'>
                                <h2 className='w-full p-2 font-bold text-center'>Syarat dan Ketentuan</h2>
                                <ul>
                                    <li className='flex text-sm'><CircleCheck className="mt-1 mr-2 shrink-0" size={16} color='green'/><p> Siswa SMA/SMK/sederajat yang masih aktif baik kelas X/XI/XII pada tahun ajaran 2023/2024.</p></li>
                                    <li className='flex text-sm'><CircleCheck className="mt-1 mr-2 shrink-0" size={16} color='green'/><p> SPeserta DCF 2023 merupakan perwakilan dari sekolah maupun pribadi.</p></li>
                                    <li className='flex text-sm'><CircleCheck className="mt-1 mr-2 shrink-0" size={16} color='green'/><p>Setiap sekolah tidak dibatasi banyaknya peserta yang didelegasikan.</p></li>
                                    <li className='flex text-sm'><CircleCheck className="mt-1 mr-2 shrink-0" size={16} color='green'/><p>Peserta DCF 2023 diwajibkan mengunggah twibbon dan mengikuti akun Instagram @dcfundip.</p></li>
                                </ul>
                                <div className='flex justify-center p-4'>
                                    <Button type="submit" className="mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Buku Panduan</Button>    
                                    <Button type="submit" className="mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Petunjuk Teknis</Button>    
                                </div>
                                
                            </div>
                            <div className='flex flex-col w-full h-full col-start-2 row-span-2 row-start-5 p-5 bg-white rounded-md shadow-lg col lg:px-5 lg:py-1 shadow-dcf-dark-brown/30'>
                                <p className="text-[12px] text-black/60">Status Registrasi</p>
                                <div className='flex items-center mb-2'>
                                    <CircleX 
                                        size={16}
                                        color='red'/> 
                                    <p className="mx-2 text-sm">Belum Terverifikasi</p>  
                                </div>
                                <p className="text-[12px] text-black/60">Kontak</p>
                                <div className='flex items-center mb-2'>
                                    <BrandWhatsapp 
                                        size={16}
                                        color='green'/> 
                                    <p className="mx-2 text-sm">No CP</p>  
                                </div>
                                <Button type="submit" className="self-center mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Grup Whatsapp</Button>
                                </div>
                        </div>
                    </div> */}
        </div>
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 lg:hidden">
          <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            {NavDashboard.map((data) => {
              return <NavButton data={data} key={data.title} />;
            })}
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}

export async function getServerSideProps(context: any) {
  const cookies = new Cookies();
  const email: boolean = cookies.get("email") !== undefined;
  if (email) {
    context.res.setHeader("Location", "/login");
    context.res.statusCode = 302;
    context.res.end();
  }
  return { props: {} };
}
