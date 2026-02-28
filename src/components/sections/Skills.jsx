import { motion } from 'framer-motion';
import { skills } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import SpotlightCard from '../animations/SpotlightCard';

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white text-evergreen relative overflow-hidden">

            {/* Smooth Glowing Orbs - Light Luxury */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-mint-dark/40 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-emerald-light/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <SectionHeading title="Technical Excellence" subtitle={true} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {skills.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <SpotlightCard spotlightColor="rgba(37, 99, 235, 0.05)" className="bg-white/60 backdrop-blur-3xl border border-white/80 rounded-[2rem] p-6 sm:p-8 hover:border-emerald/20 transition-all shadow-premium hover:shadow-2xl group h-full cursor-pointer relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 z-0"></div>
                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                        <div className="p-3 bg-white text-emerald rounded-2xl border border-mint group-hover:bg-emerald group-hover:text-white group-hover:border-emerald group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-500">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-black tracking-tight text-evergreen group-hover:text-emerald transition-colors">
                                            {category.category}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-3 relative z-10">
                                        {category.items.map((skill, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-5 py-2 bg-white text-royal/90 text-sm font-semibold rounded-full border border-mint shadow-sm hover:bg-emerald hover:text-white hover:border-emerald transition-all cursor-default z-20 backdrop-blur-md"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
