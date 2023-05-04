import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router";

interface ButtonProps {
  link: Url;
  text: string;
  pageTitle?: string;
}

export default function Buttons(props: ButtonProps) {
  const {link, text} = props;
  return (
    <Link href={link} className="sm:w-[160px] bg-dcf-dark-brown text-center font-semibold m-font h-[35px] sm:h-[40px] rounded-full px-5 py-1 sm:p-1.5 text-white mx-2 my-1 sm:mx-4 hover:bg-dcf-dark-brown/80 hover:font-semibold text-base ease-in-out duration-300">
      {text}
    </Link>
  )
}
