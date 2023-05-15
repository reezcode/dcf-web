import { EmptyLayout } from "@/components/layout";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { hasLength, isEmail, matchesField, useForm } from "@mantine/form";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { At, Fingerprint, Hash } from "tabler-icons-react";
import useUser from "./api/auth/redirect";
import { notifications } from "@mantine/notifications";

interface dataReset {
  email: string;
}

function ForgotForm() {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: isEmail("Invalid email"),
    },
  });

  async function handleForgot(values: dataReset) {
    const body = {
      email: values.email,
    };
    const response = await fetch("/api/auth/forgot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      router.push("/check?email=" + values.email);
      notifications.show({
        title: "Berhasil",
        message: "Token telah dikirimkan ke email anda",
        color: "green",
      });
    } else {
      notifications.show({
        title: "Gagal",
        message: "Email tidak terdaftar",
        color: "red",
      });
    }
  }
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        const dataUp: dataReset = {
          email: values.email,
        };
        handleForgot(dataUp);
      })}
    >
      <div className="mt-5">
        <p className="text-sm text-center">
          Untuk reset password anda harus verifikasi token yang akan dikirimkan
          ke alamat email anda
        </p>
        <div>
          <TextInput
            icon={<At size={20} />}
            id="input-email"
            withAsterisk={true}
            label="Email"
            placeholder="example@email.com"
            {...form.getInputProps("email")}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <Button
            type="submit"
            className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
          >
            Kirim Token
          </Button>
          <p className="text-[12px] text-slate-700 mt-2 text-center">
            Belum memiliki akun?
            <Link
              href={"/register"}
              className="font-semibold text-dcf-dark-brown"
            >
              {" "}
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default function forgot() {
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
            <ForgotForm />
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
