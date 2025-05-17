import { motion } from "framer-motion";
import { FinnButton } from "./ui/FinnButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Calculator } from "lucide-react";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  
  const textRevealVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <>
      {/* Mobile Hero Section */}
      <div className="block md:hidden w-full min-w-0 max-w-full box-border bg-gradient-to-b from-finn-50/80 to-white/90">
        <div className="flex flex-col items-center w-full px-3 pt-8 pb-4">
          <img src="/logo.png" alt="Finn Fintech Logo" className="h-20 w-20 mb-2" style={{objectFit: 'contain'}} />
          <span className="font-display font-bold text-base uppercase tracking-tighter whitespace-nowrap text-finn-800 mb-1" style={{lineHeight: 1, letterSpacing: '-0.04em'}}>FINN FINTECH PVT LTD</span>
          <span className="text-xs text-finn-700 bg-finn-100 rounded-full px-3 py-1 mb-4">● Future of finance is here</span>
          <h1 className="text-center font-display font-bold text-2xl leading-tight mb-2 break-words">
            Simplify your finances<br />with<br />
            <span className="gradient-text block text-green-600 text-2xl font-bold mt-1">innovative loan<br />solutions</span>
          </h1>
          <p className="text-center text-finn-800/80 text-sm mt-3 mb-6 px-1">
            Experience seamless financial services with competitive rates, quick processing time, and 100% secure transactions tailored to your unique needs.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <a href="/loans" className="w-full">
              <button className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg shadow-md">Explore Loans</button>
            </a>
            <a href="/emi-calculator" className="w-full">
              <button className="w-full border border-green-500 text-green-700 font-semibold py-3 rounded-lg">EMI Calculator</button>
            </a>
          </div>
        </div>
      </div>
      {/* Desktop Hero Section (unchanged) */}
      <div className="hidden md:block">
        <div className="relative h-screen flex items-center pb-16 pt-28 overflow-hidden box-border w-full max-w-full min-h-0 min-w-0">
          {/* Overlapping Large Logo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[60] pointer-events-none select-none flex flex-col items-center w-full max-w-full">
            <img 
              src="/logo.png" 
              alt="Finn Fintech Logo Large" 
              className="h-32 w-32 lg:h-56 lg:w-56"
              style={{objectFit: 'contain'}}
            />
            <span className="lg:hidden font-display font-bold text-base sm:text-lg md:text-xl uppercase tracking-tighter whitespace-nowrap px-0.5 text-finn-800 mt-0 mb-0 lg:mt-4 lg:mb-4" style={{lineHeight: 1, letterSpacing: '-0.04em', maxWidth: '100vw', overflowX: 'auto'}}>FINN FINTECH PVT LTD</span>
          </div>
          {/* Enhanced gradient background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Main background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-finn-50/80 to-white/90"></div>
            
            {/* Large main gradient blob */}
            <motion.div 
              className="absolute -top-40 -right-40 w-[70rem] h-[70rem] bg-finn-200/50 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.6, 0.5]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Secondary blob - top left */}
            <motion.div 
              className="absolute -top-20 left-[10%] w-60 h-60 bg-finn-200/30 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Bottom right blob */}
            <motion.div 
              className="absolute bottom-[5%] right-[10%] w-96 h-96 bg-finn-100/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Bottom left greenish blob */}
            <motion.div 
              className="absolute bottom-[8%] left-[15%] w-80 h-80 bg-green-100/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
          
          <div className="container mx-auto px-2 sm:px-4 relative z-10 mt-20 w-full min-h-0 min-w-0 space-y-0 box-border overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full min-w-0 overflow-visible">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center lg:text-left space-y-6 mt-0 sm:mt-2 md:mt-4 lg:mt-0 w-full min-w-0 overflow-visible"
              >
                <motion.div 
                  className="inline-flex items-center rounded-full bg-finn-100 px-3 py-1 text-sm text-finn-800 mt-0 mb-0 lg:mt-4 lg:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span 
                    className="flex h-2 w-2 rounded-full bg-finn-500 mr-2"
                    animate={{ scale: [1, 1.5, 1] }} 
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2
                    }}  
                  />
                  <span className="relative overflow-hidden">
                    <motion.span
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Future of finance is here
                    </motion.span>
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={textRevealVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-bold !leading-tight mt-4 mb-4 w-full min-w-0 overflow-visible break-words"
                >
                  {"Simplify your finances".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className={char === " " ? "inline-block w-2" : "inline-block"}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <br />
                  {"with".split("").map((char, index) => (
                    <motion.span
                      key={`with-${index}`}
                      variants={letterVariants}
                      className={char === " " ? "inline-block w-2" : "inline-block"}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <br />
                  <span className="gradient-text">
                    {"innovative loan".split("").map((char, index) => (
                      <motion.span
                        key={`innovative-${index}`}
                        variants={letterVariants}
                        className={char === " " ? "inline-block w-2" : "inline-block"}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  <br />
                  <span className="gradient-text">
                    {"solutions".split("").map((char, index) => (
                      <motion.span
                        key={`solutions-${index}`}
                        variants={letterVariants}
                        className={char === " " ? "inline-block w-2" : "inline-block"}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-finn-800/80 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mt-6 lg:mt-8"
                >
                  Experience seamless financial services with competitive rates, quick processing time, and 100% secure transactions tailored to your unique needs.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                >
                  <FinnButton 
                    size="lg" 
                    onClick={handleGetStarted} 
                    isLoading={isLoading}
                    loadingText="Processing"
                    glowEffect
                    gradient
                    asChild
                  >
                    <Link to="/loans">Explore Loans</Link>
                  </FinnButton>
                  <FinnButton 
                    size="lg" 
                    variant="outline"
                    asChild
                  >
                    <Link to="/emi-calculator" className="flex items-center">
                      <Calculator className="mr-2 h-5 w-5" />
                      EMI Calculator
                    </Link>
                  </FinnButton>
                </motion.div>
              </motion.div>
              
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className="relative hidden lg:block"
              >
                <motion.div 
                  className="w-full h-80 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg border border-white/80 p-6 overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="relative w-full h-full rounded-xl overflow-hidden"
                  >
                    <video 
                      src="/loan.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-xl"
                      aria-label="Financial Freedom"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-finn-100 flex items-center justify-center">
                          <span className="text-finn-600 text-xl">📈</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-finn-800">Growth Rate</p>
                          <p className="text-lg font-bold text-finn-600">+24.5%</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-600 text-xl">💰</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-finn-800">Total Loans</p>
                          <p className="text-lg font-bold text-finn-600">₹500Cr+</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-finn-600 to-finn-500 rounded-xl -z-10"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-finn-300 to-green-300 rounded-xl -z-10"
                  whileHover={{ rotate: -5, scale: 1.05 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
