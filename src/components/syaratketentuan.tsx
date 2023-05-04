import { Url } from "next/dist/shared/lib/router/router";
import Buttons from "./buttons"
import SKData from "@/configs/sk_data"
import Link from "next/link";

type SKData = {
    title: string;
    type: string;
    skOrBenefit?: Array<string>;
    button?: {
        text: string;
        link: Url;
    }[];
    harga: string;
    regist: string;
}

type SKProps = {
    data: SKData;
}

export default function SyaratKetentuan({data}:SKProps) {
    const { title, type, skOrBenefit, button, harga, regist } = data;
    return (
        <div className="mb-12" id="sk">
            <h1 className="p-3 text-2xl font-bold text-center sm:text-4xl">{title}</h1>
            <p className="px-10 pb-5 text-sm text-center lg:pb-0 sm:text-base">
                {title} dalam mengikuti {type} DCF 2023 adalah sebagai berikut           
            </p>
            <div className="flex flex-col items-center my-5 md:justify-center md:h-fit lg:flex-row">
                <div className="w-11/12 lg:w-[400px] h-[300px] lg:h-[400px] overflow-hidden bg-dcf-blue rounded-[20px] p-3 mx-5 shadow-xl shadow-dcf-light-brown/50 hover:shadow-dcf-light-brown/80 duration-300 hover:scale-105 cursor-pointer">
                    
                </div>
                <div className="flex flex-col w-full mx-5 p-9 lg:w-2/5 md:flex-row lg:flex-col">
                    <div className="px-3 text-sm lg:text-base">
                        {skOrBenefit?.map((data)=> (
                            <div>
                                <p className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4 mt-1 mr-3 text-green-500 lg:w-5 lg:h-5 shrink-0">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                    {data}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="flex justify-center my-5 md:justify-start md:m-0 md:mb-5 lg:my-5">
                            {button?.map((button, index) => (
                                <Buttons key={index} link={button.link} text={button.text} />
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-between px-3 lg:flex-row">
                            <div>
                                <p className="text-sm font-bold text-center lg:text-left">Biaya Pendaftaran</p>
                                <p className="text-lg text-center lg:text-left" >{harga}</p>
                            </div>
                            <Link href={regist}>
                                <button className="self-center py-2 m-3 font-semibold duration-300 shadow-xl bg-dcf-light-brown md:w-min px-9 rounded-xl hover:bg-dcf-light-brown/80 hover:scale-105 shadow-dcf-light-brown/50 hover:shadow-dcf-light-brown/80 hover:text-dcf-dark-brown">Daftar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}