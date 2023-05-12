import React from 'react'
import SidebarAdmin from '@/components/sidebar'

export default function kompetisi() {
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
