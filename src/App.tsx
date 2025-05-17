import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Loans from "./pages/Loans";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeLoan from "./pages/apply/HomeLoan";
import BusinessLoan from "./pages/apply/BusinessLoan";
import PersonalLoan from "./pages/apply/PersonalLoan";
import CarLoan from "./pages/apply/CarLoan";
import WhatsAppButton from "./components/WhatsAppButton";
import EMICalculatorPage from "./pages/EMICalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply/home-loan" element={<HomeLoan />} />
              <Route path="/apply/business-loan" element={<BusinessLoan />} />
              <Route path="/apply/personal-loan" element={<PersonalLoan />} />
              <Route path="/apply/auto-loan" element={<CarLoan />} />
              <Route path="/emi-calculator" element={<EMICalculatorPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton phoneNumber="+919599156255" />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
