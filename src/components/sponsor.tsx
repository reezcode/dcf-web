interface SponsorProps {
    data: {
        imgUrl: string;
    }
}

export default function Sponsor(props:SponsorProps) {
    const {data} = props;
    return (
        <div className="w-[150px] h-[60px] bg-dcf-brown rounded-lg m-2 flex justify-center items-center hover:scale-110 ease-in-out duration-300 hover:paused cursor-pointer hover:shadow-lg hover:shadow-dcf-dark-brown/30">
            <img src={data.imgUrl} alt="" className="h-3/5"/>
        </div>
    )
}