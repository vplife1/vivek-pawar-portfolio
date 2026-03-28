"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, MapPin, Mail, Phone, ExternalLink, ChevronDown, Download, Briefcase, GraduationCap, Code } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Splash screen timer (1.5s hook)
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatedBackground />

            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 mb-6"
                        >
                            VP.
                        </motion.div>
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.2, ease: "circOut" }}
                                className="h-full bg-primary"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!loading && (
                <main className="relative w-full max-w-6xl mx-auto px-6 py-12 md:py-24">

                    {/* HERO SECTION */}
                    <section className="min-h-[85vh] flex flex-col justify-center pt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full glass-card text-sm text-primary">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Available for Opportunities
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
                                Vivek Pawar
                            </h1>
                            <h2 className="text-xl md:text-2xl text-zinc-400 font-light mb-6 leading-relaxed max-w-3xl">
                                Sr. Software Engineer | Dotnet Developer | MAUI Developer
                            </h2>

                            <p className="text-zinc-300 text-lg mb-10 max-w-2xl leading-relaxed">
                                An enthusiastic professional with highly motivated and leadership skills. Expert in the implementation of each step of a project. Always willing to innovate and improve existing technology.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-12">
                                <a href="#experience" className="px-6 py-3 rounded-lg bg-primary text-black font-semibold hover:bg-cyan-400 transition-colors flex items-center gap-2">
                                    View Experience <ChevronDown size={18} />
                                </a>
                                <a
                                    href="/Vivek_Pawar_Resume.pdf"
                                    download="Vivek_Pawar_Resume.pdf"
                                    className="px-6 py-3 rounded-lg glass-card font-semibold flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
                                >
                                    <Download size={18} /> Download Resume
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                                <div className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Pune Division, Maharashtra, India</div>
                                <div className="flex items-center gap-2"><Mail size={16} className="text-primary" /> pawarvivek195@gmail.com</div>
                                <div className="flex items-center gap-2"><Phone size={16} className="text-primary" /> 8600725238</div>
                                <a href="https://www.linkedin.com/in/vivek-pawar-b7881b158" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <ExternalLink size={16} className="text-primary" /> LinkedIn
                                </a>
                            </div>
                        </motion.div>
                    </section>

                    {/* EXPERIENCE SECTION */}
                    <section id="experience" className="py-20 border-t border-white/10">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-3 mb-12">
                                <Briefcase className="text-primary" size={28} />
                                <h3 className="text-3xl font-bold">Experience</h3>
                            </div>

                            <div className="space-y-6">
                                {/* Exp 1 */}
                                <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">Sr Software Engineer</h4>
                                            <h5 className="text-lg text-primary">Humane Business Intelligence Technology Solutions Pvt. Ltd.</h5>
                                        </div>
                                        <div className="text-left md:text-right">
                                            <div className="text-zinc-300 font-medium">June 2023 - Present (2 yrs 10 mos)</div>
                                            <div className="text-zinc-500 text-sm">Pune, Maharashtra, India</div>
                                        </div>
                                    </div>
                                    <ul className="space-y-3 text-zinc-300 leading-relaxed">
                                        <li className="flex gap-3"><Terminal size={18} className="text-primary shrink-0 mt-1" /> As a Full Stack Developer, I specialize in building robust web APIs and high-quality mobile applications.</li>
                                        <li className="flex gap-3"><Terminal size={18} className="text-primary shrink-0 mt-1" /> With over 4.5 years of experience, I have expertise in ASP.NET Core, Web API development, SQL Server, and cross-platform mobile app development using .NET MAUI and Xamarin Forms.</li>
                                        <li className="flex gap-3"><Terminal size={18} className="text-primary shrink-0 mt-1" /> I have successfully delivered multiple projects, independently handling backend and frontend development, database management, and cloud service integrations like Firebase.</li>
                                        <li className="flex gap-3"><Terminal size={18} className="text-primary shrink-0 mt-1" /> I excel in optimizing performance, ensuring seamless user experiences, and collaborating in Agile development environments.</li>
                                    </ul>
                                </div>

                                {/* Exp 2 */}
                                <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Software Engineer</h4>
                                        <h5 className="text-zinc-400">Cybage Software</h5>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <div className="text-zinc-300 text-sm">April 2022 - June 2023 (1 yr 3 mos)</div>
                                        <div className="text-zinc-500 text-sm">Pune, Maharashtra, India</div>
                                    </div>
                                </div>

                                {/* Exp 3 */}
                                <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Software Engineer</h4>
                                        <h5 className="text-zinc-400">iWork Technologies - IWORKTECH</h5>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <div className="text-zinc-300 text-sm">December 2020 - April 2022 (1 yr 5 mos)</div>
                                        <div className="text-zinc-500 text-sm">Pune, Maharashtra, India</div>
                                    </div>
                                </div>

                                {/* Exp 4 */}
                                <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Jr. Software Developer</h4>
                                        <h5 className="text-zinc-400">nourtek (NourtekIndia Innovations Pvt. Ltd.)</h5>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <div className="text-zinc-300 text-sm">May 2020 - December 2020 (8 mos)</div>
                                        <div className="text-zinc-500 text-sm">Ahmedabad, Gujarat</div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </section>

                    {/* SKILLS & EXTRA SECTION */}
                    <section className="py-20 border-t border-white/10">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-3 mb-12">
                                <Code className="text-primary" size={28} />
                                <h3 className="text-3xl font-bold">Skills & Technologies</h3>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xl text-white mb-4">Top Skills</h4>
                                <div className="flex flex-wrap gap-3">
                                    {["ASP.NET Web API", "ASP.NET MVC", "ASP.NET Core"].map((skill) => (
                                        <span key={skill} className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg text-sm font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xl text-white mb-4">Additional Tech & Tools</h4>
                                <div className="flex flex-wrap gap-3">
                                    {["Xamarin Forms", ".Net MAUI", "API", "iOS", "Android", "MVVM", "Full stack", "Azure DevOps", "GitHub", "SQLite"].map((skill) => (
                                        <span key={skill} className="px-4 py-2 glass-card text-zinc-200 rounded-lg text-sm hover:border-primary/50 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl text-white mb-4">Additional Engagements</h4>
                                <div className="flex flex-wrap gap-3">
                                    {["Freelancing", "Part time work", "@HumaneBITS"].map((extra) => (
                                        <span key={extra} className="px-4 py-2 bg-white/5 rounded-lg text-sm text-zinc-400 border border-transparent">
                                            {extra}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* EDUCATION SECTION */}
                    <section className="py-20 border-t border-white/10">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-3 mb-12">
                                <GraduationCap className="text-primary" size={28} />
                                <h3 className="text-3xl font-bold">Education</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                                    <div className="text-primary text-sm font-bold mb-2">(2016 - 2019)</div>
                                    <h4 className="text-lg font-bold text-white mb-2">Bachelor of Engineering, Computer Science</h4>
                                    <p className="text-zinc-400 text-sm">Dr. D.Y. Patil Institute of Engineering, Management and Research, Pune</p>
                                </div>

                                <div className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                                    <div className="text-primary text-sm font-bold mb-2">(2019 - 2020)</div>
                                    <h4 className="text-lg font-bold text-white mb-2">CDAC, PG-DAC</h4>
                                    <p className="text-zinc-400 text-sm">Centre for Development of Advanced Computing</p>
                                </div>

                                <div className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                                    <div className="text-primary text-sm font-bold mb-2">(2014 - 2016)</div>
                                    <h4 className="text-lg font-bold text-white mb-2">High School Diploma, Computer Science</h4>
                                    <p className="text-zinc-400 text-sm">Amrutvahini College of Engineering - AVCOE</p>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </main>
            )}
        </>
    );
}