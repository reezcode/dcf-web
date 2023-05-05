import { Autocomplete, Box, Button, Input, TextInput, PasswordInput } from '@mantine/core';
import { At, Fingerprint, School, UserCircle } from 'tabler-icons-react';
import Link from "next/link";
import { useForm, isNotEmpty, isEmail, matchesField, hasLength } from '@mantine/form';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
        if (response.ok) {
          router.push('/login');
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
            console.log(dataUp);
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
  
export  { RegistrationForm }