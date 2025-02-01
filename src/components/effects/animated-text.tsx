import { motion } from "motion/react";

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom easing curve for smoother motion
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(2px)",
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {text.split("").map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
