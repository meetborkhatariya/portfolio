import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-12 relative z-10 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand / Copyright */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black text-white tracking-tighter mb-2">
                        MB<span className="text-blue-500">.</span>
                    </h3>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Meet Borkhatariya. All rights reserved.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                    <SocialLink href="https://github.com/meetborkhatariya" icon={Github} />
                    <SocialLink href="https://www.linkedin.com/in/meet-borkhatariya-36755030b/" icon={Linkedin} />
                    <SocialLink href="mailto:meetborkhatariya7@gmail.com" icon={Mail} />
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon: Icon }: { href: string, icon: any }) => (
    <a
        href={href}
        target="_blank"
        className="text-gray-400 hover:text-white transition-colors"
    >
        <Icon size={20} />
    </a>
);

export default Footer;
