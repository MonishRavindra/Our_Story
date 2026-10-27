import { motion } from "framer-motion";
import React from "react";

export default function Background() {
  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" />
      <div className="star-field" aria-hidden="true">
        {Array.from({ length: 34 }, (_, i) => (
          <motion.span
            className="star"
            key={i}
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 61) % 100}%` }}
            animate={{ opacity: [0.15, 0.9, 0.15], scale: [0.7, 1.25, 0.7] }}
            transition={{ duration: 2.2 + (i % 5), repeat: Infinity, delay: (i % 8) * 0.3 }}
          />
        ))}
      </div>
    </>
  );
}
