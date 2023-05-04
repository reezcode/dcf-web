
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface ArrowProps {
    children: string;
    link: Url;
}

export default function Arrow(props: ArrowProps) {
    const {children,link} = props;
    return (
        <div className="w-[40px] h-[40px] bg-dcf-dark-brown m-auto rounded-full relative top-[-15px] flex justify-center items-center animate-bounce ease-in">
            <Link href={link}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white">
                    <path stroke-linecap='round' stroke-linejoin='round' d={children} />
                </svg>
            </Link>
            
        </div>
    )
}
