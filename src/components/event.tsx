import EventData from "@/configs/event_data";
import { Card } from "./card";
import {motion} from "framer-motion"

export default function EventSection() {
  return (
    <motion.div 
    variants={{
      hidden : {opacity:0,y:75},
      visible : {opacity:1,y:0}
    }}
    initial="hidden"
    animate="visible"
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
