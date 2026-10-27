import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowRight, MailOpen } from "lucide-react";
import { HER_NAME, YOUR_NAME, loveLetter } from "../content";
import { Eyebrow, PrimaryLink } from "../components/Layout";
import React from "react";

export default function Letter() {
  const [opened, setOpened] = useState(false);
  return (
    <section className="page-inner centered-page letter-page">
      <Eyebrow>WORDS I KEEP IN MY HEART</Eyebrow>
      <motion.h1 className="section-heading" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>A letter, <em>just for you.</em></motion.h1>
      <p className="section-intro">Some feelings deserve more than a text message.</p>
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.button key="envelope" className="envelope-card" onClick={() => setOpened(true)} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.88, y: -20 }} whileHover={{ y: -7 }} whileTap={{ scale: 0.97 }}>
            <div className="envelope-glow" /><MailOpen size={40} strokeWidth={1} /><span className="envelope-label">A LETTER FOR {HER_NAME.toUpperCase()}</span><strong>Open when you're ready</strong><span className="envelope-hint">click to open · with love, {YOUR_NAME}</span><div className="seal"><Heart size={18} fill="currentColor" /></div>
          </motion.button>
        ) : (
          <motion.article key="letter" className="letter-paper" initial={{ opacity: 0, rotateX: 12, y: 25 }} animate={{ opacity: 1, rotateX: 0, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="paper-top">✦ &nbsp; TO MY DEAREST {HER_NAME.toUpperCase()} &nbsp; ✦</div>
            <h2>My love,</h2>
            {loveLetter.map((line, i) => <motion.p key={line} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.23 }}>{line}</motion.p>)}
            <p className="letter-signoff">All my love, always,</p><div className="signature">{YOUR_NAME} <Heart size={17} fill="currentColor" /></div>
          </motion.article>
        )}
      </AnimatePresence>
      <div className="page-bottom-actions"><PrimaryLink to="/memories">Let's remember us <ArrowRight size={15} /></PrimaryLink></div>
    </section>
  );
}
