import Sponsor from "./sponsor";
import SponsorData from "@/configs/sponsor_data";

export default function Slider() {
    return (
        <div className="whitespace-nowrap overflow-hidden flex py-5">
            <div className="flex animate-autoscroll  hover:paused">
                {SponsorData.map((data)=> {
                    return <Sponsor data={data}/>
                })}
            </div>
            <div className="flex animate-autoscroll  hover:paused">
                {SponsorData.map((data)=> {
                    return <Sponsor data={data}/>
                })}
            </div>
        </div>
    )
}