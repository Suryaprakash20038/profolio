import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Magnet = ({ children, padding = 100, disabled = false, magnetStrength = 2, className = '' }) => {
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const magnetRef = useRef(null);

    useEffect(() => {
        if (disabled) {
            setPosition({ x: 0, y: 0 });
            return;
        }

        const handleMouseMove = (e) => {
            if (magnetRef.current) {
                const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
                const centerX = left + width / 2;
                const centerY = top + height / 2;

                const distX = Math.abs(centerX - e.clientX);
                const distY = Math.abs(centerY - e.clientY);

                if (distX < width / 2 + padding && distY < height / 2 + padding) {
                    setIsActive(true);
                    const offsetX = (e.clientX - centerX) / magnetStrength;
                    const offsetY = (e.clientY - centerY) / magnetStrength;
                    setPosition({ x: offsetX, y: offsetY });
                } else {
                    setIsActive(false);
                    setPosition({ x: 0, y: 0 });
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [padding, disabled, magnetStrength]);

    return (
        <motion.div
            ref={magnetRef}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`inline-block ${className}`}
        >
            <motion.div
                animate={{ x: position.x / 2, y: position.y / 2 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default Magnet;
