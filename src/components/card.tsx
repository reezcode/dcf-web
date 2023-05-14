import { Url } from "next/dist/shared/lib/router/router";
import Buttons from "./buttons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface CardProps{
    data: {
        imgUrl: string;
        title: string;
        desc: string;
        link: Url;
    }
}

interface TestimoniProps{
    data: {
        imgUrl: string;
        name: string;
        work: string; // work or school
        ig: string;
        title: string;
        peek: string;
        more?: string;
        content: JSX.Element;
    }
}

interface PrizeProps{
  data: {
    imgUrl: string;
    title: string;
    nominal: string;
    hadiah: string;
  }
}

function CardPrize(props: PrizeProps){
    const { data } = props;
    return (
        <div className="flex-none w-11/12 shadow-lg h-fit m-font rounded-xl bg-dcf-light-brown lg:w-[400px] lg:h-fit mb-10 lg:mx-auto">
            <div className="flex flex-col items-center justify-center p-10">
                <Image src={''+data.imgUrl} width={75} height={75} alt="photo" className="rounded-full"/>
                <h3 className="mt-3 font-bold text-center">{data.title}</h3>
                <Link href={''} className="bg-dcf-dark-brown text-center mt-3 font-semibold m-font h-[35px] rounded-full px-5 py-1 text-white mx-2 my-1 hover:bg-dcf-dark-brown/80 hover:font-semibold text-base ease-in-out duration-300">{data.nominal}</Link>
                <div className="justify-between mt-3 text-sm text-justify">
                    <p>{data.hadiah}</p>
                </div>
            </div>
        </div>
    )
}

function CardTestimoni(props: TestimoniProps){
    const { data } = props;
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div onClick={() => setShowModal(!showModal)}  className="flex-none w-11/12 mr-10 shadow-lg h-fit m-font rounded-xl bg-dcf-light-brown lg:w-[400px] lg:h-[560px] ">
            <div className="flex flex-col items-center justify-center p-10">
                <Image src={''+data.imgUrl} width={75} height={75} alt="photo" className="rounded-full"/>
                <h3 className="mt-3 font-bold text-center">{data.name}</h3>
                <Link href={`https://instagram.com/${data.ig}`} className="mb-1 text-sm text-center text-dcf-dark-brown">{data.ig}</Link>
                <p className="mb-3">{data.work}</p>
                <Link href={''} className="bg-dcf-dark-brown text-center font-semibold m-font h-[35px] rounded-full px-5 py-1 text-white mx-2 my-1 hover:bg-dcf-dark-brown/80 hover:font-semibold text-base ease-in-out duration-300">{data.title}</Link>
                <div className="justify-between mt-5 text-sm text-justify">
                    <p>{data.peek} <span className="font-bold text-dcf-dark-brown">{data.more}</span></p>                    
                </div>
            </div>
        </div>
        {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none m-font focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-2xl font-semibold">
                    Detail Testimoni
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative flex flex-col items-center justify-center p-6">
                    <Image src={''+data.imgUrl} width={75} height={75} alt="photo" className="rounded-full"/>
                    <h3 className="mt-3 font-bold text-center">{data.name}</h3>
                    <Link href={`https://instagram.com/${data.ig}`} className="mb-1 text-sm text-center text-dcf-dark-brown">{data.ig}</Link>
                    <p className="mb-3">{data.work}</p>
                    <Link href={''} className="bg-dcf-dark-brown text-center font-semibold m-font h-[35px] rounded-full px-5 py-1 text-white mx-2 my-1 hover:bg-dcf-dark-brown/80 hover:font-semibold text-base ease-in-out duration-300">{data.title}</Link>
                    <div className="justify-between mt-5 text-sm text-justify">
                        {data.content}
                    </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded shadow outline-none active:bg-red-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
        </>
    )
}

function Card(props: CardProps) {
    const {data} = props;
  return (
    <div className="w-11/12 h-[350px] mb-10 xl:w-[360px] xl:h-[585px] bg-dcf-brown rounded-xl shadow-lg  bg-cover bg-center bg-no-repeat shadow-[#967E7640] cursor-pointer ease-in-out duration-300 hover:shadow-xl hover:scale-105 hover:shadow-dcf-light-brown" 
    style={{
        backgroundImage: "url(" + data.imgUrl + ")",
    }}>
       <div className="flex flex-col w-full h-full rounded-xl bg-gradient-to-t from-dcf-brown from-25% to-transparent">
        <div className="flex flex-col items-center w-full px-8 mt-auto mb-8">
            <h3 className="text-xl font-bold text-center mb-[9px]">{data.title}</h3>
            <p className="text-center mb-[22px]">{data.desc}</p>
            <Buttons link={data.link} text="Detail"/>
        </div>
       </div>
    </div>
  )
}


export { Card, CardTestimoni, CardPrize } 