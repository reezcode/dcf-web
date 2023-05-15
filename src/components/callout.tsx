import { useEffect } from "react"
import { useAnimation,motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface CalloutProps {
  idx: number,
  title: string,
  viewDate: string,
  startDate: string,
  endDate: string,
  isLive: boolean
}

function CalloutU(props: CalloutProps) {
  const {ref, inView} = useInView();
  const animation = useAnimation();
  const { title, viewDate, isLive } = props;
  useEffect(() => {
      if(inView) {
          animation.start({
              y:0,
              opacity:100,
              transition: {duration:0.7,delay:0.1}
          })
      }
      if(!inView) {
          animation.start({ y:-50,opacity:0})
      }
  }, [inView]);
  return (
    <>
      <motion.div ref={ref}
      animate={animation}
      className={`flex flex-col items-center justify-center w-[170px] mb-4 rounded-xl bg-dcf-light-brown px-4 shadow-md shadow-dcf-light-brown hover:scale-105 hover:shadow-lg hover:shadow-dcf-light-brown ease-in-out duration-200 transition-all ${isLive ? 'animate-bounce hover:paused' : ''}`}>
          <h3 className="mb-1 text-sm font-semibold text-center m-font">{title}</h3>
          <p className="text-sm text-center m-font">{viewDate}</p>
          <div className="absolute h-[50px] w-[30px] overflow-y-hidden -rotate-90 mt-28 overflow-clip">
            <div className="absolute w-[50px] h-[50px] left-[20px] bg-dcf-light-brown border-dcf-light-brown rotate-45 border-[10px] rounded-[10px]">
            </div>
          </div>
      </motion.div>
    </>
  )
}

function CalloutD(props: CalloutProps) {
  const { title, viewDate, isLive } = props;
  const {ref, inView} = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if(inView) {
        animation.start({
            y:0,
            opacity:100,
            transition: {duration:0.7,delay:0.1}
        })
    }
    if(!inView) {
        animation.start({ y:50,opacity:0})
    }
  }, [inView]);
  return (
    <>
      <motion.div ref={ref}
      animate={animation}
      className={`flex flex-col items-center justify-center w-[170px] mb-4 rounded-xl bg-dcf-light-brown px-4 shadow-md shadow-dcf-light-brown hover:scale-105 hover:shadow-lg hover:shadow-dcf-light-brown ease-in-out duration-200 transition-all ${isLive ? 'animate-bounce hover:paused' : ''}`}>
          <h3 className="mb-1 text-sm font-semibold text-center m-font">{title}</h3>
          <p className="text-sm text-center m-font">{viewDate}</p>
          <div className="absolute h-[50px] w-[30px] overflow-y-hidden rotate-90 mb-28 overflow-clip">
            <div className="absolute w-[50px] h-[50px] left-[20px] bg-dcf-light-brown border-dcf-light-brown rotate-45 border-[10px] rounded-[10px]">
            </div>
          </div>
      </motion.div>
    </>
  )
}


function CalloutR(props: CalloutProps) {
  const { title, viewDate } = props;
  const {ref, inView} = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if(inView) {
        animation.start({
            y:0,
            opacity:100,
            transition: {duration:0.7,delay:0.1}
        })
    }
    if(!inView) {
        animation.start({ y:50,opacity:0})
    }
  }, [inView]);
  return (
    <>
      <div className="mt-[110px]"></div>
      <motion.div ref={ref}
      animate={animation}
      className="w-full md:w-11/12 h-[110px] flex flex-col justify-center shadow-md shadow-dcf-light-brown px-5 items-center bg-dcf-light-brown rounded-b-full rounded-tl-full">
          <h3 className="mb-1 text-[13px] font-semibold text-center sm:text-base m-font">{title}</h3>
          <p className="text-[12px] text-center m-font sm:text-sm">{viewDate}</p>
      </motion.div>
    </>
  )
}

function CalloutL(props: CalloutProps) {
  const { title, viewDate } = props;
  const {ref, inView} = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if(inView) {
        animation.start({
            y:0,
            opacity:100,
            transition: {duration:0.7,delay:0.1}
        })
    }
    if(!inView) {
        animation.start({ y:50,opacity:0})
    }
  }, [inView]);
  return (
    <>
      <div className="mt-[0px]"></div>
      <motion.div ref={ref}
      animate={animation}
      className="w-full md:w-11/12 h-[110px] flex flex-col justify-center shadow-md shadow-dcf-light-brown px-5 items-center bg-dcf-light-brown rounded-b-full rounded-tr-full">
          <h3 className="mb-1 text-[13px] font-semibold text-center m-font sm:text-base">{title}</h3>
          <p className="text-[12px] text-center m-font sm:text-sm">{viewDate}</p>
      </motion.div>
    </>
  )
}

export { CalloutR, CalloutL, CalloutU, CalloutD }

