import React from 'react'

const experiences = [
    {
        title: "Mission Control Associate",
        company: "Zoox",
        date: "2025 – Present",
        description:
            "Real-time monitoring robots and troubleshooting while the robots are on mission.",
    },
    {
        title: "Software Engineer",
        company: "Fractal.ai",
        date: "2022 – 2024",
        description:
            "Built full-stack apps using React, FastAPI, and SQL.",
    },
    {
        title: "Started Coding",
        company: "Self-taught",
        date: "2020",
        description:
            "Learned programming fundamentals and began building projects from scratch.",
    },
];

export default function experience() {
    return (
        <section className="w-full max-w-4xl mx-auto px-6 py-20">
            <div className='flex items-center justify-center'>
                <h2 className="text-2xl font-semibold text-accent mb-10">
                    Experience
                </h2>
            </div>


            <div className="relative border-l border-white/20">
                {experiences.map((item, index) => (
                    <div key={index} className="mb-10 ml-6 group relative">
                        {/* Dot */}
                        <span
                            className="absolute left-0 -translate-x-9 flex h-6 w-6 items-center justify-center rounded-full
                            bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                            transition-all duration-300
                            group-hover:scale-110
                            group-hover:shadow-[0_0_20px_rgba(139,92,246,0.8)]"
                        />

                        {/* Card */}
                        <div className="bg-secondary/50 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition">
                            <h3 className="text-lg font-semibold">
                                {item.title} · {item.company}
                            </h3>
                            <time className="block text-sm text-white/50 mb-2">
                                {item.date}
                            </time>
                            <p className="text-white/70">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
