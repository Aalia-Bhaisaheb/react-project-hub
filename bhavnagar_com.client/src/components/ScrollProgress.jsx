import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <motion.div
            data-testid="scroll-progress"
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-bn-gold via-bn-goldSoft to-bn-gold z-[60] origin-left"
        />
    );
};