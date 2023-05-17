import { EmptyLayout } from "@/components/layout";
import { useAuth } from "@/firebase/provider/AuthProvider";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Fingerprint, User } from "tabler-icons-react";

interface dataLogin {
  email: string;
  password: string;
}

function LoginForm() {
  const router = useRouter();
  const { signIn } = useAuth();
  useEffect(() => {});

  async function handleSubmit(values: dataLogin) {
    const body = {
      email: values.email,
      password: values.password,
    };
    try {
      await signIn(values.email, values.password);
      try {
        router.push("/dashboard");
      } catch (error) {
        notifications.show({
          title: "Login gagal",
          message: "Terjadi kesalahan saat login",
          color: "red",
        });
      }
    } catch (error) {
      notifications.show({
        title: "Login gagal",
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
            icon={<User size={20} />}
            id="input-email"
            withAsterisk={true}
            label="Username"
            placeholder="Input an username"
            {...form.getInputProps("username")}
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
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <Button
            type="submit"
            className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}

export default function login() {
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
              <h1 className="mt-2 text-lg font-bold m-font">Admin Access!</h1>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}
