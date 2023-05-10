import React from 'react'
import Sidebar from '@/components/sidebar'
import NavDashboard from '@/configs/navigation_dashboard'
import NavButton from '@/components/nav_button'
import { EmptyLayout } from '@/components/layout'
import { TextInput } from '@mantine/core'
import { At, FileUpload, School, Tex, UserCircle, BrandWhatsapp } from 'tabler-icons-react'
import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

export default function profil() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const router = useRouter();
    return (
        <EmptyLayout pageTitle='Profil'>
            <div className="w-screen bg-center bg-cover h-fit lg:h-screen" style={{
                backgroundImage: "url('../../bgform.svg')",
            }}>
                <div className="flex w-full h-full mb-4 backdrop-blur-3xl">
                    <Sidebar/>
                    <div className="w-full pb-16 h-fit lg:h-screen p-7">
                        <h2 className="my-2 text-xl font-bold">Profil</h2>
                        <div className='flex flex-col h-full grid-cols-2 grid-rows-6 gap-4 md:grid'>
                            <div className='flex items-center w-full h-full px-2 py-4 m-auto bg-white rounded-md grid-span-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 mx-2 text-dcf-dark-brown">
                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                </svg>
                                <div>
                                    <p className='text-sm font-medium'>Rozy Rodriques</p>
                                    <p className='pr-5 text-sm'>kristiandavid644@gmai.com</p>   
                                    <form className='mt-2' onSubmit={() => {
                                        router.push('/');
                                        removeCookie('user');
                                    }} >
                                        <Button type="submit" className="bg-dcf-dark-brown">Log Out</Button>
                                    </form>
                                </div>
                            </div>
                                <div className='row-span-5 row-start-2 p-5 bg-white rounded-md'>
                                    <p className="text-[12px] text-black/60">Profil Peserta</p>
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
                                    <div className='w-1/3 mx-auto my-4'>
                                        <Button type="submit" className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Ubah Data</Button>    
                                    </div>
                                </div>
                            <div className='flex flex-col row-span-3 p-5 bg-white rounded-md'>
                                <p className="text-[12px] text-black/60">Profil Peserta</p>
                                <div className='flex items-center self-center w-4/5 p-10 my-2 border-2 border-dashed rounded-md cursor-pointer border-dcf-dark-brown h-3/5'>
                                        <FileUpload size={50} strokeWidth={1} color={'#967E76'}/>
                                        <p className='mx-2 text-sm text-dcf-dark-brown'>Klik di sini untuk mengunggah kartu identitas</p>
                                </div>
                                <Button type="submit" className="self-center w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Upload Kartu Identitas</Button> 
                            </div>
                            <div className='row-span-3 overflow-auto bg-white bg-cover rounded-md' style={{backgroundImage: "url('../../img5.svg')",}}>
                                <div className="w-full h-full bg-gradient-to-r from-dcf-light-brown from-50% to-dcf-light-brown/30 to-100% p-5 flex flex-col justify-end">
                                    <p className="text-lg font-bold">Diponegoro Chemistry Fair</p>
                                    <p className="w-3/5">The Role of Green Chemistry to Maintain the Sustainable Energy</p>  
                                </div>
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
