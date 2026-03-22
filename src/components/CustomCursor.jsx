import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const springConfig = { damping: 20, stiffness: 200 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
        };

        const handleHover = (e) => {
            const target = e.target;
            if (target.closest('a') || target.closest('button') || target.classList.contains('interactive')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="custom-cursor"
                style={{
                    left: cursorX,
                    top: cursorY,
                    scale: isHovered ? 2 : 1,
                }}
                animate={{
                    backgroundColor: isHovered ? 'var(--accent)' : 'var(--accent)',
                    opacity: 1
                }}
            />
            <motion.div
                className="custom-cursor-outline"
                style={{
                    left: cursorX,
                    top: cursorY,
                    translateX: -10,
                    translateY: -10,
                    scale: isHovered ? 1.5 : 1,
                }}
                animate={{
                    borderColor: isHovered ? 'var(--accent)' : 'var(--accent)',
                    opacity: 0.5
                }}
            />
        </>
    );
};

export default CustomCursor;
