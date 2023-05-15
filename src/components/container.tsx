import Slider from "./slider";
import {useEffect} from "react";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer";

export default function Container() {
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
        className="lg:w-3/5 h-fit m-auto p-5 pb-20 sm:p-10 bg-dcf-light-brown rounded-t-[20px] sm:rounded-t-[40px]  overflow-hidden ">
            <h1 className="p-2 text-2xl font-bold text-center sm:text-4xl m-font">Video Teaser</h1>
            <p className="px-5 pb-5 text-sm text-center sm:text-base m-font">Video Teaser Diponegoro Chemistry Fair 2023</p>
            <div className="m-auto w-4/5 mt-5 mb-10 rounded-[20px] overflow-hidden shadow-xl  shadow-dcf-brown/50 hover:shadow-dcf-dark-brown/50 duration-300 hover:scale-105">
                <ReactPlayer url='https://youtu.be/o2bF-5zRdEk' width='100%' controls light/>
            </div>
            <h1 className="p-2 text-2xl font-bold text-center sm:text-4xl m-font">Sponsored By</h1>
            <div>
                <p className="px-5 pb-5 text-sm text-center sm:text-base m-font">Rangkaian Acara Diponegoro Chemistry Fair 2023 Disponsori oleh</p>
                <Slider />
            </div>
        </motion.div>
    )
}