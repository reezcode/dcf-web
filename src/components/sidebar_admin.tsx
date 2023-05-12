import React from 'react'
import { EmptyLayout } from './layout'
import Link from 'next/link'
import { BackgroundImage } from '@mantine/core'
import { Home, Puzzle, Book2, School } from 'tabler-icons-react'

export default function SidebarAdmin() {
    return (
        <div className='flex-col items-center hidden w-1/4 h-screen p-10 mb-20 bg-white lg:mb-0 lg:flex'>
            <img src="../../logo-dcf.svg" alt="" className='w-3/5 px-5 py-2 rounded-md bg-dcf-brown/60'/>
            <div>
                <div className='flex items-center px-2 py-3 m-auto my-10 rounded-md w-6/7 items bg-dcf-light-brown/60 h-[70px]'>
                    <div className='h-full w-[40px] bg-cover mx-3' style={{backgroundImage: "url('../../mascot2.svg')",}}>
                    </div>
                    <div>
                        <p className='text-sm font-medium'>Askari</p>
                        <p className='pr-5 text-sm'>Admin DCF 2023</p>    
                    </div>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link href="/admin" className="flex items-center p-2 my-3 rounded-full hover:bg-dcf-light-brown/60">
                                <Home strokeWidth={1.5} className='mx-2'/>
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link href='/admin/kompetisi' className='flex items-center p-2 my-3 rounded-full hover:bg-dcf-light-brown/60'>
                                <Puzzle strokeWidth={1.5} className='mx-2'/>
                                Kompetisi
                            </Link>
                        </li>
                        <li>
                            <Link href='/admin/lkti' className='flex items-center p-2 my-3 rounded-full hover:bg-dcf-light-brown/60'>
                                <Book2 strokeWidth={1.5} className="mx-2"/>
                                LKTI
                            </Link>
                        </li>
                        <li>
                            <Link href='/admin/seminar' className='flex items-center p-2 my-3 rounded-full hover:bg-dcf-light-brown/60'>
                                <School strokeWidth={1.5} className="mx-2"/>
                                Seminar
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
