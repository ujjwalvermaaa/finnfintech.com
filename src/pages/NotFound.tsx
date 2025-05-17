
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FinnButton } from "@/components/ui/FinnButton";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-finn-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-32 h-32 bg-finn-100 rounded-full mx-auto flex items-center justify-center"
          >
            <span className="text-5xl font-display font-bold text-finn-600">404</span>
          </motion.div>
        </div>
        
        <h1 className="text-3xl font-display font-bold text-finn-800 mb-4">Page not found</h1>
        <p className="text-finn-700/80 mb-8">
          We're sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <FinnButton asChild>
          <Link to="/">Return to Home</Link>
        </FinnButton>
      </motion.div>
    </div>
  );
};

export default NotFound;
