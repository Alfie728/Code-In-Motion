"use client";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const ShinyButton = () => {
  return (
    <motion.button
      className={`px-6 py-2 rounded-md relative ${styles.radialGradient}`}
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
        className={`text-neutral-100 tracking-wide font-light h-full w-full block relative ${styles.linearMask}`}
      >
        Start now
      </span>
      <span
        className={`block absolute inset-0 rounded-md p-px ${styles.linearOverlay}`}
      />
    </motion.button>
  );
};

export default ShinyButton;
