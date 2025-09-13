import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { BirthdayVerification } from "./pages/BirthdayVerification";
import { MessagePage } from "./pages/MessagePage";
import { MagicalGarden } from "./pages/MagicalGarden";
import { MemoryGallery } from "./pages/MemoryGallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/birthday-verification" element={<BirthdayVerification />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/garden" element={<MagicalGarden />} />
          <Route path="/gallery" element={<MemoryGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
