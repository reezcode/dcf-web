import Link from 'next/link'
import Buttons from './buttons'
import Logo from './logo'
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const data = cookies.user;
    useEffect(()=> {
        setIsLoggedIn(data != undefined);
    })
    return (
    <>
        <nav className='flex justify-between py-4'>
            <Logo />
            <div className='flex'>
                <ul className='hidden list-none rounded-full opacity-0 lg:flex bg-sky-100/20 md:opacity-100'>
                    <li className='md:mx-2 p-1.5 hover:bg-dcf-light-brown/40 rounded-full px-5 font-semibold m-font hover:text-dcf-dark-brown ease-in-out duration-300 self-center'><Link href="/">Home</Link></li>
                    <li className='md:mx-2 p-1.5 hover:bg-dcf-light-brown/40 rounded-full px-5 font-semibold m-font hover:text-dcf-dark-brown ease-in-out duration-300 self-center'><Link href="/#about">About</Link></li>
                    <li className='md:mx-2 p-1.5 hover:bg-dcf-light-brown/40 rounded-full px-5 font-semibold m-font hover:text-dcf-dark-brown ease-in-out duration-300 self-center'><Link href="/#event">Event</Link></li>
                    <li className='md:mx-2 p-1.5 hover:bg-dcf-light-brown/40 rounded-full px-5 font-semibold m-font hover:text-dcf-dark-brown ease-in-out duration-300 self-center'><Link href="/#timeline">Timeline</Link></li>
                    <li className='md:mx-2 py-1.5 hover:bg-dcf-light-brown/40 rounded-full px-5 font-semibold m-font hover:text-dcf-dark-brown ease-in-out duration-300 self-center'><Link href="/#testimoni">Testimoni</Link></li>
                </ul>
                <Buttons link={(isLoggedIn) ? '/dashboard' : '/login'} text={(isLoggedIn) ? "Dashboard" : "Login"}/>
            </div>
        </nav>
    </>
    );
}