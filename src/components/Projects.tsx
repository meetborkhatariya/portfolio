import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Customer Churn Prediction",
        description: "Machine learning model to predict customer churn using telecom data.",
        tags: ["Python", "XGBoost", "Pandas"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop",
        links: { demo: "#", github: "#" },
        year: "2024"
    },
    {
        title: "AI Image Classification",
        description: "Deep learning application using CNNs for medical imaging.",
        tags: ["TensorFlow", "Keras", "CV"],
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop",
        links: { demo: "#", github: "#" },
        year: "2023"
    },
    {
        title: "NLP Sentiment Analyzer",
        description: "Real-time sentiment analysis using Bert and Transformers.",
        tags: ["PyTorch", "NLP", "FastAPI"],
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2574&auto=format&fit=crop",
        links: { demo: "#", github: "#" },
        year: "2023"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="relative bg-black pb-20 overflow-hidden">



            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-cyan-400 mb-6 backdrop-blur-md">
                        PORTFOLIO
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4 leading-none">
                        SELECTED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">WORKS</span>
                    </h2>
                </div>

                <div className="grid gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="group grid md:grid-cols-2 gap-10 items-center border-b border-white/10 pb-20 last:border-0"
                        >
                            {/* Image Container */}
                            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors duration-500">
                                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <div className="flex items-center gap-4 mb-4 text-cyan-400 font-mono text-sm">
                                    <span>{project.year}</span>
                                    <div className="h-px w-8 bg-cyan-400" />
                                    <span>{project.tags[0]}</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-blue-200 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-2 border border-white/10 bg-white/5 rounded-full text-sm text-gray-300 hover:border-blue-500/50 hover:text-white transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6">
                                    <a href={project.links.demo} className="flex items-center gap-2 text-lg font-bold hover:text-cyan-400 transition-colors group/link">
                                        Live Demo <ArrowUpRight className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                                    </a>
                                    <a href={project.links.github} className="flex items-center gap-2 text-lg font-bold hover:text-cyan-400 transition-colors group/link">
                                        GitHub <Github size={20} className="transition-transform group-hover/link:rotate-12" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
