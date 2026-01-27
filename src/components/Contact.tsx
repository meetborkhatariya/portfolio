import { ArrowUpRight, Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="relative bg-black py-32 md:py-48 overflow-hidden min-h-[80vh] flex items-center">

            {/* Background Gradients */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10 w-full">
                {/* Left Side - Let's Talk */}
                <div className="flex flex-col justify-center">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-cyan-400 mb-6 backdrop-blur-md w-fit">
                        CONTACT
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-none">
                        LET'S <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">WORK TOGETHER</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg">
                        Have a project in mind or want to discuss the latest in AI? I'm always open to new opportunities and interesting conversations.
                    </p>
                    <a
                        href="mailto:meetborkhatariya7@gmail.com"
                        className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                        <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all">
                            <Mail size={32} />
                        </div>
                        meetborkhatariya7@gmail.com
                    </a>
                </div>

                {/* Right Side - Links */}
                <div className="flex flex-col justify-center lg:pl-20 border-l border-white/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {/* Socials */}
                        <div>
                            <h3 className="text-gray-500 font-bold mb-8 tracking-widest text-sm uppercase">Socials</h3>
                            <ul className="space-y-6">
                                {[
                                    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/meet-borkhatariya-36755030b/" },
                                    { name: "GitHub", icon: Github, url: "https://github.com/meetborkhatariya" },
                                    { name: "Twitter", icon: Twitter, url: "https://x.com/meet_9154" },
                                    { name: "Instagram", icon: Instagram, url: "https://instagram.com/meet_9154" },
                                ].map((social) => (
                                    <li key={social.name}>
                                        <a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 text-xl text-gray-300 hover:text-white transition-colors group"
                                        >
                                            <social.icon size={24} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                            {social.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h3 className="text-gray-500 font-bold mb-8 tracking-widest text-sm uppercase">Menu</h3>
                            <ul className="space-y-6">
                                {[
                                    { name: "Home", url: "#home" },
                                    { name: "About", url: "#about" },
                                    { name: "Projects", url: "#projects" },
                                    { name: "Resume", url: "/resume.pdf" },
                                ].map((page) => (
                                    <li key={page.name}>
                                        <a href={page.url} className="text-xl text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                            <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                                            {page.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple Particles */}
            <div className="absolute top-1/4 right-10 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-700 opacity-20" />
            <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-100 opacity-20" />
        </section>
    );
};

export default Contact;
