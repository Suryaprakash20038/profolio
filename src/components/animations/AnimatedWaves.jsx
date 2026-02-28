import { useEffect, useRef } from 'react';

const AnimatedWaves = ({ className = "" }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            // Handle device pixel ratio for sharp rendering on retina displays
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };

        window.addEventListener('resize', resizeCanvas, false);
        resizeCanvas();

        let time = 0;

        const drawWaves = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            ctx.clearRect(0, 0, width, height);

            // Horizontal gradient imitating the reference image (Red -> Orange -> Yellow -> Green -> Blue)
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, 'rgba(239, 71, 111, 0.25)');    // Red/Pink
            gradient.addColorStop(0.25, 'rgba(247, 140, 107, 0.25)'); // Orange
            gradient.addColorStop(0.5, 'rgba(255, 209, 102, 0.25)');  // Yellow
            gradient.addColorStop(0.75, 'rgba(6, 214, 160, 0.25)');   // Green
            gradient.addColorStop(1, 'rgba(17, 138, 178, 0.25)');     // Blue

            ctx.strokeStyle = gradient;
            // 0.8 to provide the string-like, fine-line texture from your image without being overly thick or heavy
            ctx.lineWidth = 0.8;

            // High number of lines to create the ribbon mesh
            const linesCount = 60;

            for (let i = 0; i < linesCount; i++) {
                ctx.beginPath();

                for (let x = 0; x <= width; x += 15) {
                    // Normalize x from 0 to 1 across the screen
                    const nx = x / width;

                    // Create the ribbon effect connecting points using two sine waves with phase shifting based on 'i'
                    const y = (height / 2)
                        + Math.sin(nx * Math.PI * 3 + time * 0.008 + (i * 0.05)) * (140 + i * 1.5)
                        + Math.cos(nx * Math.PI * 2 - time * 0.012) * 90;

                    if (x === 0) {
                        ctx.moveTo(x, y); // Start path at correct pos
                    } else {
                        ctx.lineTo(x, y); // Connect points
                    }
                }
                ctx.stroke(); // Renders the lines instead of filled blocks
            }

            time += 1;
            animationFrameId = requestAnimationFrame(drawWaves);
        };

        drawWaves();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none z-0 ${className}`}
        />
    );
};

export default AnimatedWaves;
