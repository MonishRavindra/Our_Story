import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, RotateCcw } from "lucide-react";
import { HER_NAME, YOUR_NAME } from "../content";
import { Eyebrow } from "../components/Layout";
import React from "react";

function Confetti() {
  return <div className="confetti" aria-hidden="true">{Array.from({ length: 70 }, (_, i) => <motion.i key={i} style={{ left: `${(i * 47) % 100}%`, background: ["#d7b477", "#b85c70", "#f5d9dc", "#f4e8c9"][i % 4] }} initial={{ y: "-10vh", rotate: 0, opacity: 1 }} animate={{ y: "110vh", rotate: 720, opacity: [1, 1, 0] }} transition={{ duration: 3 + (i % 4), delay: (i % 17) * 0.08, repeat: Infinity, repeatDelay: 3 }} />)}</div>;
}

export default function Forever() {
  const [answer, setAnswer] = useState(false);
  const [showNote, setShowNote] = useState(false);
  return (
    <section className={`page-inner proposal-page ${answer ? "proposal-accepted" : ""}`}>
      {answer && <Confetti />}
      <motion.div className="proposal-halo" animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.9, 0.55] }} transition={{ duration: 4, repeat: Infinity }} />
      <div className="proposal-content">
        <Eyebrow>THE MOST IMPORTANT QUESTION</Eyebrow>
        <motion.div className="ring-illustration" animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="ring-glow" /><div className="ring-stone">✦</div><div className="ring-band" /><Sparkles className="ring-sparkle sparkle-a" /><Sparkles className="ring-sparkle sparkle-b" />
        </motion.div>
        <AnimatePresence mode="wait">
          {!answer ? (
            <motion.div key="question" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94 }}>
              <p className="proposal-prelude">{HER_NAME}, after all these little things…</p>
              <h1 className="proposal-question">Would you like to marry me and <br /><em> be my forever?</em></h1>
              <p className="proposal-subtitle">For every sunrise we haven't seen, every place we haven't been, and every ordinary day waiting to become extraordinary.</p>
              <div className="proposal-actions"><button className="yes-button" onClick={() => setAnswer(true)}><Heart size={17} fill="currentColor" /> Yes, my forever</button><button className="soft-button" onClick={() => setShowNote(v => !v)}>I need a moment ♡</button></div>
              {showNote && <motion.p className="gentle-note" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Take all the time you need. This question comes with all my love, and no pressure. ♡</motion.p>}
            </motion.div>
          ) : (
            <motion.div key="accepted" className="accepted-message" initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 15 }}>
              <div className="accepted-heart"><Heart size={30} fill="currentColor" /></div>
              <p className="proposal-prelude">THE BEGINNING OF OUR NEXT CHAPTER</p>
              <h1 className="proposal-question">Here's to <em>forever.</em></h1>
              <p className="proposal-subtitle">If this is the beginning of our forever, I promise to keep choosing you — in the big moments, the little moments, and all the moments in between.</p>
              <p className="signature proposal-signature">With all my love, {YOUR_NAME}</p>
              <button className="soft-button replay-button" onClick={() => { setAnswer(false); setShowNote(false); }}><RotateCcw size={14} /> Relive this moment</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className="proposal-footnote">NO PERFECT WORDS. JUST A HEART THAT CHOOSES YOU.</p>
    </section>
  );
}
