import { EmptyLayout } from "@/components/layout";
import { Button, PasswordInput } from "@mantine/core";
import { hasLength, matchesField, useForm } from "@mantine/form";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
import { Fingerprint } from "tabler-icons-react";

interface dataNewPassword {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

function NewForm() {
  const router = useRouter();
  const { asPath, pathname } = router;
  const form = useForm({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validate: {
      newPassword: hasLength({ min: 8 }, "Password minimal 8 karakter"),
      confirmPassword: matchesField("newPassword", "Passwords tidak sama"),
    },
  });

  const email = asPath.substring(asPath.indexOf("=") + 1, asPath.indexOf("&"));
  const token = asPath.substring(asPath.lastIndexOf("=") + 1);

  // useeffect ngecek klo dia tokennya null balik kelogin
  // kalo dia tokennya experied dia balik ke login

  async function handleNewPassword(values: dataNewPassword) {
    const body = {
      type: "resetPassword",
      email: values.email,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    };
    const response = await fetch("/api/auth/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      router.push("/login");
    }
  }
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        const dataPass: dataNewPassword = {
          email: email,
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        };
        handleNewPassword(dataPass);
      })}
    >
      <div className="mt-5">
        <p className="text-sm text-center">Masukan password baru</p>
        <div>
          <PasswordInput
            icon={<Fingerprint size={20} />}
            id="input-new"
            withAsterisk={true}
            label="New Password"
            placeholder="
              ********"
            {...form.getInputProps("newPassword")}
          />
        </div>
        <div>
          <PasswordInput
            icon={<Fingerprint size={20} />}
            id="input-con"
            withAsterisk={true}
            label="Confirm Password"
            placeholder="
              ********"
            {...form.getInputProps("confirmPassword")}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <Button
            type="submit"
            className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
          >
            Reset Password
          </Button>
        </div>
      </div>
    </form>
  );
}

export default function reset() {
  return (
    <EmptyLayout pageTitle="Reset Password">
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
              <h1 className="mt-2 text-lg font-bold m-font">Reset Password</h1>
            </div>
            <NewForm />
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}

export async function getServerSideProps(context: any) {
  const cookies = new Cookies();
  const email = cookies.get("email") === undefined;
  if (email) {
    context.res.setHeader("Location", "/dashboard");
    context.res.statusCode = 302;
    context.res.end();
  }
  return { props: {} };
}
