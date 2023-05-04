import {Layout} from "@/components/layout";
import HeroData from "@/configs/hero_data";
import Hero from "@/components/hero";
import About from "@/components/about";
import AboutData from "@/configs/about_data";
import SyaratKetentuan from "@/components/syaratketentuan";
import SKData from "@/configs/sk_data";
import NavBar from "@/components/navbar";

export default function Semnas() {
    return (
        <Layout pageTitle="Seminar Nasional | DCF 2023" description="Page Seminar Nasional DCF 2023">
            <Hero data={HeroData[3]}/>
            <About data={AboutData[3]}/>
            <SyaratKetentuan data={SKData[2]}/>
            <div id="timeline" className="-mt-12 lg:mt-20">
                <h1 className="p-3 text-2xl font-bold text-center sm:text-4xl m-font">Timeline</h1>
                <p className="px-10 text-sm text-center pb-9 sm:text-base m-font">
                Timeline Pelaksanaan Rangkaian Acara Seminar Nasional DCF 2023       
                </p>
                <div className="w-[80%] bg-dcf-light-brown h-[100px] mb-[60px] rounded-lg mx-auto flex items-center justify-center shadow-md shadow-dcf-light-brown lg:w-1/4 lg:rounded-xl">
                    <p className="text-xl font-bold m-font">08 Oktober 2023</p>
                </div>
            </div>
            
            <div className='lg:hidden'>
                <NavBar/>
            </div>
        </Layout>
    )
}