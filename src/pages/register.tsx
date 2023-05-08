import Image from "next/image";
import { EmptyLayout } from "@/components/layout";
import { RegistrationForm } from "@/components/form";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
interface SekolahProps {
    dataSekolah: Array<any>;
}

export default function register({dataSekolah}:SekolahProps) {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const router = useRouter();
    useEffect(()=> {
        if(cookies.user) {
            router.replace('/dashboard');
        }
    }, [cookies]);
    return (
        <EmptyLayout pageTitle="Register">
        <div className="w-screen h-screen bg-center bg-cover" style={{
            backgroundImage: "url('../../bgform.svg')",
        }}>
            <div className="flex items-center justify-center w-full h-full backdrop-blur-3xl">
                <div className="flex flex-col justify-center w-11/12 p-10 bg-white rounded-lg shadow-xl md:w-5/12 h-fit xl:w-2/5">
                    <div className="flex flex-col items-center justify-center w-full h-fit">
                        <Image src={"../../logo-dcf.svg"} width={100} height={100} alt="Logo DCF"/>
                        <h1 className="mt-2 text-lg font-bold m-font">Start your Journey!</h1>
                    </div>
                    <RegistrationForm dataSekolah={dataSekolah}/>
                </div>
            </div>
        </div>
        </EmptyLayout>
    )
}

export async function getStaticProps() {
    const resSMK = await fetch('https://api-sekolah-indonesia.vercel.app/sekolah/SMK?provinsi=030000&page=1&perPage=10000');
    const resSMA = await fetch('https://api-sekolah-indonesia.vercel.app/sekolah/SMA?provinsi=030000&page=1&perPage=10000');
    const dataSMA = await resSMA.json();
    const dataSMK = await resSMK.json();
    const dataMappedSMA = dataSMA.dataSekolah;
    const dataSekolahSMA = dataMappedSMA.map((item:any) => {return item.sekolah});
    const dataMappedSMK = dataSMK.dataSekolah;
    const dataSekolahSMK = dataMappedSMK.map((item:any) => {return item.sekolah});
    const dataSekolah = [].concat(dataSekolahSMA, dataSekolahSMK);
  return {
    props: {
        dataSekolah
    }
  }
}
