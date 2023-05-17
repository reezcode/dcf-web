import { UploadForm } from "@/components/form";
import { EmptyLayout } from "@/components/layout";
import NavButton from "@/components/nav_button";
import Sidebar from "@/components/sidebar";
import AdminNavDashboard from "@/configs/Admin_Nav";
import NavDashboard from "@/configs/navigation_dashboard";
import addData from "@/firebase/auth/addData";
import getDataUser from "@/firebase/auth/getData";
import { useAuth } from "@/firebase/provider/AuthProvider";
import UserModel from "@/model/UserModel";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { hasLength, isEmail, isNotEmpty, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { At, BrandWhatsapp, School, UserCircle } from "tabler-icons-react";

export default function profil() {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState<UserModel>({} as UserModel);
  const { user, signIn } = useAuth();
  const email = user?.email ? user.email : "Loading";
  async function callData() {
    await getDataUser(email).then((res) => {
      setData(res);
    });
  }
  callData();
  const router = useRouter();
  const handleEdit = () => {
    setEdit(true);
  };
  useEffect(() => {
    if (user === null) router.push("/login");
  }, [user]);
  const form = useForm({
    initialValues: {
      nama: "",
      asal_sekolah: "",
      email: "",
      confirmPassword: "",
      no_hp: "",
    },
    validate: {
      nama: hasLength({ min: 2, max: 25 }, "Panjang nama antara 2-25 karakter"),
      asal_sekolah: isNotEmpty("Masukan asal sekolah"),
      email: isEmail("Invalid email"),
      confirmPassword: hasLength(
        { min: 8 },
        "Panjang password minimal 8 karakter"
      ),
      no_hp: hasLength(
        { min: 10, max: 13 },
        "Panjang no hp antara 10-13 karakter"
      ),
    },
  });
  const handleUpdate = async (user: UserModel) => {
    const data = {
      email: user.email,
      no_hp: user.no_hp,
      nama: user.nama,
      asal_sekolah: user.asal_sekolah,
    };
    try {
      const res = await signIn(user.email, user.upassword);
      try {
        const { result, error } = await addData("users", email, data);
        notifications.show({
          title: "Berhasil",
          message: "Data berhasil diupdate",
          color: "green",
        });
      } catch (e) {
        notifications.show({
          title: "Update gagal",
          message: "Data gagal diupdate",
          color: "red",
        });
      }
    } catch (e) {
      notifications.show({
        title: "Update gagal",
        message: "Password yang anda masukan salah",
        color: "red",
      });
    }
  };
  return (
    <EmptyLayout pageTitle="Profil">
      <div
        className="bg-center bg-cover lg:w-screen h-fit lg:h-screen m-font"
        style={{
          backgroundImage: "url('../../bgform.svg')",
        }}
      >
        <div className="flex w-full h-full mb-4 backdrop-blur-3xl">
          <Sidebar />
          <div className="w-full pb-16 h-fit lg:h-screen p-7">
            <h2 className="my-2 text-xl font-bold">Profil</h2>
            <div className="flex flex-col h-full grid-cols-2 grid-rows-6 gap-4 md:grid">
              <div className="flex items-center w-full h-full px-2 py-4 m-auto bg-white rounded-md shadow-lg grid-span-1 shadow-dcf-dark-brown/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 mx-2 text-dcf-dark-brown"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium">{data.nama}</p>
                  <p className="pr-5 text-sm">{data.email}</p>
                </div>
                <form
                  className="mx-5 mt-2"
                  onSubmit={() => {
                    router.push("/login");
                    signOut(getAuth());
                  }}
                >
                  <Button
                    type="submit"
                    className="bg-dcf-dark-brown hover:bg-dcf-dark-brown/80"
                  >
                    Log Out
                  </Button>
                </form>
              </div>
              <div className="row-span-5 row-start-2 p-5 bg-white rounded-md shadow-lg shadow-dcf-dark-brown/30">
                <p className="text-[12px] text-black/60">Profil Peserta</p>
                <form
                  onSubmit={form.onSubmit((values) => {
                    const dataUp: UserModel = {
                      email: email,
                      nama: values.nama,
                      asal_sekolah: values.asal_sekolah,
                      no_hp: values.no_hp,
                      upassword: values.confirmPassword,
                      url: "",
                    };
                    handleUpdate(dataUp);
                  })}
                >
                  <div>
                    <TextInput
                      icon={<UserCircle size={20} />}
                      id="nama"
                      withAsterisk={true}
                      label="Nama Lengkap"
                      disabled={!edit}
                      placeholder={data.nama}
                      {...form.getInputProps("nama")}
                    />
                  </div>
                  <div>
                    <TextInput
                      icon={<School size={20} />}
                      label="Asal Instansi"
                      id="asal_sekolah"
                      required
                      withAsterisk={true}
                      placeholder={data.asal_sekolah}
                      disabled={!edit}
                      {...form.getInputProps("asal_sekolah")}
                    />
                  </div>
                  <div>
                    <TextInput
                      icon={<BrandWhatsapp size={20} />}
                      id="no_hp"
                      withAsterisk={true}
                      label="Whatsapp"
                      disabled={!edit}
                      placeholder={data.no_hp}
                      {...form.getInputProps("no_hp")}
                    />
                  </div>
                  <div>
                    <PasswordInput
                      icon={<At size={20} />}
                      id="input-pass"
                      withAsterisk={true}
                      label="Konfirmasi Password"
                      disabled={!edit}
                      placeholder="****"
                      {...form.getInputProps("confirmPassword")}
                    />
                  </div>
                  <div className="w-1/3 mx-auto my-4">
                    <Button
                      disabled={!edit}
                      type="submit"
                      onClick={() => {}}
                      className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
                    >
                      Update Data
                    </Button>
                  </div>
                </form>
                <div
                  onClick={handleEdit}
                  className={`flex items-center justify-center w-full -mt-2 text-sm text-dcf-dark-brown cursor-pointer ${
                    edit ? "hidden" : ""
                  }`}
                >
                  <p>Edit Data</p>
                </div>
              </div>
              <div className="flex flex-col row-span-3 p-5 bg-white rounded-md shadow-lg shadow-dcf-dark-brown/30">
                <p className="text-[12px] text-black/60">
                  Upload Kartu Pelajar/Mahasiswa
                </p>
                <UploadForm />
              </div>
              <div
                className="row-span-3 overflow-auto bg-white bg-cover rounded-md shadow-lg shadow-dcf-dark-brown/30"
                style={{ backgroundImage: "url('../../img5.svg')" }}
              >
                <div className="w-full h-full bg-gradient-to-r from-dcf-light-brown from-50% to-dcf-light-brown/30 to-100% p-5 flex flex-col justify-end">
                  <p className="text-lg font-bold">Diponegoro Chemistry Fair</p>
                  <p className="w-3/5">
                    The Role of Green Chemistry to Maintain the Sustainable
                    Energy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 lg:hidden">
          <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            {NavDashboard.map((data) => {
              return <NavButton data={data} key={data.title} />;
            })}
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}

export async function getServerSideProps(context: any) {
  const cookies = new Cookies();
  const email: boolean = cookies.get("email") !== undefined;
  if (email) {
    context.res.setHeader("Location", "/login");
    context.res.statusCode = 302;
    context.res.end();
  }
  return { props: {} };
}
