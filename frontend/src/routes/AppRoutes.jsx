import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Upload from "../components/Upload";
import AskAI from "../components/AskAI";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/upload" element={<Upload />} />

        <Route path="/ask" element={<AskAI />} />

      </Routes>

    </BrowserRouter>
  );
}