import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Consent from "./pages/Consent";
import Metadata from "./pages/Metadata";
import Simulation from "./pages/Simulation";
import ScenarioSimulation from "./pages/ScenarioSimulation";
import Completion from "./pages/Completion";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import IoB from "./pages/IoB";
import DataFem from "./pages/DataFem";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/metadata" element={<Metadata />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/scenario" element={<ScenarioSimulation />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
