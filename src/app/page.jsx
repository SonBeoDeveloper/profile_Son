import { cn } from '@/lib/utils'
import { transition, variants } from '@/utils/framer_varients'
import { MotionButton, MotionDiv, MotionImage } from '@/utils/motionTag'
import React from 'react'
import { Dancing_Script } from 'next/font/google'
import { SOCIAL_MEDIA } from '@/utils/data'
const paci = Dancing_Script({
  subsets: ['latin'],
  weight: ['400']
})
const Home = () => {
  return (
    <div className='h-dvh flex overflow-hidden md:flex-row flex-col items-center justify-between pt-5 w-full'>
      <div className="flex flex-col h-full justify-center space-y-6 md:items-end items-center relative max-w-xl md:ml-auto flex-1">
        <MotionDiv initial="initial" animate="animate" className='absolute flex items-center gap-x-4 -rotate-90 md:-left-8 -left-28  md:top-auto top-96 text-accent-foreground' variants={variants.rise} transition={transition.rise}>

          <MotionDiv className='border-4 size-14 rounded-full grid place-items-center'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: 'reverse'
            }}>
            <div className="size-3 rounded-full bg-accent-foreground"></div>
          </MotionDiv>
          <h4 className='text-2xl'>Web Developer</h4>
        </MotionDiv>
        <MotionDiv initial={'initial'} animate="animate" variants={variants.moveRight} transition={transition.moveRight}
          className={cn("md:text-right text-center", paci.className)}>
          <h1>Hoài <span>Sơn .</span></h1>
        </MotionDiv>
        <br />
        <a href="/CV.pdf" download>
          <MotionButton whileHover={{ scale: 0.95 }} initial="initial" animate="animate" variants={variants.moveUp} transition={variants.moveUp}>Download CV</MotionButton>
        </a>
        <div className="flex items-center gap-x-3 md:absolute bottom-6 left-2">
          {SOCIAL_MEDIA.map((item, i) => {
            return <a href={item.link} key={item.id}>
              <MotionImage src={item.icon} alt={item.name}
                whileHover={{ scale: 1.1 }} initial={'initial'} animate={'animate'} variants={variants.moveUp} transition={{
                  ...transition.moveUp,
                  delay: i * 0.3
                }} height={25} width={25} className='object-cover cursor-pointer max-h-full' />
            </a>
          })}
        </div>
      </div>
      <div className="flex md:max-w-[50%] max-w-lg items-end self-end">
        <MotionImage
          src={'/hero.PNG'} alt='hero' height={620} width={620} className='object-cover max-h-full' initial="initial" animate="animate" variants={variants.moveLeft} transition={{ ...transition.moveLeft, delay: 1.5 }}>

        </MotionImage>
      </div>
    </div>
  )
}

export default Home