import { Autocomplete, Button, FileInput, PasswordInput, TextInput } from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, matchesField, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import Link from "next/link";
import { useRouter } from 'next/router';
import { At, FileUpload, Fingerprint, School, UserCircle } from 'tabler-icons-react';
import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";
import axios from "axios";
interface dataProps {
    dataSekolah: Array<any>;
}

interface dataRegist {
    nama: string,
    email: string,
    asal_sekolah: string,
    password: string,
    event: string
}

function RegistrationForm(props: dataProps) {
    const { dataSekolah } = props;
    const router = useRouter();
    const [error, setError] = useState(null);
    const form = useForm({
        initialValues: {
            nama: '',
            asal_sekolah: '',
            email: '',
            password: '',
            confirmPassword: '',

        },
        validate: {
            nama: hasLength({ min: 2, max: 25 }, 'Panjang nama antara 2-25 karakter'),
            asal_sekolah: isNotEmpty('Masukan asal sekolah'),
            email: isEmail('Invalid email'),
            password: hasLength({min:8}, 'Panjang password minimal 8 karakter') ,
            confirmPassword: matchesField('password', 'Passwords tidak sama'), 
        }
    });
    const register = async (values: dataRegist) => {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values),
        });
        if (response.status === 409){
            notifications.show({
                title: 'Peringatan',
                message: 'Email sudah terdaftar!',
                color: 'red',
            });
        } 
        if (response.ok) {
            router.push('/login');
            notifications.show({
                title: 'Sukses',
                message: 'Akun anda berhasil dibuat!',
                color: 'green',
            })
        } else {
            const data = await response.json();
            setError(data.message);
        }
      };
    return (
        <form onSubmit={form.onSubmit((values) => {
            const dataUp : dataRegist = {
                nama: values.nama,
                email: values.email,
                asal_sekolah: values.asal_sekolah,
                password: values.password,
                event: '',
            }
            register(dataUp);
        })}>
        <div className="mt-5">
            <div>
              <TextInput 
                icon={<UserCircle size={20}/>} 
                id="nama" 
                withAsterisk={true}
                label="Nama Lengkap"
                placeholder="Masukan nama lengkap" 
                {...form.getInputProps('nama')}
              />
            </div>
            <div className="mt-2">
                <Autocomplete
                    icon={<School size={20}/>}
                    label="Asal Sekolah"
                    id='asal_sekolah'
                    required
                    withAsterisk={true}
                    placeholder="Masukkan nama sekolah"
                    data={dataSekolah}
                    {...form.getInputProps('asal_sekolah')}
                    
                />
            </div>
            <div className="mt-2">
                <TextInput 
                    icon={<At size={20}/>} 
                    id="email" 
                    label="Email"
                    withAsterisk={true}
                    placeholder="example@email.com" 
                    {...form.getInputProps('email')}
                 />
            </div>
            <div className="mt-2">
                <PasswordInput
                    icon={<Fingerprint size={20} />}
                    placeholder="********"
                    label="Password"
                    id='password'
                    required
                    {...form.getInputProps('password')}
                />
            </div>
            <div className="mt-2">
                <PasswordInput
                    icon={<Fingerprint size={20} />}
                    placeholder="********"
                    label="Masukan Ulang Password"
                    required
                    {...form.getInputProps('confirmPassword')}
                />
            </div>
            <div className="flex flex-col items-center justify-center mt-5">
                <Button type="submit" className="w-full bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Daftar</Button>
                <p className="text-[12px] text-slate-700 mt-2 text-center">Sudah memiliki akun?<Link href={"/login"} className="font-semibold text-dcf-dark-brown"> Login</Link></p>
            </div>
        </div>
        </form>
    )
}

function uploadForm(){
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

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
      const { data } = await axios.post("/api/utils/upload", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <form
      className="w-full p-3 border border-gray-500 border-dashed"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col md:flex-row gap-1.5 md:py-4">
        <div className="flex-grow">
          {previewUrl ? (
            <div className="mx-auto w-80">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
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
        <div className="flex mt-4 md:mt-0 md:flex-col justify-center gap-1.5">
          <button
            disabled={!previewUrl}
            onClick={onCancelFile}
            className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600"
          >
            Cancel file
          </button>
          <button
            disabled={!previewUrl}
            onClick={onUploadFile}
            className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600"
          >
            Upload file
          </button>
        </div>
      </div>
    </form>
  );
}

export { RegistrationForm, uploadForm };
