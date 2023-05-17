import React from 'react'
import SidebarAdmin from '@/components/sidebar_admin'
import { Table } from '@mantine/core'
import Buttons from '@/components/buttons'
import { Button } from '@mantine/core'
import { EmptyLayout } from '@/components/layout'
import NavButton from '@/components/nav_button'
import AdminNavDashboard from '@/configs/Admin_Nav'

export default function lkti() {
    return (
        <EmptyLayout pageTitle='LKTI'>
            <div className="min-h-screen bg-center bg-cover w-fit h-fit lg:h-screen" style={{
                backgroundImage: "url('../../bgform.svg')",
            }}>
                <div className="flex w-full h-full min-h-screen mb-4 backdrop-blur-3xl">
                    <SidebarAdmin/>
                    <div className='w-full h-full p-10 '>
                        <p className='mx-4 font-bold'>Peserta LKTI DCF 2023</p>
                        <Table withColumnBorders highlightOnHover className='text-center bg-white rounded-md'>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Judul </th>
                                <th>ID ketua</th>
                                <th>Anggota 1</th>
                                <th>Email Anggota 1</th>
                                <th>Anggota 2</th>
                                <th>Email Anggota 2</th>
                                <th>Asal Instansi</th>
                                <th>Link Abstrak</th>
                                <th>Link Fullpaper</th>
                                <th>Nilai Abstrak</th>
                                <th>Nilai Fullpaper</th>
                                <th>Bukti Pembayaran</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Pengaruh Lumut FSM terhadap produktivitas mahasiswa fisika</td>
                                    <td>kristoper Mustop</td>
                                    <td>Jonatan Alip</td>
                                    <td>jonjonjon@gmail.com</td>
                                    <td>ucup balap</td>
                                    <td>inpobalap@gmail.com</td>
                                    <td>UAS</td>
                                    <td><a href="/">Link</a></td>
                                    <td><a href="/">Link</a></td>
                                    <td>80</td>
                                    <td>902</td>
                                    <td><a href="/">Link</a></td>
                                    <td>
                                        <Button type="submit" className="self-center m-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Verifikasi</Button>
                                        <Button type="submit" className="self-center m-2 w-fit bg-dcf-dark-brown hover:bg-dcf-dark-brown/90">Hapus</Button>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </Table>
                    </div>
                        
                </div>
            </div>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 lg:hidden">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    {AdminNavDashboard.map((data) => {
                        return <NavButton data={data} key={data.title}/>
                    })}
                </div>
            </div>
        </EmptyLayout>
    )
}
