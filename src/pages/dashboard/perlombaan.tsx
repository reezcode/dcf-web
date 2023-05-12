import React from 'react'
import Sidebar from '@/components/sidebar'
import NavButton from '@/components/nav_button'
import NavDashboard from '@/configs/navigation_dashboard'
import Buttons from '@/components/buttons'
import { EmptyLayout } from '@/components/layout'

export default function perlombaan() {
    return (
        <EmptyLayout pageTitle='Perlombaan'>
            <div className="bg-center bg-auto lg:w-screen lg:h-screen h-fit " style={{
                backgroundImage: "url('../../bgform.svg')",
            }}>
                <div className="flex w-full h-full mb-10 backdrop-blur-3xl">
                    <Sidebar/>
                    <div className="w-full pb-16 p-7">
                        <h2 className="my-2 text-xl font-bold">Perlombaan</h2>
                        <div className='flex flex-col justify-around h-full'>
                            <div className="h-full my-4 overflow-hidden bg-center bg-cover rounded-md shadow-lg bg-dcf-light-brown lg:my-2 shadow-dcf-dark-brown/30" style={{backgroundImage: "url('../../kompetisi.svg')",}}>
                                <div className="w-full h-full bg-gradient-to-r from-dcf-light-brown from-50% to-dcf-light-brown/30 to-100% p-5 flex flex-col justify-end overflow-hidden">
                                    <h1 className="px-4 font-semibold">Kompetisi Kimia</h1>
                                    <a href='/' className='px-4 py-2 duration-300 ease-in-out rounded-full w-fit hover:text-dcf-dark-brown/90 hover:bg-dcf-brown/50'>Lihat Soal Tahun Lalu Disini</a>
                                    <p className="w-3/5 px-4 pb-2 text-dcf-dark-brown ">The Role of Green Chemistry to Maintain the Sustainable Energy</p>
                                    
                                    <div className='flex'>
                                        <Buttons text='Daftar' link='/dashboard/kompetisi'/>
                                        <Buttons text='Panduan' link=''/>
                                        <Buttons text='Juknis' link=''/>
                                        
                                    </div>  
                                    
                                </div>
                            </div>    
                            <div className="h-full my-4 overflow-hidden bg-center bg-cover rounded-md shadow-lg bg-dcf-light-brown lg:my-2 shadow-dcf-dark-brown/30" style={{backgroundImage: "url('../../lkti.svg')",}}>
                                <div className="w-full h-full bg-gradient-to-r from-dcf-light-brown from-50% to-dcf-light-brown/30 to-100% p-5 flex flex-col justify-end overflow-hidden">
                                    <h1 className="px-4 font-semibold">Lomba Karya Tulis Ilmiah</h1>
                                    <p className="w-3/5 px-4 pb-2">The Role of Green Chemistry to Maintain the Sustainable Energy</p>
                                    <div className='flex'>
                                        <Buttons text='Daftar' link='/dashboard/lkti'/>
                                        <Buttons text='Panduan' link=''/>
                                        <Buttons text='Juknis' link=''/>
                                    </div>  
                                </div>
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
