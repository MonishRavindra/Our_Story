import { motion } from "framer-motion";
import React from "react";

export default function Hearts({ count = 12 }) {
  return (
    <div className="hearts-layer" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <motion.span
          key={i}
          className="floating-heart"
          style={{ left: `${(i * 19 + 7) % 100}%`, fontSize: `${10 + (i % 4) * 5}px` }}
          initial={{ y: "110vh", opacity: 0, rotate: -20 }}
          animate={{ y: "-15vh", opacity: [0, 0.7, 0.6, 0], rotate: 20 }}
          transition={{ duration: 10 + (i % 5) * 2, repeat: Infinity, delay: i * 0.7, ease: "linear" }}
        >♡</motion.span>
      ))}
    </div>
  );
}
