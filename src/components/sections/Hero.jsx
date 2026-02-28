import { motion } from 'framer-motion';
import { personalInfo } from '../../data';
import { ChevronRight, Sparkles, Rocket } from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import SplitText from '../animations/SplitText';
import ShinyText from '../animations/ShinyText';
import AnimatedWaves from '../animations/AnimatedWaves';
import heroAvatar from '../../assets/siting.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-body-bg text-evergreen px-6 pt-28 pb-20">

            {/* Premium Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                {/* High-Performance Canvas Waves */}
                <AnimatedWaves />

                {/* Premium Grid Pattern - Updated to luxury blue */}
                <div className="absolute inset-0 opacity-[0.03] z-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0F3057 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                {/* Smooth Glowing Orbs */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-mint-dark rounded-full blur-[130px] mix-blend-multiply"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[10%] -right-[10%] w-[40vw] h-[40vw] bg-emerald-light rounded-full blur-[120px] mix-blend-multiply"
                />
            </div>

            <div className="container mx-auto relative z-10 w-full max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content: Typography focus */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-emerald/20 bg-white/70 backdrop-blur-md shadow-sm"
                        >
                            <Sparkles className="w-4 h-4 text-emerald" />
                            <ShinyText text="Premium Web Solutions" className="text-xs font-black tracking-[0.2em] uppercase" />
                        </motion.div>

                        <h1 className="text-[4rem] sm:text-[5rem] lg:text-[6.5rem] font-black mb-6 tracking-tighter leading-[0.9] text-evergreen">
                            <SplitText text="Design." delay={0} /> <br />
                            <SplitText text="Build." delay={0.2} /> <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald via-royal to-evergreen">
                                    <SplitText text="Scale." delay={0.4} />
                                </span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
                                    className="absolute bottom-4 left-0 h-4 bg-mint-dark/60 -z-10 rounded-full"
                                />
                            </span>
                        </h1>

                        <h3 className="text-xl md:text-2xl font-medium text-royal/80 mb-10 max-w-xl leading-relaxed">
                            Hi, I'm <span className="font-bold text-evergreen border-b-2 border-emerald/30 pb-0.5">{personalInfo.name}</span>.<br /> A passionate {personalInfo.role} turning complex ideas into elegant digital experiences.
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="group relative px-8 py-4 bg-evergreen text-white font-bold rounded-2xl shadow-button hover:shadow-premium transition-all overflow-hidden w-full sm:w-auto text-center flex items-center justify-center gap-3"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-lg">
                                    Explore Work <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald to-royal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-emerald/10 text-evergreen font-bold rounded-2xl shadow-sm hover:shadow-card hover:bg-white hover:border-emerald/30 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center text-lg"
                            >
                                Let's Talk <ChevronRight size={20} className="text-emerald" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Content: Premium Image & Animation */}
                    <div className="relative hidden lg:block h-full min-h-[500px] w-full flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                            className="relative w-full max-w-[360px] mx-auto aspect-[4/5] z-10"
                        >
                            {/* Glow behind image */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-tr from-emerald via-mint to-royal blur-3xl opacity-30 rounded-full translate-y-8"
                            />

                            {/* Glassmorphic Frame */}
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-premium overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                                <img
                                    src={heroAvatar}
                                    alt="Developer Avatar"
                                    className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-700"
                                    style={{ objectPosition: 'center 50%' }}
                                />

                                {/* Overlay Gradient to match theme slightly */}
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-light/30 to-transparent pointer-events-none mix-blend-overlay"></div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[9px] uppercase tracking-[0.4em] font-black text-royal/40">Scroll</span>
                <div className="w-[3px] h-12 bg-mint rounded-full overflow-hidden flex items-start">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-1/2 bg-emerald rounded-full"
                    />
                </div>
            </motion.div>

            {/* Floating Social Media Sidebar */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 backdrop-blur-md bg-white/20 p-3 rounded-full border border-white/20 shadow-premium"
            >
                <a href="https://wa.me/916383456066" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                    <FaWhatsapp size={24} />
                </a>
                <a href={personalInfo.social.find(s => s.name === 'LinkedIn')?.url || '#'} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                    <FaLinkedinIn size={22} />
                </a>
                <a href="https://www.instagram.com/_surya__surya2003/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#E1306C] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                    <FaInstagram size={24} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
