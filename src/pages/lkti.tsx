import {Layout} from "@/components/layout";
import HeroData from "@/configs/hero_data";
import Hero from "@/components/hero";
import About from "@/components/about";
import AboutData from "@/configs/about_data";
import SyaratKetentuan from "@/components/syaratketentuan";
import SKData from "@/configs/sk_data";
import NavBar from "@/components/navbar";
import TimelineSection from "@/components/timeline_section";
import { timelineLkti } from "@/configs/timeline_data";
import PrizeSection from "@/components/prize";
import { PrizeLkti } from "@/configs/prize_data";

export default function Lkti() {
    return (
        <Layout pageTitle="LKTI | DCF 2023" description="Page LKTI DCF 2023">
            <Hero data={HeroData[2]}/>
            <About data={AboutData[2]}/>
            <SyaratKetentuan data={SKData[1]}/>
            <div className="-mt-12 lg:mt-20">
            <TimelineSection desc="Timeline Pelaksanaan Rangkaian Acara LKTI DCF 2023" timelineData={timelineLkti}/>
            </div>
            <PrizeSection dataPrize={PrizeLkti}/>
            <div className='lg:hidden'>
                <NavBar/>
            </div>
        </Layout>
    )
}