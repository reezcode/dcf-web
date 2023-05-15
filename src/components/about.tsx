import Arrow from "./arrow"
import Buttons from "./buttons"
import AboutData from "@/configs/about_data";
import {motion, useAnimate, useAnimation} from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AboutData = {
    title: string;
    desc: string;
    text: string;
    topic?: string;
}

type AboutProps = {
    data: AboutData;
}

export default function About({data} : AboutProps) {
    const {title,desc,text, topic} = data;
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
            animation.start({y:-100, opacity:0})
        }
    }, [inView]);
    return (
        <motion.div ref={ref}
        animate={animation}
        className="w-full h-fit rounded-[20px] sm:rounded-[40px] relative top-[-40px] bg-white px-10 lg:px-44 text-sm sm:text-base shadow-[0_-22px_40px_#967E7610]" id="about" data-aos="fade-up">
            <Arrow children="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" link="#about"/>
            <div>
                <h1 className="py-3 text-2xl font-bold text-center sm:text-4xl m-font">{title}</h1>
                <p className="text-center m-font">
                    {desc}
                    <span className='font-bold text-dcf-dark-brown m-font'> 
                        {topic}
                    </span>
                </p>
                
            </div>
            <div className="flex justify-center p-5">
                < Buttons link='#' text={text}/>
            </div>
        </motion.div>
    )
}