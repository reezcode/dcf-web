import EventData from "@/configs/event_data";
import { Card } from "./card";
import {motion,useAnimation} from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function EventSection() {
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
    animate={animation}
    id="event">
      <h1 className="p-3 text-2xl font-bold text-center sm:text-4xl m-font">Events</h1>
      <p className="px-10 text-sm text-center pb-9 sm:text-base m-font">
        Diponegoro Chemistry Fair 2023 terdiri dari 3 rangkaian acara yaitu Kompetisi Kimia, LKTI, dan Seminar Nasional              
      </p>
      <div className="container flex flex-col items-center mx-auto mb-[40px] xl:justify-evenly xl:columns-3 xl:flex-row">
          {EventData.map((data)=> {
              return <Card data={data} key={data.title}/>
          })}
      </div>
    </motion.div>
    
  )
}
