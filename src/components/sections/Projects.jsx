import { motion } from 'framer-motion';
import { projects } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import { ExternalLink, Github, Layers } from 'lucide-react';
import SpotlightCard from '../animations/SpotlightCard';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white text-evergreen relative">
            {/* Smooth Glowing Orbs - Light theme */}
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-emerald-light/15 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-mint-dark/40 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <SectionHeading title="Selected Works" subtitle={true} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <SpotlightCard className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-premium hover:shadow-2xl hover:border-emerald/10 transition-all duration-500 flex flex-col h-full cursor-pointer hover:-translate-y-2 relative">
                                {/* Sleek Abstract Thumbnail Header */}
                                <div className="h-44 w-full bg-gradient-to-br from-mint-dark/30 via-white/40 to-emerald-light/10 relative overflow-hidden flex items-center justify-center pointer-events-none border-b border-white">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/80 rounded-full blur-[30px] transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald/10 rounded-full blur-[30px] transform -translate-x-10 translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

                                    <Layers className="w-16 h-16 text-emerald/20 group-hover:scale-110 group-hover:text-emerald/40 transition-all duration-500" />
                                    <span className="absolute top-4 right-4 text-[10px] font-black tracking-[0.2em] text-emerald uppercase bg-white/80 backdrop-blur-xl border border-white px-4 py-1.5 rounded-full flex items-center shadow-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald mr-2"></div>
                                        {project.year}
                                    </span>
                                </div>

                                <div className="relative p-6 sm:p-8 flex flex-col h-full bg-white/40 z-20 flex-grow">
                                    <h3 className="text-2xl font-black text-evergreen mb-4 leading-tight group-hover:text-emerald transition-colors pointer-events-none tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-royal/80 mb-8 text-[15px] leading-relaxed line-clamp-3 font-medium pointer-events-none">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-10 pointer-events-none mt-auto">
                                        {project.tech.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-white text-royal/90 rounded-full border border-mint shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 text-xs text-white bg-evergreen hover:bg-emerald px-4 py-3.5 rounded-xl font-black transition-all shadow-md hover:shadow-xl hover:shadow-emerald/20 pointer-events-auto uppercase tracking-wider group/live"
                                        >
                                            <ExternalLink size={16} className="group-hover/live:scale-110 transition-transform" /> Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 text-xs text-royal hover:text-emerald font-bold transition-all group/link bg-white px-4 py-3.5 rounded-xl border border-mint hover:border-emerald hover:bg-mint-dark/20 shadow-sm pointer-events-auto shrink-0"
                                        >
                                            <Github size={20} className="group-hover/link:rotate-12 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
