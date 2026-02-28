import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, centered = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className={`mb-16 ${centered ? 'text-center' : 'text-left'} relative flex flex-col ${centered ? 'items-center' : 'items-start'}`}
        >
            <h2 className={`text-4xl md:text-5xl font-black pb-4 inline-block tracking-tighter text-evergreen mix-blend-multiply`}>
                {title}
            </h2>
            {subtitle && (
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '4rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    className="h-1 bg-gradient-to-r from-emerald to-emerald-light rounded-full mt-2 shadow-[0_0_15px_rgba(0,136,169,0.5)]"
                />
            )}
        </motion.div>
    );
};

export default SectionHeading;
