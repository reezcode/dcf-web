import React from 'react'
import SidebarAdmin from '@/components/sidebar_admin'
import { Table } from '@mantine/core'
import Buttons from '@/components/buttons'
import { Button } from '@mantine/core'
import { EmptyLayout } from '@/components/layout'
import AdminNavDashboard from '@/configs/Admin_Nav'
import NavButton from '@/components/nav_button'

export default function semnas() {
    return (
        <EmptyLayout pageTitle="Seminar Nasional">
            <div className="w-screen min-h-screen bg-center bg-cover h-fit lg:h-screen" style={{
                backgroundImage: "url('../../bgform.svg')",
            }}>
                <div className="flex w-full h-full min-h-screen mb-4 backdrop-blur-3xl">
                    <SidebarAdmin/>
                    <div className='w-full h-full p-10 '>
                        <p className='mx-4 font-bold'>Peserta Seminar Nasional DCF 2023</p>
                        <Table withColumnBorders highlightOnHover className='text-center bg-white rounded-md'>
                            <thead>
                                <tr>
                                <th>id</th>
                                <th>Nama </th>
                                <th>Email</th>
                                <th>Asal Instansi</th>
                                <th>Whatsapp</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>mustop</td>
                                    <td>mustop@gmialc.om</td>
                                    <td>SMA 1 Bekasi</td>
                                    <td>09213131</td>
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
    );
}
