import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Moon,
  Coffee,
  Flower2,
  Stars,
  Gift,
  Mail,
  X,
  ArrowUpRight,
} from "lucide-react";
import { PrimaryLink } from "../components/Layout";
import { ArrowRight } from "lucide-react";

const keepsakes = [
  {
    icon: Heart,
    symbol: "♡",
    category: "THE LITTLE THINGS",
    title: "The way you smile",
    note: "Somehow, even an ordinary day feels special when there's a smile like yours in it.",
    color: "pink",
    stamp: "01",
  },
  {
    icon: Coffee,
    symbol: "☕",
    category: "OUR KIND OF MAGIC",
    title: "One more minute",
    note: "A few more minutes together will always be worth being a little late for everything else.",
    color: "peach",
    stamp: "02",
  },
  {
    icon: Moon,
    symbol: "☾",
    category: "MY FAVOURITE PLACE",
    title: "Talking till late",
    note: "When the conversation is with you, even midnight arrives a little too soon.",
    color: "lilac",
    stamp: "03",
  },
  {
    icon: Flower2,
    symbol: "✿",
    category: "A SOFT KIND OF LOVE",
    title: "The smallest details",
    note: "It's the little things that make someone unforgettable. With you, there are a million of them.",
    color: "sage",
    stamp: "04",
  },
  {
    icon: Stars,
    symbol: "✧",
    category: "MY HAPPY THOUGHT",
    title: "Thinking of you",
    note: "In the middle of a busy day, a little thought of you can make everything feel lighter.",
    color: "butter",
    stamp: "05",
  },
  {
    icon: Gift,
    symbol: "♡",
    category: "MY FAVOURITE GIFT",
    title: "Having you here",
    note: "Not every beautiful thing needs a ribbon. Some of the best gifts are simply people.",
    color: "rose",
    stamp: "06",
  },
];


export default function Memories() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <main className="memories-v2">
      <div className="memories-v2-glow memories-v2-glow-one" />
      <div className="memories-v2-glow memories-v2-glow-two" />

      <section className="memories-v2-inner">
        <motion.div
          className="memories-v2-heading"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="memories-v2-eyebrow">
            <Sparkles size={13} />
            A TINY COLLECTION OF AFFECTION
            <Sparkles size={13} />
          </span>

          <h1>
            Little things,
            <br />
            <em>big feelings.</em>
          </h1>

          <p>
            Not every beautiful memory needs a photograph.
            Some are just little feelings we'd like to keep forever.
          </p>
        </motion.div>

        <div className="memories-v2-instruction">
          <span className="memories-v2-line" />
          <span>OPEN A LITTLE KEEPSAKE</span>
          <span className="memories-v2-line" />
        </div>

        <div className="memories-v2-grid">
          {keepsakes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.stamp}
                type="button"
                className={`memories-v2-card tone-${item.color}`}
                onClick={() => setOpenCard(item)}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7, rotate: index % 2 ? 1 : -1 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Open ${item.title}`}
              >
                <span className="memories-v2-card-number">
                  NO. {item.stamp}
                </span>

                <span className="memories-v2-sticker">
                  <span className="memories-v2-sticker-symbol">
                    {item.symbol}
                  </span>
                  <Icon size={20} strokeWidth={1.4} />
                </span>

                <span className="memories-v2-card-category">
                  {item.category}
                </span>

                <span className="memories-v2-card-title">
                  {item.title}
                </span>

                <span className="memories-v2-card-bottom">
                  <span>A little note for you</span>
                  <ArrowUpRight size={15} />
                </span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          className="memories-v2-footer-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="memories-v2-footer-heart">♡</span>
          <p>
            If I could keep a thousand little things,
            <br />
            I'd still choose every little thing about you.
          </p>
          <span className="memories-v2-footer-caption">
            MADE WITH A LITTLE EXTRA LOVE
          </span>
        </motion.div>
      </section>

      <AnimatePresence>
        {openCard && (
          <motion.div
            className="memories-v2-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenCard(null)}
          >
            <motion.div
              className={`memories-v2-letter tone-${openCard.color}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="memories-v2-letter-title"
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ type: "spring", damping: 23, stiffness: 260 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="memories-v2-close"
                onClick={() => setOpenCard(null)}
                aria-label="Close keepsake"
                type="button"
              >
                <X size={18} />
              </button>

              <span className="memories-v2-letter-top">
                A LITTLE SOMETHING FOR YOU
              </span>

              <div className="memories-v2-letter-sticker">
                <Heart size={28} strokeWidth={1.2} />
              </div>

              <span className="memories-v2-letter-category">
                {openCard.category}
              </span>

              <h2 id="memories-v2-letter-title">{openCard.title}</h2>

              <p>{openCard.note}</p>

              <div className="memories-v2-letter-signoff">
                <span>always,</span>
                <Heart size={16} fill="currentColor" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
  className="page-bottom-actions memories-next-button"
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9 }}
>
  <PrimaryLink to="/reasons">
    A few more things I love about you
    <ArrowRight size={16} />
  </PrimaryLink>
</motion.div>
    </main>
  );
}