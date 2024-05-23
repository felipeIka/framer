import React, { useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AuroraHero = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color}`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      className="relative grid min-h-screen place-content-center
    overflow-hidden bg-Black px-4 py-24 text-Gray"
      style={{
        backgroundImage,
      }}
    >
      <motion.button
        className="group relative flex w-fit items-center
      gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-Gray transition-colors hover:bg-gray-950/50"
        style={{
          border,
          boxShadow,
        }}
      >
        Start Free Trial
      </motion.button>
    </motion.section>
  );
};

export default AuroraHero;
