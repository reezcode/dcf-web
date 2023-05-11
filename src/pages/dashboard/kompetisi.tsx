import React from 'react'
import Sidebar from '@/components/sidebar'
import NavDashboard from '@/configs/navigation_dashboard'
import NavButton from '@/components/nav_button'
import { EmptyLayout } from '@/components/layout'
import { TextInput } from '@mantine/core'
import { At, BrandWhatsapp, CircleCheck, FileUpload, School, UserCircle } from 'tabler-icons-react'
import { Button } from '@mantine/core'
import Buttons from '@/components/buttons'
import { CircleX } from 'tabler-icons-react';

export default function profil() {
    return (
        <EmptyLayout pageTitle='Kompetisi'>
            <div className="w-screen bg-center bg-cover h-fit lg:h-screen" style={{
                backgroundImage: "url('../../bgform.svg')",
            }}>
                <div className="flex w-full h-full mb-4 backdrop-blur-3xl">
                    <Sidebar/>
                    {/* pendaftaran */}
                    {/* <div className="w-full pb-16 h-fit lg:h-screen p-7">
                        <h2 className="my-2 text-xl font-bold">Kompetisi Kimia</h2>
                        <div className='flex flex-col h-full grid-cols-2 grid-rows-6 gap-4 md:grid'>
                            <div className='flex items-center justify-center w-full h-full px-1 py-2 m-auto bg-white rounded-md grid-span-1'>
                                <Button type="submit" className="mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Buku Panduan</Button>    
                                <Button type="submit" className="mx-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Petunjuk Teknis</Button>    
                            </div>
                            <div className='row-span-5 row-start-2 p-5 bg-white rounded-md'>
                                <p className="text-[12px] text-black/60">Formulir Pendaftaran</p>
                                <div>
                                    <TextInput 
                                        icon={<UserCircle size={20}/>} 
                                        id="nama" 
                                        withAsterisk={true}
                                        label="Nama Lengkap"
                                        variant='filled'
                                        placeholder="Moestafa" 
                                    />
                                </div>
                                <div>
                                    <TextInput
                                        icon={<School size={20}/>}
                                        label="Asal Sekolah"
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
                            <div className='flex flex-col row-span-3 p-5 bg-white rounded-md'>
                                <p className="text-[12px] text-black/60">Bukti Pembayaran</p>
                                <div className='flex items-center self-center w-4/5 p-10 my-2 border-2 border-dashed rounded-md cursor-pointer border-dcf-dark-brown h-3/5'>
                                        <FileUpload size={50} strokeWidth={1} color={'#967E76'}/>
                                        <p className='mx-2 text-sm text-dcf-dark-brown'>Klik di sini untuk mengunggah bukti pembayaran</p>
                                </div>
                                <Button type="submit" className="self-center w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Upload Bukti Pembayaran</Button> 
                            </div>
                            <div className='flex flex-col row-span-3 p-5 bg-white rounded-md'>
                                <p className="text-[12px] text-black/60">Status Pembayaran</p>
                                <div className='flex items-center mb-2'>
                                    <CircleX 
                                        size={18}
                                        color='red'/> 
                                    <p className="mx-2 text-sm">Belum Terverifikasi</p>  
                                </div>
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
                    </div> */}
                    {/* pelaksanaan */}
                    <div className="w-full pb-16 p-7">
                        <h2 className="my-2 text-xl font-bold">Kompetisi Kimia</h2>
                        <div className='flex flex-col justify-around h-full'>
                            <div className="flex flex-col h-full p-5 my-4 overflow-hidden bg-white bg-center bg-cover rounded-md lg:my-2">
                                <div className='flex justify-between'>
                                    <p className="text-[12px] text-black/60">Uji Coba </p>
                                    <p className="self-end text-[12px] text-black/60">Due in 8 days</p>    
                                </div>
                                <div className='self-center my-5'>
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
                                        <p className='mx-2'>Apabila terdapat kesulitan atau error bisa hubungi kontak</p>
                                    </div>
                                </div>
                                <Button type="submit" className="self-center w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Ikuti Uji Coba</Button>
                            </div>    
                            <div className="flex flex-col h-full p-5 my-4 overflow-hidden bg-white bg-center bg-cover rounded-md lg:my-2">
                                <div className='flex justify-between'>
                                    <p className="text-[12px] text-black/60">Ujian</p>
                                    <p className="self-end text-[12px] text-black/60">Not started yet</p>    
                                </div>
                                <div className='self-center my-5'>
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
                                        <p className='mx-2'>Apabila terdapat kesulitan atau error bisa hubungi kontak</p>
                                    </div>
                                </div>
                                <Button type="submit" className="self-center w-fit bg-dcf-brown hover:bg-dcf-dark-brown/90">Ikuti Ujian</Button>
                            </div>
                        </div>
                    </div>
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
