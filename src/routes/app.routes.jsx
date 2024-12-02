import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Chacaras from "@/pages/Chacaras";
import NotFound from "@/pages/NotFound";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chacaras" element={<Chacaras />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
