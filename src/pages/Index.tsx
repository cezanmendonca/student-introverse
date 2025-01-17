import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Routes, Route } from "react-router-dom";
import Privacy from "./privacy";
import Terms from "./terms";

const Index = () => {
  return (
    <Routes>
      <Route path="*" element={
        <div className="min-h-screen">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      } />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default Index;