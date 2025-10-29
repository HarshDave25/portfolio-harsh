import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import HeaderCard from "@/components/HeaderCard";
import FontToggle from "@/components/FontToggle";

// 🧠 Lazy-loaded pages for faster initial load
const Index = lazy(() => import("@/pages/Index"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// ⚙️ React Query Client for global data fetching
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* ✅ Toast notifications */}
        <Toaster />
        <Sonner />

        {/* ✅ Main Router */}
        <BrowserRouter>
          <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center relative font-pixel text-white">
            
            {/* 🎛 Font toggle button (top-right usually) */}
            <FontToggle />

            {/* 🧭 Header/navigation section */}
            <HeaderCard />

            {/* 🚏 Page routes */}
            <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
