import { EmptyLayout } from "@/components/layout";
import { Button, TextInput } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Hash } from "tabler-icons-react";

interface dataToken {
  email: string;
  token: string;
}

function TokenForm() {
  const router = useRouter();
  const { asPath, pathname } = router;
  const email = asPath.substring(asPath.indexOf("=") + 1);
  const form = useForm({
    initialValues: {
      token: "",
    },
    validate: {
      token: hasLength({ min: 12 }, "Panjang token minimal 12 karakter"),
    },
  });

  async function handleToken(values: dataToken) {
    const body = {
      email: email,
      token: values.token,
    };
    const response = await fetch("/api/auth/checkToken", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      notifications.show({
        title: "Berhasil",
        message: "Token berhasil diverifikasi",
        color: "green",
      });
      router.push("/reset?email=" + values.email + "&token=" + values.token);
    }
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        const dataCheck: dataToken = {
          email: email,
          token: values.token,
        };
        handleToken(dataCheck);
      })}
    >
      <div className="mt-5">
        <p className="text-sm text-center">
          Masukan token yang sudah dikirimkan ke email anda
        </p>
        <div>
          <TextInput
            icon={<Hash size={20} />}
            id="input-token"
            withAsterisk={true}
            label="Token"
            placeholder="Masukan token"
            {...form.getInputProps("token")}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <Button
            type="submit"
            className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
          >
            Verify
          </Button>
        </div>
      </div>
    </form>
  );
}

export default function check() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const router = useRouter();
  useEffect(() => {
    if (cookies.user) {
      router.push("/dashboard");
    }
  }, [cookies]);

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
            <TokenForm />
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}
