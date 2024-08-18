import ContactForm from '@/components/containers/ContactForm'
import { transition, variants } from '@/utils/framer_varients'
import { MotionDiv } from '@/utils/motionTag'
import Image from 'next/image'
import React from 'react'
const page = () => {
    return (
        <div className="containe grid place-items-center  h-screen 2xl:pt-0 pt-20 ">
            <div className="absolute left-0 right-0 bottom-0 top-[94px] sm:bg-accent">
                <Image src={'/map.png'} alt='map' width={1200} height={450} className='w-full h-full object-contain' />
            </div>
            <MotionDiv
                className='z-10' initial="initial" animate="animate" variants={variants.moveUp} transition={transition.moveUp}>
                <div className="text-center">
                    <h3>
                        <span>Contact</span> with me to <br /> you{""} <span>Project.</span>
                    </h3>
                    <p className='text-accent-foreground mt-5 w-3/4 mx-auto'>
                        Great design, new generation ideas, use-centered projects.</p>
                </div>
                <ContactForm />

            </MotionDiv>
        </div>

    )
}

export default page