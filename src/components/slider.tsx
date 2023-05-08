import Sponsor from "./sponsor";
import SponsorData from "@/configs/sponsor_data";
import Buttons from "./buttons";

export default function Slider() {
    return (
        // <div className="whitespace-nowrap overflow-hidden flex py-5">
        //     <div className="flex animate-autoscroll  hover:paused">
        //         {SponsorData.map((data)=> {
        //             return <Sponsor data={data}/>
        //         })}
        //     </div>
        //     <div className="flex animate-autoscroll  hover:paused">
        //         {SponsorData.map((data)=> {
        //             return <Sponsor data={data}/>
        //         })}
        //     </div>
            
        // </div>
        <div className="text-center bg-dcf-dark-brown/40 p-5 rounded-[20px] hover:bg-dcf-dark-brown/30 hover:scale-105 duration-300">
            <h1 className="font-bold">We're looking for sponsors!</h1>
            <p className="p-2 pb-5">If interested, please contact</p>
            <a href="https://wa.me/6285228430299" className="bg-dcf-dark-brown hover:bg-dcf-dark-brown/80 px-5 py-2 rounded-full text-white font-semibold" target="__blank">Nailis (Whatsapp)</a>
        </div>
    )
}
