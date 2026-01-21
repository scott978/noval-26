import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WhyChooseUs from "./pages/WhyChooseUs";
import WhoIsNovale from "./pages/WhoIsNovale";
import BathroomProjects from "./pages/BathroomProjects";
import BathroomRenovations from "./pages/BathroomRenovations";
import KitchenRenovations from "./pages/KitchenRenovations";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import AreasWeService from "./pages/AreasWeService";
import Process from "./pages/Process";
import Accreditations from "./pages/Accreditations";
import FAQs from "./pages/FAQs";
import BathroomTrends from "./pages/BathroomTrends";
import Suppliers from "./pages/Suppliers";
import Careers from "./pages/Careers";
import Testimonials from "./pages/Testimonials";
import Promotions from "./pages/Promotions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/who-is-novale" element={<WhoIsNovale />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/bathroom-projects" element={<BathroomProjects />} />
          <Route path="/bathroom-renovations" element={<BathroomRenovations />} />
          <Route path="/kitchen-renovations" element={<KitchenRenovations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/process" element={<Process />} />
          <Route path="/areas-we-service" element={<AreasWeService />} />
          <Route path="/accreditations" element={<Accreditations />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/bathroom-trends" element={<BathroomTrends />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
