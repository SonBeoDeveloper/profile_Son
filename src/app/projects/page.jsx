"use client"
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { PROJECTS } from '@/utils/data'
import { transition, variants } from '@/utils/framer_varients'
import { MotionDiv } from '@/utils/motionTag'
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const Contact = () => {
    const [currentProject, setCurrentProject] = useState(PROJECTS[0])
    const [swiper, setSwiper] = useState(null)
    const onSlideChange = (item) => {
        setCurrentProject(PROJECTS[item?.activeIndex])
    }
    console.log(currentProject);
    
    // get current index
    const index = PROJECTS.findIndex((project) => project.title == currentProject.title) + 1

    return (
        <div className="grid place-items-center lg:pt-0 sm:pt-32 pt-20 min-h-screen container">
            <div className="mt-12">
                <MotionDiv initial="initial" animate="animate" variants={variants.moveUp} transition={transition.moveUp} className='text-center mb-10'>
                    <h3>My <span>Projects</span></h3>
                </MotionDiv>
                <MotionDiv initial='initial' animate="animate" variants={variants.moveDown} transition={transition.moveDown} className='flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center w-full'>
                    <div className="flex-1 space-y-3">
                        <h2 className='text-6xl font-semibold text-primary'>{index < 10 ? `0 ${index}` : index}</h2>
                        <h3>{currentProject?.title}</h3>
                        <p className='w-10/12 text-accent-foreground'>{currentProject?.desc}</p>
                        <div className="mt-2 text-primary font-semibold tracking-wider space-x-2">
                            {currentProject?.stack?.map((item) => (
                                <Badge variant={'outline'} key={item} className={'text-primary text-base'}>
                                    {item}
                                </Badge>
                            ))}
                        </div>
                        <br />
                        <div className="flex gap-x-3">
                            <TooltipProvider delayDuration={200}>
                                <Tooltip>
                                    <a href={`${currentProject?.github}`}>
                                        <TooltipTrigger asChild>
                                            <button className='bg-accent p-2.5 rounded-full'>
                                                <Image src={'/GitHub.svg'} alt="github" width={40} height={40} />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>GitHub</p>
                                        </TooltipContent>
                                    </a>

                                </Tooltip>
                                {currentProject?.link && (
                                    <Tooltip>
                                        <a href={`${currentProject.link}`} target="_blank" rel="noopener noreferrer">
                                            <TooltipTrigger asChild>
                                                <button className='bg-accent p-2.5 rounded-full'>
                                                    <Image src={'/open.svg'} alt="live preview" width={40} height={40} />
                                                </button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Preview</p>
                                            </TooltipContent>
                                        </a>
                                    </Tooltip>
                                )}

                            </TooltipProvider>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center flex-col">
                        <Swiper breakpoints={{
                            499: {
                                slidesPerView: 1
                            },
                            999: {
                                slidesPerView: 1.4
                            }
                        }}
                            spaceBetween={20}
                            className='w-full md:max-w-lg max-w-[250px]' onSlideChange={onSlideChange} onSwiper={(s) => setSwiper(s)}>
                            {PROJECTS.map((project, i) => (
                                <SwiperSlide key={project.id} className={cn(index - 1 !== i && 'opacity-45')}>
                                    <Image src={project.image} alt={project.title} width={10000000000} height={10000000000} style={{ width: '1200px', height: '400px' }} className='object-contain pl-50' />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </MotionDiv>
            </div>
        </div>
    )
}

export default Contact