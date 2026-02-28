import { motion } from 'framer-motion';
import { experience } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-body-bg text-evergreen relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-emerald-light/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <SectionHeading title="Experience" subtitle={true} centered={false} />

                <div className="mt-20 border-t-2 border-mint-dark/50">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative border-b-2 border-mint-dark/50 hover:border-emerald/30 transition-colors duration-500"
                        >
                            {/* Subtle Hover Sweep Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-light/5 via-mint/30 to-transparent w-0 group-hover:w-full transition-all duration-1000 ease-out pointer-events-none -z-10"></div>

                            <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr_auto] gap-8 md:gap-12 items-start relative z-10">

                                {/* Meta Data (Left Col) */}
                                <div>
                                    <span className="inline-block px-4 py-1.5 rounded-full border border-emerald/20 text-[10px] font-black tracking-[0.2em] text-emerald bg-emerald/5 uppercase mb-6 shadow-sm">
                                        {job.period}
                                    </span>
                                    <h4 className="text-xl font-bold text-royal group-hover:text-evergreen transition-colors">
                                        {job.company}
                                    </h4>
                                    <p className="text-sm font-semibold text-royal/50 mt-1 uppercase tracking-wider">
                                        {job.location}
                                    </p>
                                </div>

                                {/* Content Data (Middle Col) */}
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-black text-evergreen mb-8 leading-tight group-hover:text-emerald transition-colors tracking-tighter">
                                        {job.role}
                                    </h3>
                                    <div className="space-y-4">
                                        {job.achievements.map((item, i) => (
                                            <p key={i} className="text-royal/80 leading-relaxed font-medium md:text-lg flex items-start gap-4">
                                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-mint-dark block shrink-0 group-hover:bg-emerald/50 transition-colors"></span>
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative Arrow Indicator (Right Col) */}
                                <div className="hidden xl:flex items-center justify-end h-full">
                                    <div className="w-16 h-16 rounded-full border-2 border-mint flex items-center justify-center text-mint-dark group-hover:bg-emerald group-hover:text-white group-hover:border-emerald group-hover:scale-110 shadow-sm transition-all duration-500 transform group-hover:-rotate-45">
                                        <ArrowRight size={28} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
