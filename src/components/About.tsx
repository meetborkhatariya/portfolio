import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Terminal, MapPin, Download, Github, Linkedin, Mail } from 'lucide-react';
import type { MouseEvent } from 'react';

const About = () => {
    return (
        <section id="about" className="py-32 relative bg-black">

            {/* Background Gradients */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-cyan-400 mb-6 backdrop-blur-md">
                        ABOUT ME
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-none">
                        MY <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">JOURNEY</span>
                    </h2>
                </motion.div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[180px]">

                    {/* 1. Profile / Available Card (2x2) */}
                    <SpotlightCard className="col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between shadow-2xl">
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                                Available To Work
                            </div>
                            <h3 className="text-4xl font-bold mb-2">Meet Borkhatariya</h3>
                            <p className="text-gray-400 text-lg">AI Engineer & Full Stack Developer</p>
                        </div>
                        <div className="relative z-10 flex flex-wrap gap-2 mt-4">
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white flex items-center gap-1 hover:bg-white hover:text-black transition-all font-medium cursor-default">
                                <MapPin size={14} /> India
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white flex items-center gap-1 hover:bg-white hover:text-black transition-all font-medium cursor-default">
                                <Terminal size={14} /> Computer Science
                            </span>
                        </div>
                    </SpotlightCard>

                    {/* 2. Resume Card (2x1) */}
                    <SpotlightCard className="col-span-1 md:col-span-2 row-span-1 flex items-center justify-between group cursor-pointer hover:border-blue-500/30 transition-colors">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">Resume</h3>
                            <p className="text-gray-400 text-sm">View my professional journey</p>
                        </div>
                        <a href="/resume.pdf" target="_blank" className="relative z-10 p-4 bg-white/10 text-white rounded-full group-hover:scale-110 transition-transform group-hover:bg-blue-600 group-hover:text-white">
                            <Download size={24} />
                        </a>
                    </SpotlightCard>

                    {/* 3. Stats Card (1x1) */}
                    <SpotlightCard className="col-span-1 row-span-1 flex flex-col justify-center items-center text-center hover:border-blue-500/30">
                        <h3 className="text-5xl font-bold text-white relative z-10 group-hover:text-blue-400 transition-colors">3+</h3>
                        <p className="text-gray-400 text-sm relative z-10">Years Experience</p>
                    </SpotlightCard>

                    {/* 4. Social Card (1x1) */}
                    <SpotlightCard className="col-span-1 row-span-1 flex flex-col justify-center items-center gap-4 hover:border-blue-500/30">
                        <div className="flex gap-4 relative z-10">
                            <a href="https://github.com/meetborkhatariya" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/meet-borkhatariya-36755030b/" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all"><Linkedin size={20} /></a>
                        </div>
                        <div className="flex gap-4 relative z-10">
                            <a href="mailto:meetborkhatariya7@gmail.com" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all"><Mail size={20} /></a>
                        </div>
                    </SpotlightCard>

                    {/* 6. "Now" Card (2x1) */}
                    <SpotlightCard className="col-span-1 md:col-span-2 row-span-1 flex flex-col justify-center hover:border-blue-500/30">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">Now</h3>
                            </div>
                            <p className="text-lg font-medium text-white group-hover:text-blue-200 transition-colors">
                                Building autonomous agents and exploring Generative AI models.
                            </p>
                        </div>
                    </SpotlightCard>

                </div>

                {/* TECH STACK SECTION */}
                <div className="mt-32">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-blue-400 mb-6 backdrop-blur-md">
                        TOOLKIT
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tighter"
                    >
                        TECH STACK
                    </motion.h2>

                    <div className="space-y-16">
                        <TechCategory
                            title="Languages"
                            skills={[
                                { name: "JavaScript", icon: "devicon-javascript-plain colored" },
                                { name: "Python", icon: "devicon-python-plain colored" },
                                { name: "Dart", icon: "devicon-dart-plain colored" },
                                { name: "PHP", icon: "devicon-php-plain colored" },
                                { name: "C", icon: "devicon-c-plain colored" },
                                { name: "C++", icon: "devicon-cplusplus-plain colored" },
                                { name: "SQL", icon: "devicon-mysql-plain colored" },
                                { name: "Java", icon: "devicon-java-plain colored" },
                                { name: "HTML5", icon: "devicon-html5-plain colored" },
                                { name: "CSS3", icon: "devicon-css3-plain colored" }
                            ]}
                        />
                        <TechCategory
                            title="Libraries & Frameworks"
                            skills={[
                                { name: "NextJS", icon: "devicon-nextjs-plain" },
                                { name: "NodeJS", icon: "devicon-nodejs-plain colored" },
                                { name: "ExpressJS", icon: "devicon-express-original" },
                                { name: "ReactJS", icon: "devicon-react-original colored" },
                                { name: "Flask", icon: "devicon-flask-original" },
                                { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
                                { name: "Django", icon: "devicon-django-plain colored" },
                                { name: "Flutter", icon: "devicon-flutter-plain colored" },
                                { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
                                { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" }
                            ]}
                        />
                        <TechCategory
                            title="Databases"
                            skills={[
                                { name: "MySQL", icon: "devicon-mysql-plain colored" },
                                { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
                                { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
                                { name: "SQLite", icon: "devicon-sqlite-plain colored" },
                                { name: "Firebase", icon: "devicon-firebase-plain colored" },
                                { name: "Supabase", icon: "devicon-supabase-plain colored" },
                                { name: "Prisma", icon: "devicon-prisma-original colored" },
                            ]}
                        />
                        <TechCategory
                            title="Tools & Technologies"
                            skills={[
                                { name: "Git", icon: "devicon-git-plain colored" },
                                { name: "GitHub", icon: "devicon-github-original" },
                                { name: "Postman", icon: "devicon-postman-plain colored" },
                                { name: "Docker", icon: "devicon-docker-plain colored" },
                                { name: "Vercel", icon: "devicon-vercel-original" },
                                { name: "Android Studio", icon: "devicon-androidstudio-plain colored" }
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* Simple Confetti/Particles Decoration */}
            <div className="absolute top-20 right-10 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-700 opacity-20" />
            <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-bounce delay-500 opacity-20" />
        </section>
    );
};

// Reusable Tech Category Component with Staggered Animation
const TechCategory = ({ title, skills }: { title: string, skills: { name: string, icon: string }[] }) => {
    return (
        <div>
            <h3 className="text-xl text-gray-400 font-medium mb-6">{title}</h3>
            <motion.div
                className="flex flex-wrap gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default flex items-center gap-3 group"
                    >
                        <i className={`${skill.icon} text-2xl transition-transform group-hover:scale-110`} />
                        {skill.name}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

// Reusable Spotlight Card Component
function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 ${className}`}
            onMouseMove={handleMouseMove}
        >
            {/* Gradient Noise/Fuzz Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }} />

            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
                }}
            />
            {children}
        </div>
    );
}

export default About;
