import { CalloutR, CalloutL, CalloutU, CalloutD } from "./callout"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const curDate = new Date()

function checkLive (sdate: string, edate: string, date: Date) {
    const start = new Date(sdate);
    const end = new Date(edate);
    if (date > start && date < end) {
        return true
    } else {
        return false
    }
}
interface TimelineProps {
    timelineData: {
        idx: number;
        title: string;
        viewDate: string;
        startDate: string;
        endDate: string;
    }[];
    }
    
export default function Timeline({ timelineData }: TimelineProps) {
    const count = timelineData.length;
    function bullet(){
        const bulletCount = count-2
        const content = []
        for(let i=1; i<=bulletCount; i++){
            content.push(<div className="w-8 h-8 rounded-full bg-dcf-brown"></div>)
        }
        return content
    }
    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start({
                y:0,
                opacity:100,
                transition: {duration:0.7}
            })
        }
        if(!inView) {
            animation.start({y:100, opacity:0})
        }
    }, [inView]);
    return (
    <motion.div ref={ref}
    className="flex flex-row justify-between w-full px-10 lg:px-20 mb-20 columns-3 lg:h-[250px] lg:items-center lg:flex-col">
        <div className="flex flex-col items-end justify-between w-2/5 lg:hidden">
            <div className="-mt-[110px]"></div>
            {timelineData.map((data) => {
                if (data.idx % 2 == 1) {
                    return (
                        <CalloutR
                            key={data.idx}
                            idx={data.idx}
                            title={data.title}
                            viewDate={data.viewDate}
                            startDate={data.startDate}
                            endDate={data.endDate}
                            isLive={false}
                        />
                    )
                }
            })}
        </div>

        {/* When Large Display */}
        <div className="hidden lg:w-full lg:justify-between lg:flex-row lg:flex h-2/5 ">
          {timelineData.map((data) => {
                if (data.idx % 2 == 1) {
                    return (
                        <CalloutU
                            key={data.idx}
                            idx={data.idx}
                            title={data.title}
                            viewDate={data.viewDate}
                            startDate={data.startDate}
                            endDate={data.endDate}
                            isLive={checkLive(data.startDate, data.endDate, curDate)}
                        />
                    )
                }
            })}
        </div>

        <div className="flex justify-center w-1/5 h-[700px] lg:w-full lg:h-1/5 lg:items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between w-1/12 rounded-full lg:w-full lg:h-[12px] lg:mx-16 bg-dcf-light-brown">
                <div className="w-10 h-10 rounded-full bg-dcf-dark-brown"></div>
                {bullet()}
                <div className="w-10 h-10 rounded-full bg-dcf-dark-brown"></div>
            </div>
        </div>

        {/* When Large Display */}
        <div className="hidden lg:flex lg:w-full lg:h-2/5">
          <div className="hidden h-full lg:w-full lg:justify-between lg:flex-row lg:flex lg:mt-[15px] lg:px-10">
            {timelineData.map((data) => {
                if (data.idx % 2 == 0) {
                    return (
                        <CalloutD
                            key={data.idx}
                            idx={data.idx}
                            title={data.title}
                            viewDate={data.viewDate}
                            startDate={data.startDate}
                            endDate={data.endDate}
                            isLive={checkLive(data.startDate, data.endDate, curDate)}
                        />
                    )
                } else {
                    return (
                      <div className="opacity-0 w-[100px]">
                        
                      </div>
                    )
                }
              })}
          </div>
        </div>

        <div className="flex flex-col items-start w-2/5 justify-evenly lg:hidden">
            <div className="-mt-[80px]"></div>
            {timelineData.map((data) => {
                    if (data.idx % 2 == 0) {
                        return (
                            <CalloutL
                                key={data.idx}
                                idx={data.idx}
                                title={data.title}
                                viewDate={data.viewDate}
                                startDate={data.startDate}
                                endDate={data.endDate}
                                isLive={false}
                            />
                        )
                    } 
            })}
        </div>
    </motion.div>
  )
}
