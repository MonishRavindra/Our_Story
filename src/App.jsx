import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Letter from "./pages/Letter";
import Memories from "./pages/Memories";
import Reasons from "./pages/Reasons";
import Forever from "./pages/Forever";
import React from "react";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/forever" element={<Forever />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
