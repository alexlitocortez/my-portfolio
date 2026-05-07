"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "React / Next.js", level: 80 },
    { name: "JavaScript / TypeScript", level: 75 },
    { name: "Python / FastAPI", level: 70 },
    { name: "SQL", level: 65 },
    { name: "CSS / Tailwind", level: 80 },
];

export default function Skills() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
                Skills
            </h2>

            <div className="space-y-6">
                {skills.map((skill, i) => (
                    <div key={i}>
                        {/* Skill name */}
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">
                                {skill.name}
                            </span>
                            <span className="text-sm text-gray-400">
                                {skill.level}%
                            </span>
                        </div>

                        {/* Progress bar background */}
                        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

                            {/* Animated bar */}
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}