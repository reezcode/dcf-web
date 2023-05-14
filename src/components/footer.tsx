import Logo from "./logo"
import Link from "next/link"
import Arrow from "./arrow"

export default function Footer() {
  return (
    <div className="h-fit w-full bg-dcf-brown pb-20 px-5 shadow-[0_-22px_40px_#967E7625] m-font">
      <Arrow children="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" link="#"/>
      <Logo/>
      <div className="flex flex-col justify-between px-5 lg:flex-row">
        <div className="lg:w-1/4">
          <p className="my-2 text-sm">DCF 2023 Adalah suatu kegiatan Himpunan Mahasiswa Kimia Undip</p>
          <p className="my-1 text-sm text-dcf-dark-brown">Sekretariat HMK UNDIP, Gedung A302 Kampus FSM Undip, Jl. Prof. Jacub Rais, Tembalang, Semarang, 50275</p>
        </div>
        <div>
          <p className="my-1 text-sm text-dcf-dark-brown">Email: <a href="mailto:dcfundip2023@gmail.com">dcfundip2023@gmail.com</a></p>
          <p className="my-1 text-sm text-dcf-dark-brown">Whatsapp: <a href="https://wa.me/088216639654" target="_blank">Zarka (Kompetisi)</a></p>
          <p className="my-1 text-sm text-dcf-dark-brown">Whatsapp: <a href="https://wa.me/082279419057" target="_blank">Diah (LKTI)</a></p>
          <p className="my-2 text-sm text-dcf-dark-brown">Himpunan Mahasiswa Kimia Undip 2023</p>
        </div>
        <div className="flex flex-col mt-5 lg:mt-0">
          <p className="pr-2 my-1 text-sm font-bold text-left lg:w-2/3 lg:text-right">Menu</p>
          <div className="flex lg:flex-wrap lg:w-2/3 lg:justify-end">
            <Link href='/' className="pr-2 text-sm lg:pl-2 hover:text-dcf-dark-brown ">Home</Link>
            <Link href='#about' className="pr-2 text-sm lg:pl-2 hover:text-dcf-dark-brown">About</Link>
            <Link href='#testimoni' className="pr-2 text-sm lg:pl-2 hover:text-dcf-dark-brown">Testimoni</Link>
            <Link href='#event' className="pr-2 text-sm lg:pl-2 hover:text-dcf-dark-brown">Event</Link>
            <Link href='#timeline' className="pr-2 text-sm lg:pl-2 hover:text-dcf-dark-brown">Timeline</Link>
          </div>
        </div>
        <div>
          <p className="my-1 mt-5 text-sm font-bold text-center lg:text-right lg:mt-0">Social Media</p>
          <div className="flex justify-center gap-2 my-2">
            <div className="w-[35px] h-[35px] bg-dcf-light-brown  ease-in duration-300 rounded-full hover:bg-dcf-light-brown/80 hover:translate-y-1 flex justify-center items-center">
              <Link href='https://www.instagram.com/dcfundip/'>
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#967E76"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#967E76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#967E76" stroke-width="1.5"></path><path d="M17.5 6.51l.01-.011" stroke="#967E76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </Link>
            </div>
            <div className="w-[35px] h-[35px] bg-dcf-light-brown  ease-in duration-300 rounded-full hover:bg-dcf-light-brown/80 hover:translate-y-1 flex justify-center items-center">
              <Link href='https://twitter.com/dcfundip'>
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#967E76"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#967E76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </Link>
            </div>
            <div className="w-[35px] h-[35px] bg-dcf-light-brown  ease-in duration-300 rounded-full hover:bg-dcf-light-brown/80 hover:translate-y-1 flex justify-center items-center">
              <Link href='https://www.facebook.com/dcfundip'>
              <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#967E76"><path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="#967E76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </Link>
            </div>
            <div className="w-[35px] h-[35px] bg-dcf-light-brown  ease-in duration-300 rounded-full hover:bg-dcf-light-brown/80 hover:translate-y-1 flex justify-center items-center">
              <Link href='https://www.youtube.com/c/HMKUndip'>
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#967E76"><path d="M14 12l-3.5 2v-4l3.5 2z" fill="#967E76" stroke="#967E76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708z" stroke="#967E76" stroke-width="1.5"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
