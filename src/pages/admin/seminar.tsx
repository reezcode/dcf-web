import React from 'react'
import SidebarAdmin from '@/components/sidebar_admin'

export default function seminar() {
    return (
        <div className="w-screen bg-center bg-cover h-fit lg:h-screen" style={{
            backgroundImage: "url('../../bgform.svg')",
        }}>
            <div className="flex w-full h-full mb-4 backdrop-blur-3xl">
                <SidebarAdmin/>
            </div>
        </div>
    )
}
