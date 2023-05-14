import TestiData from "@/configs/testimoni_data";
import { CardTestimoni } from "./card";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

export default function TestimoniSection() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    if (slider == null) return;
    slider.scrollLeft = slider.scrollLeft-450
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    if (slider == null) return;
    slider.scrollLeft = slider.scrollLeft+450
  }
  return (
    <div id="testimoni">
      <h1 className="p-3 mt-24 text-2xl font-bold text-center sm:text-4xl m-font">Testimoni</h1>
      <p className="px-10 text-sm text-center pb-9 sm:text-base m-font">
      Apa kata mereka tentang Diponegoro Chemistry Fair?        
      </p>
      <div className="flex items-center">
        <ChevronLeft onClick={slideLeft} size={40} className="opacity-50 cursor-pointer hover:opacity-100 lg:mx-4"/>
        <div id="slider" className="flex w-full h-full pl-10 mb-24 overflow-x-auto  scrollbar-hide 3xl:w-fit 3xl:mx-auto scroll-smooth">
            
            {TestiData.map((data) => {
                return <CardTestimoni data={data} key={data.name}/>
            })}
        </div>
        <ChevronRight onClick={slideRight} size={40} className="opacity-50 cursor-pointer lg:mx-4 hover:opacity-100"/>  
      </div>
      
    </div>
  )
}
