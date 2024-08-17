import { Button } from "@/components/ui/button";
import { SERVICES } from "@/utils/data";
import { transition, variants } from "@/utils/framer_varients";
import { MotionDiv } from "@/utils/motionTag";
import Image from "next/image";

export default function page() {
    return (
        <div className="container min-h-screen grid place-items-center pb-7 pt-32">
            <div className="">
                <MotionDiv initial="initial" animate="animate" variants={variants.moveUp} transition={transition.moveUp} className="text-center">
                    <h3>Services <span>Offerd</span></h3>
                </MotionDiv>

                <div className="flex flex-wrap justify-center gap-8 mt-11">{
                    SERVICES.map((service, i) => {
                        return (
                            <MotionDiv key={service.id} className="bg-accent p-5 cursor-pointer overflow-hidden group h-80 rounded-3xl w-64 flex flex-col justify-between"
                                initial="initial" animate='animate'
                                variants={variants.moveRight} transition={{ ...transition.moveRight, delay: i * 0.6 }}>
                                <Image src={service.icon}
                                    alt={service.name}
                                    width={55}
                                    height={55}
                                    className="" />
                                <div className="">
                                    <h3 className="mb-2">
                                        <span>{service.name.split(" ")[0]}</span>
                                        &nbsp;
                                        {service.name.split(" ")[1]}
                                    </h3>
                                    <small className="text-accent-foreground">{service.description}</small>
                                    <Button variants="plain" className="block ml-auto mt-7" size="sm">Learn more</Button>
                                </div>
                            </MotionDiv>
                        )
                    })}</div>
            </div>
        </div>
    )
}