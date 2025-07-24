import { Route, Routes } from "react-router-dom";
import { SearchPage } from "../pages/SearchPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { JourneyPage } from "../pages/JourneyPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/journey" element={<JourneyPage />} />
    </Routes>
  );
}
