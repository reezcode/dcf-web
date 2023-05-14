import { EmptyLayout } from "@/components/layout";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { At, Fingerprint } from "tabler-icons-react";
import useUser from "./api/auth/redirect";
import { notifications } from "@mantine/notifications";

interface dataLogin {
  email: string;
  password: string;
}

function LoginForm() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const router = useRouter();
  const { mutateUser } = useUser({
    redirectTo: "/dashboard",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(values: dataLogin) {
    const body = {
      email: values.email,
      password: values.password,
    };
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    try {
      mutateUser(response);
    } catch (error) {
      setErrorMsg("Error");
    }
    if (response.ok) {
      setCookie(
        "user",
        {
          email: values.email,
          isLoggedIn: true,
        },
        {
          path: "/",
          maxAge: 86400,
        }
      );
      router.replace("/dashboard");
    } else {
      notifications.show({
        title: "Login Gagal",
        message: "Email atau password salah",
        color: "red",
      });
    }
  }

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      password: hasLength({ min: 8 }, "Panjang password minimal 8 karakter"),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        const dataUp: dataLogin = {
          email: values.email,
          password: values.password,
        };
        handleSubmit(dataUp);
      })}
    >
      <div className="mt-5">
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
        <div className="mt-2">
          <PasswordInput
            icon={<Fingerprint size={20} />}
            placeholder="********"
            label="Password"
            required
            {...form.getInputProps("password")}
          />
          <Link
            href={"/forgot"}
            className="text-[12px] m-font font-semibold text-dcf-dark-brown mt-5"
          >
            Lupa Password?
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <Button
            type="submit"
            className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
          >
            Login
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

export default function login() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const router = useRouter();
  useEffect(() => {
    if (cookies.user) {
      router.push("/dashboard");
    }
  }, [cookies]);
  return (
    <EmptyLayout pageTitle="Login">
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
              <h1 className="mt-2 text-lg font-bold m-font">Welcome Back!</h1>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}
