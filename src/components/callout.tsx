interface CalloutProps {
  idx: number,
  title: string,
  viewDate: string,
  startDate: string,
  endDate: string,
  isLive: boolean
}

function CalloutU(props: CalloutProps) {
  const { title, viewDate, isLive } = props;
  return (
    <>
      <div className={`flex flex-col items-center justify-center w-[170px] mb-4 rounded-xl bg-dcf-light-brown px-4 shadow-md shadow-dcf-light-brown hover:scale-105 hover:shadow-lg hover:shadow-dcf-light-brown ease-in-out duration-200 transition-all ${isLive ? 'animate-bounce hover:paused' : ''}`}>
          <h3 className="mb-1 text-sm font-semibold text-center m-font">{title}</h3>
          <p className="text-sm text-center m-font">{viewDate}</p>
          <div className="absolute h-[50px] w-[30px] overflow-y-hidden -rotate-90 mt-28 overflow-clip">
            <div className="absolute w-[50px] h-[50px] left-[20px] bg-dcf-light-brown border-dcf-light-brown rotate-45 border-[10px] rounded-[10px]">
            </div>
          </div>
      </div>
    </>
  )
}

function CalloutD(props: CalloutProps) {
  const { title, viewDate, isLive } = props;
  return (
    <>
      <div className={`flex flex-col items-center justify-center w-[170px] mb-4 rounded-xl bg-dcf-light-brown px-4 shadow-md shadow-dcf-light-brown hover:scale-105 hover:shadow-lg hover:shadow-dcf-light-brown ease-in-out duration-200 transition-all ${isLive ? 'animate-bounce hover:paused' : ''}`}>
          <h3 className="mb-1 text-sm font-semibold text-center m-font">{title}</h3>
          <p className="text-sm text-center m-font">{viewDate}</p>
          <div className="absolute h-[50px] w-[30px] overflow-y-hidden rotate-90 mb-28 overflow-clip">
            <div className="absolute w-[50px] h-[50px] left-[20px] bg-dcf-light-brown border-dcf-light-brown rotate-45 border-[10px] rounded-[10px]">
            </div>
          </div>
      </div>
    </>
  )
}


function CalloutR(props: CalloutProps) {
  const { title, viewDate } = props;
  return (
    <>
      <div className="mt-[110px]"></div>
      <div className="w-full md:w-11/12 h-[110px] flex flex-col justify-center shadow-md shadow-dcf-light-brown px-5 items-center bg-dcf-light-brown rounded-b-full rounded-tl-full">
          <h3 className="mb-1 text-[13px] font-semibold text-center sm:text-base m-font">{title}</h3>
          <p className="text-[12px] text-center m-font sm:text-sm">{viewDate}</p>
      </div>
    </>
  )
}

function CalloutL(props: CalloutProps) {
  const { title, viewDate } = props;
  return (
    <>
      <div className="mt-[0px]"></div>
      <div className="w-full md:w-11/12 h-[110px] flex flex-col justify-center shadow-md shadow-dcf-light-brown px-5 items-center bg-dcf-light-brown rounded-b-full rounded-tr-full">
          <h3 className="mb-1 text-[13px] font-semibold text-center m-font sm:text-base">{title}</h3>
          <p className="text-[12px] text-center m-font sm:text-sm">{viewDate}</p>
      </div>
    </>
  )
}

export { CalloutR, CalloutL, CalloutU, CalloutD }

