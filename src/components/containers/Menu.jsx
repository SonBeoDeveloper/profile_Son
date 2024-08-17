"use client"
import React from 'react'
import { ROUTES } from "@/utils/data"
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Button } from '../ui/button'
import MobileMenu from './MobileMenu'
import { MotionButton, MotionImage, MotionList } from '@/utils/motionTag'
import { transition, variants } from '@/utils/framer_varients'
const Menu = () => {
    const pathName = usePathname()
    return (
        <header className={cn('fixed z-50 left-0 right-0 ', pathName != '/' && 'bg-background border-b border-border/25')}>
            <nav className='container py-4 flex justify-between items-center'>
                <Link href={'/'}>
                    <MotionImage
                        initial='initial'
                        animate="animate"
                        variants={variants.scale}
                        transition={transition.scale}
                        className='w-auto'
                        src={'/logo.png'} alt='logo' width={90} height={90}
                    />
                </Link>
                <ul className='md:flex hidden items-center text-[17px] gap-6 font-medium'>
                    {
                        ROUTES.map((route, i) => {
                            return (
                                <MotionList
                                    initial='initial'
                                    animate="animate"
                                    variants={variants.moveDown}
                                    transition={{
                                        ...transition.moveDown,
                                        delay: i * 0.3
                                    }}
                                    key={route.id}>
                                    <Link href={route.path} className={cn('hover:text-primary',
                                        pathName === route.path && "text-primary"
                                    )}>{route.name}</Link>
                                </MotionList>
                            )
                        })
                    }
                </ul>
                <MotionButton
                    initial='initial'
                    animate="animate"
                    variants={variants.moveLeft}
                    transition={transition.moveLeft}
                    variant="outline" className="md:inline-block hidden">Get in touch
                </MotionButton>
                {/* mobile */}
                <MobileMenu pathName={pathName} />
            </nav>
        </header >
    )
}

export default Menu