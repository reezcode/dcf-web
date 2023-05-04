import { timelineGeneral } from "@/configs/timeline_data";
import Timeline from "./timeline";

interface TimelineProps {
  desc: string;
  timelineData: {
    idx: number;
    title: string;
    viewDate: string;
    startDate: string;
    endDate: string;
  }[];
}


export default function TimelineSection(props: TimelineProps) {
  const { desc, timelineData } = props;
  return (
    <div id="timeline" className="-mt-10">
      <h1 className="p-3 text-2xl font-bold text-center sm:text-4xl m-font">Timeline</h1>
      <p className="px-10 mb-[20px] text-sm text-center pb-9 sm:text-base m-font">
      {desc}          
      </p>
      <Timeline timelineData={timelineData}/>
    </div>
  )
}
