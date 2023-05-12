import {useState} from 'react'
import Sidebar from '@/components/sidebar'
import NavDashboard from '@/configs/navigation_dashboard'
import NavButton from '@/components/nav_button'
import { EmptyLayout } from '@/components/layout'
import { TextInput } from '@mantine/core'
import { At, FileUpload, School, Tex, UserCircle, BrandWhatsapp, Checklist, CircleCheck} from 'tabler-icons-react'
import { Button } from '@mantine/core'
import Buttons from '@/components/buttons'
import { CircleX } from 'tabler-icons-react';
import {motion} from "framer-motion"


export default function profil() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const role = ["Ketua", "Anggota 1", "Anggota 2"];
    return (
        <EmptyLayout pageTitle='LKTI'>
            <div className="w-screen bg-center bg-cover h-fit lg:h-screen" style={{
                backgroundImage: "url('../../bgform.svg')",
            }}>
                <div className="flex w-full h-full mb-4 backdrop-blur-3xl">
                    <Sidebar/>
                    {/* pendaftaran */}
                    <div className="w-full pb-16 h-fit lg:h-screen p-7">
                        <h2 className="my-2 text-xl font-bold">Lomba Karya Tulis Ilmiah</h2>
                        <div className='flex flex-col h-full grid-cols-2 grid-rows-6 gap-4 md:grid'>
                            <div className='flex items-center justify-center w-full h-full px-1 py-2 m-auto bg-white rounded-md shadow-lg grid-span-1 shadow-dcf-dark-brown/30'>
                                <Button type="submit" className="mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Buku Panduan</Button>    
                                <Button type="submit" className="mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Petunjuk Teknis</Button>    
                            </div>
                            <div className='row-span-5 row-start-2 p-5 bg-white rounded-md shadow-lg shadow-dcf-dark-brown/30'>
                                <p className="text-[12px] text-black/60">Formulir Pendaftaran</p>
                                <div>
                                    <div className="flex justify-around space-x-3 text-sm border-b">
                                        {role.map((tab, idx) => {
                                        return (
                                            <button
                                            key={idx}
                                            className={`py-2 w-full my-2 rounded-md transition-colors duration-300 
                                            ${
                                                idx === activeTabIndex
                                                ? " bg-dcf-light-brown/80"
                                                : " hover:border-dcf-brown hover:bg-dcf-light-brown/60"
                                            }`}
                                            onClick={() => setActiveTabIndex(idx)}>
                                            {role[idx]}
                                            </button>
                                        );
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <TextInput 
                                        icon={<UserCircle size={20}/>} 
                                        id="{nama}" 
                                        withAsterisk={true}
                                        label="Nama Lengkap"
                                        variant='filled'
                                        placeholder="moestop"
                                    />
                                </div>
                                <div>
                                    <TextInput
                                        icon={<School size={20}/>}
                                        label="Asal Instansi"
                                        id='asal_sekolah'
                                        required
                                        withAsterisk={true}
                                        placeholder="SMA 3 Bekasi"
                                        variant='filled'
                                    />
                                </div>
                                <div>
                                    <TextInput 
                                        icon={<At size={20}/>} 
                                        id="input-email" 
                                        withAsterisk={true}
                                        label="Email" 
                                        variant='filled'
                                        placeholder='Moestafa1976@gmail.com'
                                    />
                                </div>
                                <div>
                                    <TextInput 
                                        icon={<BrandWhatsapp size={20}/>} 
                                        id="telp" 
                                        withAsterisk={true}
                                        label="Whatsapp" 
                                        variant='filled'
                                        placeholder='08xxxx'
                                    />
                                </div>
                                <div className='mx-auto my-4 w-fit'>
                                    <Button type="submit" className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Konfirmasi Data</Button>    
                                </div>
                            </div>
                            <div className='flex flex-col row-span-4 p-5 bg-white rounded-md shadow-lg shadow-dcf-dark-brown/30'>
                                <p className="text-[12px] text-black/60">Abstrak LKTI</p>
                                <div className='flex items-center self-center w-4/5 p-10 my-2 border-2 border-dashed rounded-md cursor-pointer border-dcf-dark-brown h-3/5'>
                                        <FileUpload size={50} strokeWidth={1} color={'#967E76'}/>
                                        <p className='mx-2 text-sm text-dcf-dark-brown'>Klik di sini untuk mengunggah Abstrak LKTI</p>
                                </div>
                                <Button type="submit" className="self-center w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Upload Abstrak LKTI</Button> 
                            </div>
                            <div className='flex flex-col row-span-2 p-5 bg-white rounded-md shadow-lg shadow-dcf-dark-brown/30'>
                                <p className="text-[12px] text-black/60">Status Registrasi</p>
                                <div className='flex items-center mb-2'>
                                    <CircleX 
                                        size={18}
                                        color='red'/> 
                                    <p className="mx-2 text-sm">Belum Terverifikasi</p>  
                                </div>
                                <p className="text-[12px] text-black/60">Kontak</p>
                                <div className='flex items-center mb-2'>
                                    <BrandWhatsapp 
                                        size={18}
                                        color='green'/> 
                                    <p className="mx-2 text-sm">No CP</p>  
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* pelaksanaan */}
                    {/* <div className="w-full pb-16 h-fit lg:h-screen p-7">
                        <h2 className="my-2 text-xl font-bold">Lomba Karya Tulis Ilmiah</h2>
                        <div className='flex flex-col justify-around order-1 grid-cols-2 grid-rows-6 gap-4 h-fit lg:h-full lg:grid'>
                            <div className="flex flex-col h-full row-span-3 row-start-1 p-5 my-4 overflow-hidden bg-white bg-center bg-cover rounded-md shadow-lg lg:my-2 shadow-dcf-dark-brown/30">
                                <div className='flex justify-between'>
                                    <p className="text-[12px] text-black/60">Bukti Pembayaran</p>
                                    <p className="self-end text-[12px] text-black/60">Due in 8 days</p>    
                                </div>
                                <div className='flex items-center self-center justify-center w-4/5 p-10 my-2 border-2 border-dashed rounded-md cursor-pointer border-dcf-dark-brown h-3/5'>
                                        <FileUpload size={50} strokeWidth={1} color={'#967E76'}/>
                                        <p className='mx-2 text-sm text-dcf-dark-brown'>Klik di sini untuk mengunggah Bukti Pembayaran</p>
                                </div>
                                <Button type="submit" className="self-center w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Upload Bukti Pembayaran</Button>
                            </div>    
                            <div className="flex flex-col h-full row-span-3 row-start-4 p-5 my-4 overflow-hidden bg-white bg-center bg-cover rounded-md shadow-lg lg:my-2 shadow-dcf-dark-brown/30">
                                <div className='flex justify-between'>
                                    <p className="text-[12px] text-black/60">Fullpaper LKTI</p>
                                    <p className="self-end text-[12px] text-black/60">Due in 8 days</p>    
                                </div>
                                <div className='flex items-center self-center justify-center w-4/5 p-10 my-2 border-2 border-dashed rounded-md cursor-pointer border-dcf-dark-brown h-3/5'>
                                        <FileUpload size={50} strokeWidth={1} color={'#967E76'}/>
                                        <p className='mx-2 text-sm text-dcf-dark-brown'>Klik di sini untuk mengunggah Fullpaper LKTI</p>
                                </div>
                                <Button type="submit" className="self-center w-fit bg-dcf-brown hover:bg-dcf-dark-brown/90">Upload FullPaper LKTI</Button>
                            </div>   
                            <div className='w-full h-full row-span-4 p-5 bg-white rounded-md shadow-lg shadow-dcf-dark-brown/30'>
                                <h2 className='w-full p-2 font-bold text-center'>Syarat dan Ketentuan</h2>
                                <ul>
                                    <li className='flex text-sm'><CircleCheck className="mt-1 mr-2 shrink-0" size={16} color='green'/><p> Siswa SMA/SMK/sederajat yang masih aktif baik kelas X/XI/XII pada tahun ajaran 2023/2024.</p></li>
                                    <li className='flex text-sm'><CircleCheck className="mt-1 mr-2 shrink-0" size={16} color='green'/><p> Satu tim terdiri dari 2-3 siswa dari sekolah yang sama dan maksimal tergabung ke dalam 2 tim yang berbeda.</p></li>
                                    <li className='flex text-sm'><CircleCheck className="mt-1 mr-2 shrink-0" size={16} color='green'/><p> Setiap karya tulis wajib dibimbing oleh seorang guru pembimbing.</p></li>
                                    <li className='flex text-sm'><CircleCheck className="mt-1 mr-2 shrink-0" size={16} color='green'/><p> Peserta DCF 2023 diwajibkan mengunggah twibbon dan mengikuti akun Instagram @dcfundip</p></li>
                                </ul>
                                <div className='flex justify-center p-4'>
                                    <Button type="submit" className="mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Buku Panduan</Button>    
                                    <Button type="submit" className="mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Petunjuk Teknis</Button>    
                                </div>
                                
                            </div>
                            <div className='w-full h-full row-span-2 p-5 bg-white rounded-md shadow-lg lg:px-5 lg:py-1 shadow-dcf-dark-brown/30 column-start-2'>
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
                            </div>
                        </div>
                    </div> */}
                </div>    
                <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 lg:hidden">
                    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium" >
                        {NavDashboard.map((data) => {
                            return <NavButton data={data} key={data.title}/>
                        })}
                    </div>
                </div>
            </div>
        </EmptyLayout>
    )
}
