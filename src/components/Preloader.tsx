import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [textIndex, setTextIndex] = useState(0);
    const text = ["Happy", "Coding!"];

    useEffect(() => {
        // Simple sequence timing:
        // 0s: Start
        // 0.5s: "Meet" appears
        // 1.5s: "Borkhatariya" appears
        // 2.5s: Exit
        const timer1 = setTimeout(() => setTextIndex(1), 1200);
        const timer2 = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="relative overflow-hidden">
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center p-10"
                >
                    <motion.h1
                        className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        Meet
                    </motion.h1>
                    <motion.h1
                        className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white text-5xl md:text-8xl font-black tracking-tighter uppercase"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        Borkhatariya
                    </motion.h1>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
