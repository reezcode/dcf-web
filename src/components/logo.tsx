import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/" className="w-fit p-2 h-[35px] sm:h-[40px] bg-dcf-blue/50 rounded-full mx-2 my-1 sm:mx-4 flex hover:bg-dcf-blue/40 cursor-pointer ease-in-out duration-300">
            <img src="../../logo-dcf.svg" alt="" className="mx-1 sm:mx-3"/>
            <img src="../../logo-hmk.svg" alt="" className="mx-1 sm:mx-3"/>
            <img src="../../logo-undip.svg" alt="" className="mx-1 sm:mx-3"/>
        </Link>
    )
}