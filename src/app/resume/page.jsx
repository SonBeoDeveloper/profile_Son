import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { transition, variants } from '@/utils/framer_varients'
import { MotionButton, MotionDiv, MotionImage, MotionTabs } from '@/utils/motionTag'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-4xl mx-auto min-h-screen pt-32 2xl:pt-60 pb-4'>
            <div className="flex md:flex-row flex-col items-center justify-between gap-7 md:gap-0 w-full">
                {/* profile */}
                <div className="flex md:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center ">
                    <MotionImage initial="initial" variants={variants.scale} animate="animate" transition={transition.scale}
                        src={'/profile.png'} width={155} height={155} alt='profile' className='md:w-36 w-28' />
                    <MotionDiv initial="initial" animate="animate" variants={variants.moveDown} transition={transition.moveDown} className='sm:text-left text-center'>
                        <h3 className='mb-2'>
                            Hoài <span>Sơn .</span>
                        </h3>
                        <h5>Quảng Ninh, Việt Nam</h5>
                    </MotionDiv>
                </div>
                <MotionButton initial="initial" animate="animate" variants={variants.moveDown} transition={transition.moveDown} variant="outline" size="lg">Junior UI/UX Designer</MotionButton>
            </div>
            <MotionTabs
                initial="initial"
                animate="animate"
                variants={variants.moveUp}
                transition={transition.moveUp}
                className="leading-7 mt-10"
                defaultValue='about'>
                <TabsList>
                    <TabsTrigger value='about'>About</TabsTrigger>
                    <TabsTrigger value='skills'>Skills</TabsTrigger>
                    <TabsTrigger value='experience'>Experience</TabsTrigger>

                </TabsList>
                <TabsContent value='about'>
                    <h6>Who I'm</h6>
                    <p className='text-accent-foreground mt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa ea excepturi, tempora esse tenetur enim cum debitis architecto in, mollitia consectetur? Natus accusantium quam doloremque adipisci voluptatibus ducimus quos.
                    </p>
                    <p className='text-accent-foreground mt-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus numquam autem aspernatur in quisquam vel hic aliquam optio est voluptates. Provident quisquam incidunt praesentium modi ullam dignissimos expedita quam recusandae!
                    </p>
                </TabsContent>
                <TabsContent value='skills'>
                    <h6>What i can do</h6>
                    <p className='text-accent-foreground mt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa ea excepturi, tempora esse tenetur enim cum debitis architecto in, mollitia consectetur? Natus accusantium quam doloremque adipisci voluptatibus ducimus quos.
                    </p>
                    <p className='text-accent-foreground mt-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus numquam autem aspernatur in quisquam vel hic
                    </p>
                </TabsContent>
                <TabsContent value='experience'>
                    <h6>My works</h6>
                    <p className='text-accent-foreground mt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa ea excepturi, tempora esse tenetur enim cum debitis architecto in, mollitia consectetur? Natus accusantium quam doloremque adipisci voluptatibus ducimus quos.
                    </p>
                    <p className='text-accent-foreground mt-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus numquam autem aspernatur in quisquam vel hic
                    </p>
                </TabsContent>
            </MotionTabs>
        </div>
    )
}

export default page