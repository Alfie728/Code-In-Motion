import { useMemo, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";
import styles from "./index.module.css";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<number | undefined>(undefined);
  const [ref, bounds] = useMeasure();

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className={styles.heading}>This is step one</h2>
            <p>
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className={styles.heading}>This is step two</h2>
            <p>
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className={styles.heading}>This is step three</h2>
            <p>
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} style={{ width: 128 }} />
              <div className={styles.skeleton} style={{ width: 224 }} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
    }
  }, [currentStep]);

  return (
    <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0 }}>
      <motion.div
        animate={{ height: bounds.height }}
        className={styles["multi-step-wrapper"]}
      >
        <div className={styles["multi-step-inner"]} ref={ref}>
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              variants={variants}
              initial="initial"
              animate="active"
              exit="exit"
              custom={direction}
            >
              {content}
            </motion.div>
          </AnimatePresence>
          <motion.div layout className={styles.actions}>
            <button
              className={`${styles["secondary-button"]} disabled:cursor-not-allowed disabled:opacity-50`}
              disabled={currentStep === 0}
              onClick={() => {
                if (currentStep === 0) {
                  return;
                }
                setDirection(-1);
                setCurrentStep((prev) => prev - 1);
              }}
            >
              Back
            </button>
            <button
              className={`${styles["primary-button"]} disabled:cursor-not-allowed disabled:opacity-50`}
              disabled={currentStep === 2}
              onClick={() => {
                if (currentStep === 2) {
                  setCurrentStep(0);
                  setDirection(-1);
                  return;
                }
                setDirection(1);
                setCurrentStep((prev) => prev + 1);
              }}
            >
              Continue
            </button>
          </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}

const variants = {
  initial: (direction: number) => {
    return { x: `${110 * direction}%`, opacity: 0 };
  },
  active: { x: "0%", opacity: 1 },
  exit: (direction: number) => {
    return { x: `${-110 * direction}%`, opacity: 0 };
  },
};
