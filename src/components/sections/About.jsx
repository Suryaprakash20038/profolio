import { motion } from 'framer-motion';
import { personalInfo } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import { Code, Users, Lightbulb } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-32 bg-[#FAFAFA] text-evergreen relative overflow-hidden">

            {/* Smooth Glowing Orbs - Light theme optimized */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-light/20 rounded-full blur-[120px] mix-blend-multiply opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mint-dark/50 rounded-full blur-[100px] mix-blend-multiply pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading title="Behind the Code" subtitle={true} />

                <div className="grid md:grid-cols-2 gap-20 items-center mt-20">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-royal leading-relaxed text-xl font-medium"
                    >
                        <p className="first-letter:text-7xl first-letter:font-black first-letter:text-emerald first-letter:mr-3 first-letter:float-left">
                            I am a <span className="text-evergreen font-black border-b-2 border-emerald/20 pb-1 relative inline-block">Results-driven Full-Stack MERN Developer<span className="absolute bottom-0 left-0 w-full h-2 bg-emerald-light/20 -z-10"></span></span> based in {personalInfo.location}.
                            I specialize in designing, developing, and deploying scalable web applications that solve real-world problems.
                        </p>
                        <p className="bg-white/60 p-6 rounded-[2rem] border border-white shadow-premium backdrop-blur-xl relative overflow-hidden group">
                            <span className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            My expertise lies in building secure <span className="text-evergreen font-black">RESTful APIs</span>, implementing robust authentication systems, and optimizing application performance.
                        </p>
                        <p>
                            Deeply passionate about <span className="text-evergreen font-black">clean architecture</span>, reusable components, and modern UI/UX practices. I thrive in collaborative environments and constantly seek to learn new technologies.
                        </p>
                    </motion.div>

                    {/* Right Interactive Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid gap-6"
                    >
                        {[
                            { title: "Full-Stack Development", icon: <Code size={26} className="text-emerald" />, desc: "Focus on MERN stack with modern architectural patterns.", delay: 0 },
                            { title: "Performance Optimization", icon: <Lightbulb size={26} className="text-emerald" />, desc: "Focusing on core web vitals and database efficiency.", delay: 0.1 },
                            { title: "Collaborative Agile", icon: <Users size={26} className="text-emerald" />, desc: "Thriving in high-performance team environments.", delay: 0.2 },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + item.delay }}
                                whileHover={{ x: 10, scale: 1.02 }}
                                className="p-6 bg-white/70 backdrop-blur-2xl rounded-3xl border border-white shadow-premium hover:shadow-2xl hover:border-emerald-light/30 transition-all flex items-center gap-6 group relative overflow-hidden cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="p-4 bg-white backdrop-blur-md rounded-2xl border border-mint group-hover:scale-110 group-hover:border-emerald/20 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300 relative z-10">
                                    {item.icon}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-evergreen mb-1 group-hover:text-emerald transition-colors">{item.title}</h3>
                                    <p className="text-royal/80 text-sm font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
