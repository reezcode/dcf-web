import addData from "@/firebase/auth/addData";
import getDataUser from "@/firebase/auth/getData";
import { useAuth } from "@/firebase/provider/AuthProvider";
import UserModel from "@/model/UserModel";
import { Autocomplete, Button, PasswordInput, TextInput } from "@mantine/core";
import {
  hasLength,
  isEmail,
  isNotEmpty,
  matchesField,
  useForm,
} from "@mantine/form";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import {
  At,
  CircleCheck,
  FileUpload,
  Fingerprint,
  School,
  UserCircle,
} from "tabler-icons-react";

function RegistrationForm() {
  const router = useRouter();
  const { signUp } = useAuth();
  const form = useForm({
    initialValues: {
      nama: "",
      asal_sekolah: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      nama: hasLength({ min: 2, max: 25 }, "Panjang nama antara 2-25 karakter"),
      asal_sekolah: isNotEmpty("Masukan asal sekolah"),
      email: isEmail("Invalid email"),
      password: hasLength({ min: 8 }, "Panjang password minimal 8 karakter"),
      confirmPassword: matchesField("password", "Passwords tidak sama"),
    },
  });
  const register = async (user: UserModel) => {
    const data = {
      id_lomba: user.id_lomba,
      email: user.email,
      no_hp: user.no_hp,
      nama: user.nama,
      asal_sekolah: user.asal_sekolah,
      ktm: user.ktm,
    };
    try {
      await signUp(user.email, user.upassword);
      try {
        const { result, error } = await addData("users", user.email, data);
        notifications.show({
          title: "Berhasil",
          message: "Registrasi berhasil, silahkan login",
          color: "green",
        });
        router.push("/login");
      } catch (e) {
        notifications.show({
          title: "Error",
          message: "Terjadi kesalahan saat mendaftar",
          color: "red",
        });
      }
    } catch (e) {
      notifications.show({
        title: "Registrasi gagal",
        message: "Email sudah terdaftar",
        color: "red",
      });
    }
  };
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        const dataUp: UserModel = {
          id_lomba: 0,
          email: values.email,
          nama: values.nama,
          asal_sekolah: values.asal_sekolah,
          upassword: values.password,
          ktm: "",
          no_hp: "",
          url: "",
        };
        register(dataUp);
      })}
    >
      <div className="mt-5">
        <div>
          <TextInput
            icon={<UserCircle size={20} />}
            id="nama"
            withAsterisk={true}
            label="Nama Lengkap"
            placeholder="Masukan nama lengkap"
            {...form.getInputProps("nama")}
          />
        </div>
        <div className="mt-2">
          <TextInput
            icon={<School size={20} />}
            label="Asal Instansi"
            id="asal_sekolah"
            required
            withAsterisk={true}
            placeholder="Masukkan nama sekolah"
            {...form.getInputProps("asal_sekolah")}
          />
        </div>
        <div className="mt-2">
          <TextInput
            icon={<At size={20} />}
            id="email"
            label="Email"
            withAsterisk={true}
            placeholder="example@email.com"
            {...form.getInputProps("email")}
          />
        </div>
        <div className="mt-2">
          <PasswordInput
            icon={<Fingerprint size={20} />}
            placeholder="********"
            label="Password"
            id="password"
            required
            {...form.getInputProps("password")}
          />
        </div>
        <div className="mt-2">
          <PasswordInput
            icon={<Fingerprint size={20} />}
            placeholder="********"
            label="Masukan Ulang Password"
            required
            {...form.getInputProps("confirmPassword")}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <Button
            type="submit"
            className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90"
          >
            Daftar
          </Button>
          <p className="text-[12px] text-slate-700 mt-2 text-center">
            Sudah memiliki akun?
            <Link href={"/login"} className="font-semibold text-dcf-dark-brown">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [ktm, setKtm] = useState(false);
  const [datas, setDatas] = useState<UserModel>({} as UserModel);
  const { user } = useAuth();
  const email = user?.email ? user.email : "Loading";
  async function callData() {
    await getDataUser(email).then((res) => {
      setDatas(res);
    });
  }
  callData();
  useEffect(() => {
    setKtm(datas.url != "");
  });
  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }
    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty");
      return;
    }
    const file = fileInput.files[0];

    /** File validation */
    if (!file.type.startsWith("image")) {
      alert("Please select a valide image");
      return;
    }

    /** Setting file state */
    setFile(file); //The file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // To show the preview of the image

    /** Reset file input */
    e.currentTarget.type = "text";
    e.currentTarget.type = "file";
  };

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  };

  const onUploadFile = async () => {
    setUploading(true);
    try {
      if (!file) return;
      const formData = new FormData();
      formData.append("myImage", file);
      const { data } = await axios.post("/api/utils/ktmUpload", formData);
      notifications.show({
        title: "Sukses",
        message: "File Kartu Pelajar/Mahasiswa Berhasil Diupload!",
        color: "green",
      });
      const update = {
        id_lomba: datas.id_lomba,
        email: datas.email,
        no_hp: datas.no_hp,
        nama: datas.nama,
        asal_sekolah: datas.asal_sekolah,
        ktm: "yes",
        url: data.url,
      };
      try {
        const { result, error } = await addData("users", email, update);
      } catch (e) {
        notifications.show({
          title: "Error",
          message: "Terjadi kesalahan saat upload",
          color: "red",
        });
      }
      setPreviewUrl(null);
      setKtm(true);
    } catch (error: any) {
      notifications.show({
        title: "Gagal",
        message: error.response?.data,
        color: "red",
      });
    }
    setUploading(false);
  };

  return (
    <form
      className="w-full h-full p-3 mt-3 overflow-y-scroll border border-gray-500 border-dashed rounded-md scrollbar-hide"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-1.5 md:py-4">
        <div className="flex-grow">
          {previewUrl ? (
            <div className="mx-auto w-fit">
              <Image
                alt="file uploader preview"
                objectFit="cover"
                src={previewUrl}
                width={320}
                height={218}
                layout="fixed"
              />
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
              <FileUpload size={40} color="grey" />
              <strong className="text-sm font-medium">Select an image</strong>
              <input
                className="block w-0 h-0"
                name="file"
                type="file"
                onChange={onFileUploadChange}
              />
            </label>
          )}
        </div>
        <div className="flex mt-4 md:flex-col justify-center gap-1.5 ">
          <Button
            className="bg-dcf-brown/90 hover:bg-dcf-brown/80 active:bg-dcf-brown"
            disabled={!previewUrl}
            onClick={onCancelFile}
          >
            Cancel file
          </Button>
          <Button
            className="bg-dcf-dark-brown/90 hover:bg-dcf-dark-brown/80 active:bg-dcf-dark-brown"
            disabled={!previewUrl}
            onClick={onUploadFile}
          >
            Upload file
          </Button>
          {ktm ? (
            <div className="flex flex-row items-start justify-center w-full py-4 mt-2 text-sm rounded-lg bg-green-100/80 h-fit m-font">
              <CircleCheck size={24} color="green" className="mr-2" />
              <p>Kartu Pelajar/Mahasiswa sudah diupload</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </form>
  );
}

function KompetisiForm() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [daftar, setDaftar] = useState(false);
  const [datas, setDatas] = useState<UserModel>({} as UserModel);
  const { user } = useAuth();
  const email = user?.email ? user.email : "Loading";
  async function callData() {
    await getDataUser(email).then((res) => {
      setDatas(res);
    });
  }
  callData();
  useEffect(() => {
    setDaftar(datas.id_lomba == 1);
  });
  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }
    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty");
      return;
    }
    const file = fileInput.files[0];

    /** File validation */
    if (!file.type.startsWith("image")) {
      alert("Please select a valide image");
      return;
    }

    /** Setting file state */
    setFile(file); //The file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // To show the preview of the image

    /** Reset file input */
    e.currentTarget.type = "text";
    e.currentTarget.type = "file";
  };

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  };

  const onUploadFile = async () => {
    setUploading(true);
    try {
      if (!file) return;
      const formData = new FormData();
      formData.append("myImage", file);
      const { data } = await axios.post("/api/utils/kompetisiUpload", formData);
      notifications.show({
        title: "Sukses",
        message: "Bukti Pembayaran Berhasil Diupload!",
        color: "green",
      });
      const update = {
        email: datas.email,
        no_hp: datas.no_hp,
        nama: datas.nama,
        asal_sekolah: datas.asal_sekolah,
        status: "Belum Terverifikasi",
        url: data.url,
        nilai_ujian: 0,
        nilai_ujicoba: 0,
      };
      try {
        const { result, error } = await addData("kompetisi", email, update);
      } catch (e) {
        notifications.show({
          title: "Error",
          message: "Terjadi kesalahan saat upload",
          color: "red",
        });
      }
      setPreviewUrl(null);
    } catch (error: any) {
      notifications.show({
        title: "Gagal",
        message: error.response?.data,
        color: "red",
      });
    }
    setUploading(false);
  };

  return (
    <form
      className="w-full p-3 mt-3 overflow-y-scroll border border-gray-500 border-dashed rounded-md h-fit scrollbar-hide"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-1.5 md:py-4">
        <div className="flex-grow">
          {previewUrl ? (
            <div className="mx-auto w-fit">
              <Image
                alt="file uploader preview"
                objectFit="cover"
                src={previewUrl}
                width={320}
                height={218}
                layout="fixed"
              />
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
              <FileUpload size={40} color="grey" />
              <strong className="text-sm font-medium">Select an image</strong>
              <input
                className="block w-0 h-0"
                name="file"
                type="file"
                onChange={onFileUploadChange}
              />
            </label>
          )}
        </div>
        <div className="flex mt-4 md:flex-col justify-center gap-1.5 ">
          <Button
            className="bg-dcf-brown/90 hover:bg-dcf-brown/80 active:bg-dcf-brown"
            disabled={!previewUrl}
            onClick={onCancelFile}
          >
            Cancel file
          </Button>
          <Button
            className="bg-dcf-dark-brown/90 hover:bg-dcf-dark-brown/80 active:bg-dcf-dark-brown"
            disabled={!previewUrl}
            onClick={onUploadFile}
          >
            Upload file
          </Button>
        </div>
      </div>
    </form>
  );
}

export { RegistrationForm, UploadForm, KompetisiForm };
