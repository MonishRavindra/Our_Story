import { motion } from "framer-motion";
import { Sparkles, ArrowDown, Heart } from "lucide-react";
import { HER_NAME } from "../content";
import { Eyebrow, PrimaryLink } from "../components/Layout";
import React from "react";

export default function Home() {
  return (
    <section className="hero page-inner">
      <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16 } } }}>
        <motion.div variants={rise} className="hero-kicker"><Sparkles size={14} /> A LITTLE SOMETHING, JUST FOR YOU</motion.div>
        <motion.h1 variants={rise}>To my favourite<br /><em>kind of forever.</em></motion.h1>
        <motion.p variants={rise} className="hero-subtitle">
          Dear KSHAMA Shammanna Manjunath, there are a thousand things I want to tell you. I thought I'd start by making you a little world of our own.
        </motion.p>
        <motion.div variants={rise} className="hero-actions">
          <PrimaryLink to="/letter">Step into our story</PrimaryLink>
          <span className="handwritten">made only for you <Heart size={14} /></span>
        </motion.div>
      </motion.div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.3, ease: "easeOut" }}>
        <div className="hero-image-frame">
          <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=90" alt="A romantic moment at golden hour" />
          <div className="image-vignette" />
          <div className="image-caption"><span>CHAPTER ONE</span><strong>It was always you.</strong></div>
        </div>
        <motion.div className="orbit orbit-one" animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} />
        <motion.div className="orbit orbit-two" animate={{ rotate: -360 }} transition={{ duration: 65, repeat: Infinity, ease: "linear" }} />
        <motion.div className="floating-note" animate={{ y: [0, -10, 0], rotate: [-4, -1, -4] }} transition={{ duration: 5, repeat: Infinity }}>
          <span>♡</span><small>my person</small>
        </motion.div>
      </motion.div>
      <motion.div className="scroll-cue" animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}><ArrowDown size={14} /> THERE'S MORE BELOW</motion.div>
      <div className="hero-bottom-note"><span>01 / 05</span><span>ONE LITTLE UNIVERSE · INFINITE LOVE</span></div>
    </section>
  );
}
const rise = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
