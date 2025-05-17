import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const customerReviews = [
  {
    name: "Amit Kumar",
    role: "Business Owner",
    image: "/reviews/amit-kumar.jpg",
    review: "FinnFintech made my business loan process incredibly smooth. Their quick processing and transparent terms helped me expand my business without any hassle.",
    rating: 5,
    loanType: "Business Loan"
  },
  {
    name: "Sneha Reddy",
    role: "Software Engineer",
    image: "/reviews/sneha-reddy.jpg",
    review: "I got my home loan approved within days! The digital process was seamless, and their customer service team was extremely helpful throughout.",
    rating: 5,
    loanType: "Home Loan"
  },
  {
    name: "Rajesh Mehta",
    role: "Doctor",
    image: "/reviews/rajesh-mehta.jpg",
    review: "The best part about FinnFintech is their transparency. No hidden charges, clear terms, and competitive interest rates. Highly recommended!",
    rating: 5,
    loanType: "Personal Loan"
  },
  {
    name: "Priya Singh",
    role: "Entrepreneur",
    image: "/reviews/priya-singh.jpg",
    review: "Their EMI calculator helped me plan my finances better. The entire loan process was hassle-free and professional.",
    rating: 5,
    loanType: "Car Loan"
  }
];

const CustomerReviewsSection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentReviewIndex((prev) => 
      prev === 0 ? customerReviews.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentReviewIndex((prev) => 
      (prev + 1) % customerReviews.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] bg-finn-50/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] bg-finn-100/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 text-sm md:text-base text-finn-700 bg-finn-100/50 rounded-full">
              Customer Stories
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 md:mb-6"
          >
            What Our <span className="text-finn-500">Customers Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-finn-700/80 max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who have transformed their financial journey with FinnFintech
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[300px] md:min-h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentReviewIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 px-4 md:px-0"
            >
              <div className="bg-gradient-to-br from-white to-finn-50/30 rounded-xl md:rounded-2xl p-6 md:p-12 shadow-lg">
                <div className="relative">
                  <div className="absolute -top-2 -right-2 text-finn-500/20">
                    <Quote size={32} className="transform rotate-180 hidden sm:block" />
                    <Quote size={48} className="transform rotate-180 sm:hidden" />
                  </div>
                  
                  <div className="text-base sm:text-lg md:text-xl text-finn-700/90 italic mb-6 md:mb-8 relative z-10">
                    "{customerReviews[currentReviewIndex].review}"
                  </div>
                  
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-finn-100 bg-white">
                      <img
                        src={customerReviews[currentReviewIndex].image}
                        alt={customerReviews[currentReviewIndex].name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            customerReviews[currentReviewIndex].name
                          )}&background=60A5FA&color=ffffff&size=100`;
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-finn-800">
                        {customerReviews[currentReviewIndex].name}
                      </h4>
                      <p className="text-sm md:text-base text-finn-600">
                        {customerReviews[currentReviewIndex].role}
                      </p>
                      <div className="flex items-center gap-1 mt-1 md:mt-2">
                        {[...Array(customerReviews[currentReviewIndex].rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-finn-500 text-finn-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 md:mt-6 md:pt-6 border-t border-finn-100/50">
                    <span className="text-sm md:text-base text-finn-600">
                      {customerReviews[currentReviewIndex].loanType} Customer
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 -right-2 md:-left-4 md:-right-4 flex justify-between z-20">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-finn-600 hover:text-finn-700 transition-all hover:scale-110 hover:bg-white hover:shadow-xl active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} className="md:hidden" />
              <ChevronLeft size={24} className="hidden md:block" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-finn-600 hover:text-finn-700 transition-all hover:scale-110 hover:bg-white hover:shadow-xl active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight size={20} className="md:hidden" />
              <ChevronRight size={24} className="hidden md:block" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
            {customerReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentReviewIndex ? 1 : -1);
                  setCurrentReviewIndex(index);
                }}
                className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentReviewIndex
                    ? "w-6 md:w-8 bg-finn-500"
                    : "bg-finn-200 hover:bg-finn-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection; 