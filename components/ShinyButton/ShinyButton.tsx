"use client";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const ShinyButton = () => {
  return (
    <motion.button
      className={`relative rounded-md px-12 py-6 ${styles.radialGradient}`}
      // @ts-ignore
      initial={{ "--x": "-100%", scale: 1 }}
      // @ts-ignore
      animate={{ "--x": "100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <span
        className={`relative block h-full w-full text-2xl font-medium tracking-wide text-neutral-100 ${styles.linearMask}`}
      >
        Start now
      </span>
      <span
        className={`absolute inset-0 block rounded-md p-px ${styles.linearOverlay}`}
      />
    </motion.button>
  );
};

export default ShinyButton;
