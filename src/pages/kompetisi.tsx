import HeroData from "@/configs/hero_data";
import Hero from "@/components/hero";
import About from "@/components/about";
import AboutData from "@/configs/about_data";
import SyaratKetentuan from "@/components/syaratketentuan";
import SKData from "@/configs/sk_data";
import NavBar from "@/components/navbar";
import TimelineSection from "@/components/timeline_section";
import { timelineKompetisi } from "@/configs/timeline_data";
import PrizeSection from "@/components/prize";
import { PrizeKompetisi } from "@/configs/prize_data";
import { Layout } from "@/components/layout";

export default function Kompetisi() {
    return (
        <Layout pageTitle="Kompetisi Kimia | DCF 2023" description="Page Kompetisi Kimia DCF 2023">
            <Hero data={HeroData[1]}/>
            <About data={AboutData[1]}/>
            <SyaratKetentuan data={SKData[0]}/>
            <div className="-mt-12 lg:mt-20">
            <TimelineSection desc="Timeline Pelaksanaan Rangkaian Acara Kompetisi Kimia DCF 2023" timelineData={timelineKompetisi}/>
            </div>
            <PrizeSection dataPrize={PrizeKompetisi}/>
            <div className='lg:hidden'>
                <NavBar/>
            </div>
        </Layout>
    )
}