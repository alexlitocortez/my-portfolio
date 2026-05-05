"use client"

import React from 'react';
import Image from 'next/image';
import me from '../../../public/images/avatar.jpeg'
import { motion } from "framer-motion";


export default function About() {
    return (
        <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20">
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col gap-6 items-center">

                    <h2 className="text-2xl font-semibold tracking-tight text-accent">
                        <> About Me </>
                    </h2>
                    <h1 className='text-3xl font-bold mb-16 text-center'>Build software that ships</h1>
                    <div className='flex w-full gap-8 max-[600px]:flex-col items-center'>
                        <div className='w-1/2'>
                            <Image src={me} alt='Avatar of mye' className='rounded-full' width={400} height={400} />
                        </div>
                        <div className='w-1/2 flex flex-col gap-4 max-[600px]: w-full'>
                            <p className="font-satoshi text-gray-500">
                                I'm Alex Cortez, a software engineer from San Francisco. Living in San Francisco, I thought the only reason
                                software interested me was due to the money and hype.
                            </p>
                            <p className="font-satoshi text-gray-500">
                                Before I even knew I wanted to code, my journey to where I'am right now brought some ups and downs. I graduated with
                                an accounting degree, but when I got into the field I quickly realized it wasn't for me. Then I tried digital marketing
                                which I enjoyed more but something was still missing.
                            </p>
                            <p className='font-satoshi text-gray-500'>
                                Before I quit my marketing job my curiosity on learning to code grew. I always had the urge to learn but seeing stories of
                                others teaching themselves inspried me.
                            </p>
                            <p className='font-satoshi text-gray-500'>
                                During this time was the Covid era. So I decided what better time than right now to start. I quit my marketing job to pursue
                                coding full time.
                            </p>
                            <p className='font-satoshi text-gray-500'>
                                Fast forward to now and the biggest lesson I learned is preseverace is the most important factor when programming. It obviosuly requires
                                intelligence but there are times where you just have to stare at a problem and brute force it.
                            </p>
                            <p className='font-satoshi text-gray-500'>
                                All that time spent being stuck is priceless because that's where true learning comes in. It's also the part right before the "aha"
                                moment where it clicks and there's no better feeling than that in programming.
                            </p>
                            <p className='font-satoshi text-gray-500'>
                                Building projects piece by piece while learning something new
                                everytime I code brings fulfillment and that was the missing piece for me when looking for a career.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </section >
    )
}
