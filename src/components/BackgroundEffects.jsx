import React, { useEffect, useRef } from 'react';

const BackgroundEffects = ({ theme }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const particles = [];
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 20 : 40;

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = -20;
                this.size = Math.random() * 8 + 4;
                this.speedX = Math.random() * 2 - 1 + (theme === 'ghost' ? 2 : 1);
                this.speedY = Math.random() * 1 + 1;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = theme === 'zen' ? '#e59db1' : '#bc2a4d';
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                this.rotation += this.rotationSpeed;

                if (this.y > canvas.height || this.x > canvas.width || this.x < -20) {
                    this.reset();
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.beginPath();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;

                ctx.moveTo(0, 0);
                ctx.quadraticCurveTo(this.size, -this.size, this.size * 2, 0);
                ctx.quadraticCurveTo(this.size, this.size, 0, 0);
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <div className="bg-effects-wrapper">
            <canvas ref={canvasRef} className="bg-canvas" />
            <div className="bg-texture" />
            <div className="bg-gradient" />
        </div>
    );
};

export default BackgroundEffects;
