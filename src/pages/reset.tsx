import { useSearchParams } from "next/navigation";
import { EmptyLayout } from "@/components/layout";
import { confirmThePasswordReset } from "@/firebase/provider/AuthProvider";
import { Button, PasswordInput } from "@mantine/core";
import { hasLength, matchesField, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Fingerprint } from "tabler-icons-react";

interface dataNewPassword {
  newPassword: string;
  confirmPassword: string;
}

function NewForm() {
  const router = useRouter();
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
  const searchParams = useSearchParams();
  const [successMessage, setSuccessMessage] = useState(false);

  let oobCode: string | null = searchParams.get("oobCode");

  async function handleNewPassword(values: dataNewPassword) {
    const { confirmPassword, newPassword } = values;
    try {
      if (oobCode) {
        await confirmThePasswordReset(oobCode, confirmPassword);
        setSuccessMessage(true);
        notifications.show({
          title: "Berhasil",
          message: "Password berhasil direset",
          color: "green",
        });
      } else {
        notifications.show({
          title: "Peringatan",
          message: "Terjadi kesalahan, coba lagi nanti",
          color: "red",
        });
      }
    } catch (error: any) {
      notifications.show({
        title: "Peringatan",
        message: "Link reset password mengalami kerusakan",
        color: "red",
      });
    }
  }
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        const dataPass: dataNewPassword = {
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
