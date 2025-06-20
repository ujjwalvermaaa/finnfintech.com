import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { LoadingPage } from "./components/LoadingSpinner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { ROUTES } from "./constants";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Loans = lazy(() => import("./pages/Loans"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const HomeLoan = lazy(() => import("./pages/apply/HomeLoan"));
const BusinessLoan = lazy(() => import("./pages/apply/BusinessLoan"));
const PersonalLoan = lazy(() => import("./pages/apply/PersonalLoan"));
const CarLoan = lazy(() => import("./pages/apply/CarLoan"));
const EMICalculatorPage = lazy(() => import("./pages/EMICalculator"));

// Configure React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (garbage collection time)
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error && typeof error === 'object' && 'status' in error) {
          const status = (error as any).status;
          if (status >= 400 && status < 500) {
            return false;
          }
        }
        return failureCount < 3;
      },
    },
  },
});

// Loading component for Suspense
const PageLoader = () => <LoadingPage text="Loading page..." />;

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path={ROUTES.home} element={<Index />} />
                    <Route path={ROUTES.loans} element={<Loans />} />
                    <Route path={ROUTES.about} element={<About />} />
                    <Route path={ROUTES.contact} element={<Contact />} />
                    <Route path={ROUTES.apply.homeLoan} element={<HomeLoan />} />
                    <Route path={ROUTES.apply.businessLoan} element={<BusinessLoan />} />
                    <Route path={ROUTES.apply.personalLoan} element={<PersonalLoan />} />
                    <Route path={ROUTES.apply.carLoan} element={<CarLoan />} />
                    <Route path={ROUTES.calculator} element={<EMICalculatorPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <WhatsAppButton phoneNumber="+919599156255" />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
