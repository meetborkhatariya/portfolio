import { motion } from 'framer-motion';

interface MarqueeProps {
    text: string;
    className?: string;
    repeat?: number;
}

const Marquee = ({ text, className = "bg-accent text-black", repeat = 10 }: MarqueeProps) => {
    return (
        <div className={`w-full py-4 overflow-hidden ${className}`}>
            <div className="whitespace-nowrap flex">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-12 text-4xl font-black uppercase tracking-tighter"
                >
                    {Array(repeat).fill(text).map((item, i) => (
                        <span key={i}>{item}</span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
