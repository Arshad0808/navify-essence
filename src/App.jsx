
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RawMaterials from "./pages/RawMaterials";
import Suppliers from "./pages/Suppliers";
import Clients from "./pages/Clients";
import Transactions from "./pages/Transactions";
import Commissions from "./pages/Commissions";
import Reports from "./pages/Reports";
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
          <Route path="/raw-materials" element={<RawMaterials />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
