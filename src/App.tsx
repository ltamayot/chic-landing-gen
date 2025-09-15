import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MedicinaFuncional from "./pages/MedicinaFuncional";
import MedicinaTradicionalChina from "./pages/MedicinaTradicionalChina";
import PrimeraConsulta from "./pages/PrimeraConsulta";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/medicina-funcional" element={<MedicinaFuncional />} />
          <Route path="/medicina-tradicional-china" element={<MedicinaTradicionalChina />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/primera-consulta" element={<PrimeraConsulta />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
