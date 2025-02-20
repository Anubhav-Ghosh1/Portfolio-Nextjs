"use client";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { FC } from "react";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {}

const Button: FC<AnimatedButtonProps> = ({ children, ...props }) => {
  return (
    <motion.button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-9 w-9 active:scale-[0.97] shadow-none transition-all duration-200"
      whileHover={{
        scale: 1, // Slightly enlarge
        borderBottom: "4px solid rgba(0, 0, 0, 0.3)", // Smooth border transition
      }}
      whileTap={{
        scale: 0.97, // Press effect
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      {...props} // Spread additional button props
    >
      {children}
    </motion.button>
  );
};

export default Button;
