import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Explicitly set Contact as active if at the bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveSection('contact');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0, rootMargin: "-20% 0px -20% 0px" } // Wider active zone to catch bottom sections
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const links = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Contact', href: '#contact', id: 'contact' }
    ];

    return (
        <>
            {/* Desktop Floating Dock */}
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300`}>
                <div className={`
                    flex items-center gap-1 p-2 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300
                    ${scrolled ? 'bg-black/80 shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'bg-black/50'}
                `}>
                    {links.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveSection(link.id)}
                                className={`relative px-6 py-2 text-sm font-medium transition-all rounded-full group overflow-hidden ${isActive
                                    ? 'bg-white text-black shadow-lg scale-105'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {!isActive && (
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                )}
                            </a>
                        );
                    })}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="relative px-6 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full group overflow-hidden"
                    >
                        <span className="relative z-10">Resume</span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                    </a>
                </div>
            </nav>

            {/* Mobile Logo & Toggle */}
            <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 md:hidden bg-gradient-to-b from-black/80 to-transparent">
                <a href="#" className="text-2xl font-black text-white tracking-wider">
                    MB<span className="text-accent">.</span>
                </a>
                <button
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-black z-[60] flex flex-col justify-center items-center"
                    >
                        <button
                            className="absolute top-6 right-6 p-4 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col gap-8 text-center">
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className={`text-6xl font-black tracking-tighter uppercase transition-colors ${activeSection === link.id
                                        ? 'text-white'
                                        : 'text-transparent text-outline-white hover:text-white'
                                        }`}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setActiveSection(link.id);
                                    }}
                                    style={activeSection === link.id ? {} : { WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="/resume.pdf"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8 text-2xl font-bold text-accent hover:text-white transition-colors"
                            >
                                View Resume
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
