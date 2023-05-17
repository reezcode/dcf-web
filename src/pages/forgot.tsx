import { EmptyLayout } from "@/components/layout";
import { passReset, useAuth } from "@/firebase/provider/AuthProvider";
import { Button, TextInput } from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { At } from "tabler-icons-react";

interface dataReset {
  email: string;
}

function ForgotForm() {
  const router = useRouter();
  const { sendPasswordResetEmail } = useAuth();
  const [emailMessage, setEmailMessage] = useState(false);
  const [email, setEmail] = useState("");
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
    try {
      await passReset(values.email);
      setEmailMessage(true);
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        notifications.show({
          title: "Reset password gagal",
          message: "Email tidak terdaftar",
          color: "red",
        });
        setEmail("");
      }
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
        {emailMessage ? (
          <p className="text-sm text-center">
            Link reset password telah dikirim. Silakan cek email anda
          </p>
        ) : (
          <>
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
                Konfirmasi
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
          </>
        )}
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
