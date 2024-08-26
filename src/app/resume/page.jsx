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
                <MotionButton initial="initial" animate="animate" variants={variants.moveDown} transition={transition.moveDown} variant="outline" size="lg">Junior Javascript Developer</MotionButton>
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
                    <h6>Who Im</h6>
                    <p className='text-accent-foreground mt-2'>
                        Full name: Nguyễn Hoài Sơn, Date of birth: 15/02/2001.
                    </p>
                    <p className='text-accent-foreground mt-2'>
                        I study at the University of Transport Technology, majoring in Information Technology.
                    </p>
                </TabsContent>
                <TabsContent value='skills'>
                    <h6>What i can do</h6>
                    <p className='text-accent-foreground mt-2'>
                        Languages: javaScript, HTML/CSS, typeScript
                    </p>
                    <p className='text-accent-foreground mt-2'>
                        FrameWorks: ReactJS, React Native, Node.js, Material-UI, Redux, mySql, NextJS
                    </p>
                    <p className='text-accent-foreground mt-2'>
                        Developer Tools: Git, VS Code, Figma, Postman
                    </p>
                    <p className='text-accent-foreground mt-2'>
                        English: 550 TOEIC
                    </p>
                </TabsContent>
                <TabsContent value='experience'>
                    <h6>My works</h6>
                    <p className='text-accent-foreground mt-2'>
                        CE Group - Đào tạo Lập trình viên quốc tế
                        10/2022 - 01/20212
                        Tham gia khóa học lập trình reactJS
                    </p>
                    <p className='text-accent-foreground mt-2'>
                        Công ty Sao Mai Solution Group
                        02/2023 - 09/2023
                        Tham gia xây dựng website Shopyfy
                        Học và đào tạo thêm ngôn ngữ nodeJs và mySQL
                        Công nghệ sử dụng: React, nodeJS, mySQL
                        Tham gia xây dựng website bán hàng
                        Công nghệ sử dụng: ReactJS, nodeJS
                    </p>
                    <p className='text-accent-foreground mt-2'>
                        Công ty NCC
                        03/2024 - 05/2024
                        Tham gia xây dựng website và mobile Discord cho nội bộ công ty NCC.
                        Công nghệ sử dụng: React, nodejs, ReactNatie, redux ,...

                    </p>
                    <p className='text-accent-foreground mt-2'>
                        Đồ án tốt nghiệp
                        10/2023 - 12/2023
                        Xây dựng app bán hàng cho nhà hàng Thiên Anh
                        Công nghệ sử dụng: React, React-native, mongoDB, nodeJS, redux

                    </p>
                </TabsContent>
            </MotionTabs>
        </div>
    )
}

export default page