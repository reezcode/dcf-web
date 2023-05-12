import React from 'react'
import { EmptyLayout } from '@/components/layout'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import SidebarAdmin from '@/components/sidebar_admin'

export default function index() {
    return (
        <EmptyLayout pageTitle='Admin'>
            <div className="w-full bg-center bg-auto lg:w-screen lg:h-screen h-fit" style={{
            backgroundImage: "url('../../bgform.svg')",
            }}>
                <div className="flex w-full h-full backdrop-blur-3xl">
                    <SidebarAdmin/>
                </div>
            </div>
        </EmptyLayout>
    )
}
