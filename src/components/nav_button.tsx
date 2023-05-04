import { useRouter } from "next/router";

interface NavProps {
  data: {
    title: string;
    link: string;
    svg: JSX.Element;
  }
}

export default function NavButton(props: NavProps) {
  const { data } = props;
  const router = useRouter();
  return (
    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group" onClick={() => router.push(data.link)}>
        <svg className="w-6 h-6 mb-1 text-gray-500 group-hover:text-dcf-brown group-focus:text-dcf-dark-brown" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {data.svg}
        </svg>
        <span className="text-sm text-gray-500 group-hover:text-dcf-brown group-focus:text-dcf-dark-brown">{data.title}</span>
    </button>
  )
}
