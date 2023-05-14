import Buttons from "./buttons";
import HeroData from "@/configs/hero_data";
import { Url } from "next/dist/shared/lib/router/router";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type HeroData = {
    title: string;
    desc: string;
    button: {
        text: string;
        link: Url;
    }[];
};

type HeroProps = {
    data: HeroData;
};

export default function Hero({ data }: HeroProps) {
    const { title, desc, button } = data;
    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start({
                opacity:0,
                transition: {duration:0.5}
            })
        }
        if(!inView) {
            // animation.start({opacity:100})
        }
    }, [inView]);
    return (
        <motion.div 
        animate={animation}
        className="w-full h-[600px] sm:h-[450px] xl:h-[500px] bg-dcf-light-brown">
            <div className="flex flex-col items-center justify-between w-full h-full pb-20 overflow-hidden sm:flex-row">
                <div className="sm:w-2/3 sm:pl-10">
                    <div className="px-5 pt-5">
                        <h1 className="p-3 text-3xl font-extrabold text-center text-transparent sm:leading-[1.2] leading-1 sm:p-5 sm:text-5xl sm:text-left m-font bg-gradient-to-br from-slate-900 to-stone-500 bg-clip-text">
                            {title}
                        </h1>
                        <p className="px-5 text-sm text-center m-font sm:text-left sm:text-base lg:w-3/5">
                            {desc} 
                        </p>
                    </div>
                    <div className="flex flex-col justify-center p-5 px-20 sm:flex-row sm:px-5 sm:justify-start">
                        {button.map((button, index) => (
                            <Buttons key={index} link={button.link} text={button.text} />
                        ))}
                    </div>
                </div>
                <img src="../../mascot.svg" alt="" className="self-end md:mt-10 w-80 sm:w-1/3 xl:w-[500px] sm:self-center"/>
            </div>
        </motion.div>

    )
}