import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, centered = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-16 ${centered ? 'text-center' : 'text-left'} relative flex flex-col ${centered ? 'items-center' : 'items-start'}`}
        >
            <h2 className={`text-4xl md:text-5xl font-bold pb-4 inline-block tracking-tight text-evergreen mix-blend-multiply`}>
                {title}
            </h2>
            {subtitle && (
                <div className="w-16 h-1 bg-gradient-to-r from-emerald to-emerald-light rounded-full mt-2 shadow-sm"></div>
            )}
        </motion.div>
    );
};

export default SectionHeading;
