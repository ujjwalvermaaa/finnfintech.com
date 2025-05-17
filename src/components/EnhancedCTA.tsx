import { motion } from "framer-motion";
import { FinnButton } from "./ui/FinnButton";
import { Link } from "react-router-dom";

const EnhancedCTA = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-finn-600 to-finn-500">
      {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
          <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
            }}
            transition={{ 
            duration: 8,
              repeat: Infinity,
            repeatType: "reverse"
            }}
          />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              Ready For Success
            </span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight"
            transition={{ delay: 0.1 }}
          >
            Ready to take the next step in your 
            <span className="relative">
              <span className="relative z-10"> financial journey</span>
              <motion.span 
                className="absolute -bottom-2 left-0 h-3 bg-white/30 w-full -z-0 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>?
          </motion.h2>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            transition={{ delay: 0.2 }}
          >
            Our team of financial experts is ready to help you achieve your goals with personalized loan solutions tailored to your unique needs.
          </motion.p>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={{ delay: 0.3 }}
          >
            <FinnButton
              size="lg"
              variant="secondary" 
              className="bg-white text-finn-600 hover:bg-white/90"
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </FinnButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCTA;
