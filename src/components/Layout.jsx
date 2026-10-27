import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";
import Background from "./Background";
import Hearts from "./Hearts";
import AudioToggle from "./AudioToggle";
import React from "react";

const links = [
  { to: "/", label: "Beginning" },
  { to: "/letter", label: "A letter" },
  { to: "/memories", label: "Our story" },
  { to: "/reasons", label: "Why you" },
  { to: "/forever", label: "Forever" }
];

export default function Layout({ children }) {
  const location = useLocation();
  return (
    <div className="app-shell">
      <Background />
      <Hearts count={10} />
      <header className="site-header">
        <Link to="/" className="brand"><span className="brand-mark"><Heart size={15} fill="currentColor" /></span> Princess 👸🏻</Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(link => (
            <Link key={link.to} to={link.to} className={location.pathname === link.to ? "nav-link active" : "nav-link"}>
              {link.label}
            </Link>
          ))}
        </nav>
        <AudioToggle />
      </header>
      <motion.main
        key={location.pathname}
        className="page"
        initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <footer className="site-footer">
        <span>MADE WITH ALL MY HEART</span>
        <span className="footer-heart">✦</span>
        <span>AND A LITTLE BIT OF MAGIC</span>
      </footer>
      <div className="mobile-nav">
        {links.map(link => (
          <Link key={link.to} to={link.to} className={location.pathname === link.to ? "mobile-nav-link active" : "mobile-nav-link"}>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Eyebrow({ children }) {
  return <div className="eyebrow"><span />{children}<span /></div>;
}

export function PrimaryLink({ to, children }) {
  return <Link className="primary-link" to={to}>{children}<ArrowUpRight size={16} /></Link>;
}
