import React from 'react';
import Image from 'next/image';
import me from '../../../public/images/avatar.jpeg'

export default function About() {
    return (
        <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20">
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
                            But when I started coding I enjoyed the process. Building projects piece by piece while learning something new
                            everytime I coded brought fulfillment.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
