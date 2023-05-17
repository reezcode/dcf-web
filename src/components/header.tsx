import { useAuth } from "@/firebase/provider/AuthProvider";
import { notifications } from "@mantine/notifications";
import Link from "next/link";
import { useEffect, useState } from "react";
import Buttons from "./buttons";
import Logo from "./logo";
import { getAuth, signOut } from "firebase/auth";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    setIsLoggedIn(user != null);
  });
  return (
    <>
      <nav className="flex justify-between py-4">
        <Logo />
        <div className="flex">
          <ul className="hidden list-none rounded-full opacity-0 lg:flex bg-sky-100/20 md:opacity-100">
            <li className="md:mx-2 p-1.5 hover:bg-dcf-light-brown/40 rounded-full px-5 font-semibold m-font hover:text-dcf-dark-brown ease-in-out duration-300 self-center">
              <Link href="/">Home</Link>
            </li>
            <li className="md:mx-2 p-1.5 hover:bg-dcf-light-brown/40 rounded-full px-5 font-semibold m-font hover:text-dcf-dark-brown ease-in-out duration-300 self-center">
              <Link href="/#about">About</Link>
            </li>
            <li className="md:mx-2 p-1.5 hover:bg-dcf-light-brown/40 rounded-full px-5 font-semibold m-font hover:text-dcf-dark-brown ease-in-out duration-300 self-center">
              <Link href="/#event">Event</Link>
            </li>
            <li className="md:mx-2 p-1.5 hover:bg-dcf-light-brown/40 rounded-full px-5 font-semibold m-font hover:text-dcf-dark-brown ease-in-out duration-300 self-center">
              <Link href="/#timeline">Timeline</Link>
            </li>
            <li className="md:mx-2 py-1.5 hover:bg-dcf-light-brown/40 rounded-full px-5 font-semibold m-font hover:text-dcf-dark-brown ease-in-out duration-300 self-center">
              <Link href="/#testimoni">Testimoni</Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <form
              onSubmit={() => {
                signOut(getAuth());
                setIsLoggedIn(false);
              }}
            >
              <button
                type="submit"
                className="sm:w-[160px] bg-dcf-dark-brown text-center font-semibold m-font h-[35px] sm:h-[40px] rounded-full px-5 py-1 sm:p-1.5 text-white mx-2 my-1 sm:mx-4 hover:bg-dcf-dark-brown/80 hover:font-semibold text-base ease-in-out duration-300"
              >
                Logout
              </button>
            </form>
          ) : (
            <Buttons link="/login" text="Login" />
          )}
        </div>
      </nav>
    </>
  );
}
