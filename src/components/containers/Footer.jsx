'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
    const pathName = usePathname()
    return (pathName === '/' ? null : (
        < footer className='border-t' >
            <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-5 justify-between container py-3">
                <Image src={'/logo.png'} width={90} height={90} alt='logo' />
                <h3 className='sm:text-2xl text-xl'>Discover a <span>gateway</span> to unparralleled <br />{""} <span>design</span>creativity</h3>
            </div>
            <div className="bg-accent text-center py-8 text-accent-foreground">
                <p>Copyright @2024-2025. All rights reserved</p>
            </div>
        </footer >
    ))
}

export default Footer