import { PrizeKompetisi } from "@/configs/prize_data";
import { CardPrize } from "./card";

interface PrizeProps {
    dataPrize: {
        imgUrl: string;
        title: string;
        nominal: string;
        hadiah: string;
    }[];
}

export default function PrizeSection(props: PrizeProps) {
    const { dataPrize } = props;
  return (
    <div id="timeline" className="-mt-10">
      <h1 className="p-3 text-2xl font-bold text-center sm:text-4xl m-font">Prize</h1>
      <p className="px-10 mb-[20px] text-sm text-center pb-9 sm:text-base m-font">
      Hadiah bagi para pemenang lomba       
      </p>
    <>
    <div className="container flex items-center justify-center mx-auto ">
    <CardPrize data={dataPrize[0]}/>
    </div>
    <div className="container flex flex-col items-center mx-auto mb-10 lg:grid lg:gap-2 lg:grid-cols-2 lg:grid-rows-2 lg:mt-5">
        {dataPrize.map((data) => {
            if(data.title != "Juara 1"){
                return <CardPrize data={data} key={data.title}/>
            }
        })}
    </div>
    </>
    </div>
  )
}
