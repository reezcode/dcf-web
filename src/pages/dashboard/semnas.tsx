import React from 'react'
import Sidebar from '@/components/sidebar'
import NavButton from '@/components/nav_button'
import NavDashboard from '@/configs/navigation_dashboard'
import { TextInput } from '@mantine/core'
import { At, Fingerprint, School, Tex, UserCircle, BrandWhatsapp } from 'tabler-icons-react';
import { Autocomplete } from '@mantine/core'
import { Button } from '@mantine/core'
import { EmptyLayout } from '@/components/layout'


export default function semnas() {
    return (
        <EmptyLayout pageTitle='Seminar Nasional'>
            <div className="bg-center bg-cover lg:w-screen h-fit lg:h-screen" style={{
                backgroundImage: "url('../../bgform.svg')",
            }}>
                <div className="flex w-full h-full mb-4 backdrop-blur-3xl">
                    <Sidebar/>
                    <div className="w-full pb-16 p-7">
                        <h2 className="my-2 text-xl font-bold">Seminar Nasional</h2>
                        <p className="py-2 pl-2 pr-10 my-4 text-sm font-semibold bg-white rounded-md shadow-lg lg:text-base w-fit h-fit shadow-dcf-dark-brown/30">The Role of Green Chemistry to Maintain the Sustainable Energy</p>
                        <div className='flex '>
                            <div className='w-full px-5 py-3 rounded-md shadow-lg h-5/6 bg-white/80 shadow-dcf-dark-brown/30'>
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
                                        placeholder='Masukan Nomor Whatsapp'
                                    />
                                </div>
                                <div className='w-1/3 mx-auto my-3'>
                                    <Button type="submit" className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Daftar</Button>    
                                </div>
                                {/* Setelah Pembayaran */}
                                {/* <div className='flex flex-col'>
                                    <p className='text-lg font-bold text-center'>Terima Kasih Sudah Mendaftar</p>
                                    <p className='text-center'>Silakan masuk ke grup Whatsapp untuk memudahkan komunikasi!</p>
                                    <Button type="submit" className="self-center my-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Grup Whatsapp</Button>
                                </div> */}
                            </div>
                            <div className='hidden w-1/2 p-10 bg-no-repeat bg-contain md:block' style={{backgroundImage: "url('../../mascot2.svg')",}}>
                            </div>
                        </div>
                    </div>
                    
                </div>    
            </div>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 lg:hidden">
                    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                        {NavDashboard.map((data) => {
                            return <NavButton data={data} key={data.title}/>
                        })}
                    </div>
            </div>
        </EmptyLayout>
    )
}
