import React, { useEffect, useState } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ROUTES } from '@/utils/data'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const MobileMenu = ({ pathName }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)
    useEffect(() => {
        setOpen(false)
    }, [pathName])
    return (
        <Drawer>
            <DrawerTrigger asChild className='md:hidden' onClick={handleOpen}>
                <Button varient="outline">
                    <Menu />
                </Button>
            </DrawerTrigger>

            <DrawerContent>
                <div className="max-w-sm mx-auto w-full">
                    <DrawerHeader className={'list-none space-y-6'}>
                        {
                            ROUTES.map((route) => {
                                return (
                                    <li key={route.id}>
                                        <Link href={route.path} className={cn('hover:text-primary',
                                            pathName === route.path && "text-primary"
                                        )}>{route.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </DrawerHeader>
                    <DrawerFooter className={'pb-10'}>
                        <Button varient='outline' className="md:hidden mx-auto">Get in touch</Button>

                    </DrawerFooter>
                    <DrawerClose onClick={handleOpen} className='text-center w-full pb-6 text-accent-foreground'>Close menu</DrawerClose>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default MobileMenu