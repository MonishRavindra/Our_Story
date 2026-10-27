import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { reasons } from "../content";
import { Eyebrow, PrimaryLink } from "../components/Layout";
import React from "react";

export default function Reasons() {
  const [revealed, setRevealed] = useState([]);
  const toggle = i => setRevealed(old => old.includes(i) ? old.filter(n => n !== i) : [...old, i]);
  return (
    <section className="page-inner reasons-page">
      <Eyebrow>A FEW OF A MILLION REASONS</Eyebrow>
      <h1 className="section-heading">It's not just that I love you.<br /><em>It's a thousand little things.</em></h1>
      <p className="section-intro">Tap each little note. I could write forever, but let's start here.</p>
      <div className="reasons-grid">
        {reasons.map((reason, i) => {
          const open = revealed.includes(i);
          return <motion.button key={reason} className={`reason-card ${open ? "revealed" : ""}`} onClick={() => toggle(i)} whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <span className="reason-number">0{i + 1}</span><span className="reason-icon">{open ? <Heart fill="currentColor" /> : <Sparkles />}</span>
            <AnimatePresence mode="wait"><motion.span key={open ? "open" : "closed"} className="reason-content" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>{open ? reason : "Tap to unfold a little truth"}</motion.span></AnimatePresence>
            <span className="reason-bottom">{open ? "A LITTLE TRUTH, ALWAYS" : "A NOTE FOR YOU"}</span>
          </motion.button>;
        })}
      </div>
      <motion.div className="reasons-quote" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><span>“</span><p>In a world full of temporary things,<br />you are my favourite reason to believe in forever.</p><span className="quote-sparkle">✦</span></motion.div>
      <div className="page-bottom-actions"><PrimaryLink to="/forever">One last thing, my love <Heart size={15} /></PrimaryLink></div>
    </section>
  );
}
