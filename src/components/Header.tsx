import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Loans", path: "/loans" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        <div className="hidden lg:flex z-50">
          <Link to="/">
          <Logo className={cn(scrolled ? "text-finn-800" : "text-finn-800")} />
        </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "relative px-1 py-2 font-medium text-sm transition-colors",
                    location.pathname === item.path
                      ? "text-finn-600"
                      : "text-finn-900/80 hover:text-finn-600",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-finn-500 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 relative w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={cn(
              "w-6 transition-all duration-300",
              isOpen ? "hidden" : "block"
            )}
          >
            <span
              className={cn(
                "block h-0.5 mb-1.5 w-full rounded-full transition-all",
                scrolled || isOpen ? "bg-finn-800" : "bg-finn-800"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 mb-1.5 w-full rounded-full transition-all",
                scrolled || isOpen ? "bg-finn-800" : "bg-finn-800"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 w-3/4 rounded-full transition-all",
                scrolled || isOpen ? "bg-finn-800" : "bg-finn-800"
              )}
            ></span>
          </div>
          
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 transition-all duration-300",
              !isOpen ? "hidden" : "block"
            )}
          >
            <span
              className={cn(
                "block absolute w-full h-0.5 rounded-full transition-all rotate-45 bg-finn-800"
              )}
            ></span>
            <span
              className={cn(
                "block absolute w-full h-0.5 rounded-full transition-all -rotate-45 bg-finn-800"
              )}
            ></span>
          </div>
        </button>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 w-full h-screen bg-white flex flex-col p-6 z-[999] overflow-y-auto"
            >
              <nav className="flex flex-col space-y-6 flex-1 min-h-0">
                <ul className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: navItems.indexOf(item) * 0.1,
                      }}
                    >
                      <Link
                        to={item.path}
                        className={cn(
                          "text-lg font-medium",
                          location.pathname === item.path
                            ? "text-finn-600"
                            : "text-finn-800"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
