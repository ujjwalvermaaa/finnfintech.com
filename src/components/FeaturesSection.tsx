import { motion } from "framer-motion";
import { Clock, Shield, Currency } from "lucide-react";
import { AnimatedCard } from "./ui/AnimatedCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "Quick Processing",
      description: "Get your loan approved in as little as 24 hours with our streamlined application process.",
      icon: Clock,
    },
    {
      title: "100% Secure",
      description: "Rest assured your data is protected with our bank-level security measures and encryption.",
      icon: Shield,
    },
    {
      title: "Best Rates",
      description: "Enjoy competitive interest rates tailored to your financial situation and credit profile.",
      icon: Currency,
    },
  ];

  return (
    <section className="min-h-screen py-20 sm:py-32 bg-gradient-to-b from-white to-finn-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-finn-100 text-finn-600 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-finn-800 mb-4">
            Features that make us <span className="gradient-text">stand out</span>
          </h2>
          <p className="text-finn-600 text-base sm:text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with exceptional customer service to provide you with the best financial experience possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <AnimatedCard key={feature.title} className="h-full p-4 sm:p-6 md:p-8">
              <div className="flex flex-col items-start">
                <div className="mb-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-finn-100 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-finn-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-finn-800 mb-2">{feature.title}</h3>
                <p className="text-finn-600 text-base sm:text-lg">{feature.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
