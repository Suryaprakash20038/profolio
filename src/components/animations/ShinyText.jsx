import { motion } from 'framer-motion';

const ShinyText = ({ text, className = '' }) => {
    return (
        <motion.div
            className={`inline-block relative overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-emerald via-royal to-evergreen ${className}`}
            initial={{ backgroundPosition: '200% center' }}
            animate={{ backgroundPosition: '-200% center' }}
            transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'linear',
            }}
            style={{
                backgroundSize: '200% auto',
            }}
        >
            {text}
        </motion.div>
    );
};

export default ShinyText;
