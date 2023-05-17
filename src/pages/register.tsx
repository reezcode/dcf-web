import { RegistrationForm } from "@/components/form";
import { EmptyLayout } from "@/components/layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";

export default function register() {
export default function register() {
  return (
    <EmptyLayout pageTitle="Register">
      <div
        className="w-screen h-screen bg-center bg-cover"
        style={{
          backgroundImage: "url('../../bgform.svg')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full backdrop-blur-3xl">
          <div className="flex flex-col justify-center w-11/12 p-10 bg-white rounded-lg shadow-xl md:w-5/12 h-fit xl:w-2/5">
            <div className="flex flex-col items-center justify-center w-full h-fit">
              <Image
                src={"../../logo-dcf.svg"}
                width={100}
                height={100}
                alt="Logo DCF"
              />
              <h1 className="mt-2 text-lg font-bold m-font">
                Start your Journey!
              </h1>
            </div>
            <RegistrationForm />
            <RegistrationForm />
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}
