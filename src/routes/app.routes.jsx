import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Chacaras from "@/pages/Chacaras";
import SpacePage from "@/pages/SpacePage";
import NotFound from "@/pages/NotFound";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chacaras" element={<Chacaras />} />
      <Route path="/chacara/:id" element={<SpacePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
