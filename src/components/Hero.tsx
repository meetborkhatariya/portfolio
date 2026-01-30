import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, Instagram } from 'lucide-react';


const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-20 md:py-0"
        >
            {/* Background Gradients */}
            <div className="absolute top-[-10%] left-[-20%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* LEFT COLUMN: Profile & Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
                        {/* Profile Image with Glow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative mb-8 group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 bg-neutral-900">
                                <img
                                    src="/profile.jpg"
                                    alt="Meet Borkhatariya"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-2">
                                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Borkhatariya</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
                                3rd Year CSE Student
                            </p>

                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-8">
                                <MapPin size={18} />
                                <span>Surat, Gujarat, India</span>
                            </div>

                            {/* Buttons & Socials */}
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <div className="flex gap-4">
                                    <a
                                        href="#contact"
                                        className="px-8 py-3 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                                    >
                                        Contact Me
                                    </a>
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black text-white rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2"
                                    >
                                        Resume <Download size={18} />
                                    </a>
                                </div>
                                <div className="flex gap-4 border-l border-white/10 pl-6">
                                    <SocialLink href="https://github.com/meetborkhatariya" icon={Github} />
                                    <SocialLink href="https://www.linkedin.com/in/meet-borkhatariya-36755030b/" icon={Linkedin} />
                                    <SocialLink href="mailto:meetborkhatariya7@gmail.com" icon={Mail} />
                                    <SocialLink href="https://www.instagram.com/meet_borkhatariya_07/" icon={Instagram} />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Unique Intro */}
                    <div className="order-1 md:order-2 flex flex-col justify-center text-center md:text-right">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-cyan-400 mb-6 backdrop-blur-md">
                                AVAILABLE FOR WORK
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                                BUILDING <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                                    FUTURE TECH
                                </span>
                            </h2>

                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg ml-auto">
                                I explore the intersection of <span className="text-white font-bold">Artificial Intelligence</span> and <span className="text-white font-bold">Modern Web</span>.
                                Currently crafting intelligent systems and pixel-perfect interfaces.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    );
};

const SocialLink = ({ href, icon: Icon }: { href: string, icon: any }) => (
    <a
        href={href}
        target="_blank"
        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
    >
        <Icon size={20} />
    </a>
);

export default Hero;
