import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";

import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import AmenitiesPage from "./pages/AmenitiesPage";
import LocationsPage from "./pages/LocationsPage";
import HouseRulesPage from "./pages/HouseRulesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/house-rules" element={<HouseRulesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Cloudflare SPA fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
        <WhatsAppButton />

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "white",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "12px"
            }
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
