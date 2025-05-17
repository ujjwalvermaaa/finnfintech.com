import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BankingPartnersSection from "@/components/BankingPartnersSection";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import { FinnButton } from "@/components/ui/FinnButton";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import EnhancedCTA from "@/components/EnhancedCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-finn-50/50 to-white">
      <HeroSection />
      
      {/* Loan Types Preview Section */}
      <section className="min-h-screen py-32 bg-finn-50 relative overflow-hidden">
        <AnimatedBackground className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <span className="inline-block px-3 py-1 text-sm text-finn-700 bg-finn-100 rounded-full">
                Financial Solutions
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Our <span className="gradient-text">loan offerings</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-finn-700/80 text-xl"
            >
              Discover our range of loan products designed to meet your unique financial needs and goals.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Home Loan",
                description: "Make your dream home a reality with our competitive mortgage rates.",
                icon: "🏠",
                link: "/apply/home-loan"
              },
              {
                title: "Business Loan",
                description: "Fuel your business growth with capital for expansion and operations.",
                icon: "🏢",
                link: "/apply/business-loan"
              },
              {
                title: "Car Loan",
                description: "Drive away in your dream car with our hassle-free auto financing solutions.",
                icon: "🚗",
                link: "/loans#car"
              }
            ].map((loan, index) => (
              <AnimatedCard key={loan.title} className="h-full p-4 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-3xl sm:text-4xl md:text-5xl">{loan.icon}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-finn-800">{loan.title}</h3>
                  <p className="text-finn-700/80 text-base sm:text-lg md:text-lg">{loan.description}</p>
                  <div className="pt-2 sm:pt-4">
                    <Link 
                      to={loan.link}
                      className="flex items-center text-finn-600 font-medium hover:text-finn-700 transition-colors text-base sm:text-lg"
                    >
                      Apply Now
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
          
          <div className="text-center">
            <FinnButton size="lg" asChild gradient glowEffect>
              <Link to="/loans">View All Loan Types</Link>
            </FinnButton>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      
      <CustomerReviewsSection />

      <BankingPartnersSection />
      
      {/* Enhanced CTA Section */}
      <EnhancedCTA />
    </div>
  );
};

export default Index;
