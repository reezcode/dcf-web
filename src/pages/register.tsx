import Image from "next/image";
import { Autocomplete, Box, Button, Input, TextInput, PasswordInput } from '@mantine/core';
import { useForm, isNotEmpty, isEmail, matchesField, hasLength } from '@mantine/form';
import { At, Fingerprint, School, UserCircle } from 'tabler-icons-react';
import Link from "next/link";
import { EmptyLayout } from "@/components/layout";
interface SekolahProps {
    dataSekolah: Array<any>;
}

export default function register(props: SekolahProps) {
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
    const {dataSekolah} = props;
    return (
        <EmptyLayout pageTitle="Register">
        <div className="w-screen h-screen bg-center bg-cover" style={{
            backgroundImage: "url('../../bgform.svg')",
        }}>
            <div className="flex items-center justify-center w-full h-full backdrop-blur-3xl">
                <div className="flex flex-col justify-center w-11/12 p-10 bg-white rounded-lg shadow-xl md:w-5/12 h-fit xl:w-2/5">
                    <div className="flex flex-col items-center justify-center w-full h-fit">
                        <Image src={"../../logo-dcf.svg"} width={100} height={100} alt="Logo DCF"/>
                        <h1 className="mt-2 text-lg font-bold m-font">Start your Journey!</h1>
                    </div>
                    <Box component="form" onSubmit={form.onSubmit(() => {})}>
                    <div className="mt-5">
                        <div>
                          <TextInput 
                            icon={<UserCircle size={20}/>} 
                            id="input-email" 
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
                                id="input-email" 
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
                    </Box>
                </div>
            </div>
        </div>
        </EmptyLayout>
    )
}

export async function getStaticProps() {
    const resSMK = await fetch('https://api-sekolah-indonesia.vercel.app/sekolah/SMK?provinsi=030000&page=1&perPage=10000');
    const resSMA = await fetch('https://api-sekolah-indonesia.vercel.app/sekolah/SMA?provinsi=030000&page=1&perPage=10000');
    const dataSMA = await resSMA.json();
    const dataSMK = await resSMK.json();
    const dataMappedSMA = dataSMA.dataSekolah;
    const dataSekolahSMA = dataMappedSMA.map((item:any) => {return item.sekolah});
    const dataMappedSMK = dataSMK.dataSekolah;
    const dataSekolahSMK = dataMappedSMK.map((item:any) => {return item.sekolah});
    const dataSekolah = [].concat(dataSekolahSMA, dataSekolahSMK);
  return {
    props: {
        dataSekolah
    }
  }
}