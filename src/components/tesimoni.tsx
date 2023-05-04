import TestiData from "@/configs/testimoni_data";
import { CardTestimoni } from "./card";


export default function TestimoniSection() {
  return (
    <div id="testimoni">
      <h1 className="p-3 mt-24 text-2xl font-bold text-center sm:text-4xl m-font">Testimoni</h1>
      <p className="px-10 text-sm text-center pb-9 sm:text-base m-font">
      Apa kata mereka tentang Diponegoro Chemistry Fair?        
      </p>
      <div className="flex w-full pl-10 mb-24 overflow-x-auto h-fit 3xl:w-fit 3xl:mx-auto">
          {TestiData.map((data) => {
              return <CardTestimoni data={data} key={data.name} />
          })}
      </div>
    </div>
  )
}
